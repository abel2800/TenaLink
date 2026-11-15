(function () {
  "use strict";

  const data = window.TenaLinkData;
  if (!data) throw new Error("TenaLink demo data did not load.");

  const hospitalById = new Map(data.hospitals.map((hospital) => [hospital.id, hospital]));
  let lastDetailsTrigger = null;

  function element(tagName, className, text) {
    const node = document.createElement(tagName);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function buildingIllustration() {
    const wrapper = element("div", "provider-art");
    wrapper.setAttribute("aria-hidden", "true");
    wrapper.innerHTML = '<svg viewBox="0 0 64 64" focusable="false"><path d="M12 54V17h40v37M8 54h48M23 27h6m6 0h6M23 37h6m6 0h6M28 54V44h8v10M27 8h10v9H27z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.6"/></svg>';
    return wrapper;
  }

  function hospitalCard(hospital, compact) {
    const card = element("article", "directory-card hospital-card");
    const art = buildingIllustration();
    const badge = element("span", "demo-label", "Fictional demo listing");
    art.append(badge);

    const content = element("div", "directory-card-content");
    content.append(
      element("p", "card-kicker", hospital.location),
      element("h3", "", hospital.name),
      element("p", "card-description", hospital.description)
    );

    const tags = element("ul", "tag-list");
    hospital.specialties.forEach((specialty) => tags.append(element("li", "tag", specialty)));
    content.append(tags);

    const actions = element("div", "card-actions");
    if (compact) {
      const link = element("a", "text-link", "Explore hospital");
      link.href = "find-care.html?type=hospital";
      actions.append(link);
    } else {
      const button = element("button", "button button-outline button-small", "View hospital details");
      button.type = "button";
      button.dataset.detailsKind = "hospital";
      button.dataset.detailsId = hospital.id;
      actions.append(button);
    }
    content.append(actions);
    card.append(art, content);
    return card;
  }

  function doctorCard(doctor, compact) {
    const hospital = hospitalById.get(doctor.hospitalId);
    const card = element("article", "directory-card doctor-card");
    const art = element("div", "provider-art doctor-art");
    art.setAttribute("aria-hidden", "true");
    art.append(element("span", "avatar-initials", doctor.name.split(" ").map((part) => part[0]).join("")));
    art.append(element("span", "demo-label", "Fictional demo profile"));

    const content = element("div", "directory-card-content");
    content.append(
      element("p", "card-kicker", doctor.specialty),
      element("h3", "", doctor.name),
      element("p", "card-description", hospital.name)
    );
    const nextSlot = firstAvailableSlot(doctor);
    content.append(element("p", "availability-note", nextSlot ? "Sample availability: " + formatDate(nextSlot.date) : "Sample availability varies."));

    const actions = element("div", "card-actions");
    if (compact) {
      const link = element("a", "text-link", "Explore profile");
      link.href = "find-care.html?type=doctor";
      actions.append(link);
    } else {
      const button = element("button", "button button-outline button-small", "View profile details");
      button.type = "button";
      button.dataset.detailsKind = "doctor";
      button.dataset.detailsId = doctor.id;
      actions.append(button);
    }
    content.append(actions);
    card.append(art, content);
    return card;
  }

  function formatDate(isoDate) {
    const date = new Date(isoDate + "T12:00:00Z");
    return new Intl.DateTimeFormat("en-ET", {
      timeZone: "Africa/Addis_Ababa",
      weekday: "short",
      day: "numeric",
      month: "short"
    }).format(date);
  }

  function dateForOffset(offset) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Africa/Addis_Ababa",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());
    const part = (type) => parts.find((item) => item.type === type).value;
    const date = new Date(Date.UTC(Number(part("year")), Number(part("month")) - 1, Number(part("day"))));
    date.setUTCDate(date.getUTCDate() + offset);
    return date.toISOString().slice(0, 10);
  }

  function readReservations() {
    try {
      const stored = window.sessionStorage.getItem("tenalink-demo-reservations");
      if (!stored) return new Set();
      const values = JSON.parse(stored);
      if (!Array.isArray(values) || !values.every((value) => typeof value === "string")) {
        throw new Error("Saved demo reservation data has an unexpected format.");
      }
      return new Set(values);
    } catch (error) {
      console.error("Could not read demo reservations from this browser session.", error);
      return new Set();
    }
  }

  function reservationKey(doctorId, date, time) {
    return doctorId + "|" + date + "|" + time;
  }

  function firstAvailableSlot(doctor) {
    const reservations = readReservations();
    for (const day of doctor.schedule) {
      const date = dateForOffset(day.offset);
      const slot = day.slots.find((item) => item.available && !reservations.has(reservationKey(doctor.id, date, item.time)));
      if (slot) return { date: date, time: slot.time };
    }
    return null;
  }

  function initHome() {
    const hospitals = document.querySelector("[data-featured-hospitals]");
    const doctors = document.querySelector("[data-featured-doctors]");
    if (hospitals) data.hospitals.slice(0, 3).forEach((item) => hospitals.append(hospitalCard(item, true)));
    if (doctors) data.doctors.slice(0, 3).forEach((item) => doctors.append(doctorCard(item, true)));

    const form = document.getElementById("home-search-form");
    const input = document.getElementById("home-search");
    if (form && input) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const destination = new URL("find-care.html", window.location.href);
        const query = input.value.trim();
        if (query) destination.searchParams.set("q", query);
        window.location.assign(destination.href);
      });
    }
  }

  function initDirectory() {
    const hospitalGrid = document.getElementById("hospital-results");
    const doctorGrid = document.getElementById("doctor-results");
    const form = document.getElementById("directory-search-form");
    const search = document.getElementById("directory-search");
    const resultSummary = document.getElementById("result-summary");
    const noResults = document.getElementById("no-results");
    const hospitalEmpty = document.getElementById("hospital-empty");
    const doctorEmpty = document.getElementById("doctor-empty");
    const clearButton = document.getElementById("clear-filters");
    const dialog = document.getElementById("details-dialog");

    if (!hospitalGrid || !doctorGrid || !form || !search || !resultSummary || !noResults || !dialog) return;

    const params = new URLSearchParams(window.location.search);
    let activeSpecialty = data.specialties.find((item) => item.toLowerCase() === (params.get("specialty") || "").toLowerCase()) || "All specialties";
    search.value = params.get("q") || "";

    function render() {
      const query = search.value.trim().toLocaleLowerCase();
      const hospitals = data.hospitals.filter((hospital) => {
        const specialtyMatch = activeSpecialty === "All specialties" || hospital.specialties.includes(activeSpecialty);
        const searchable = [hospital.name, hospital.location, hospital.description, hospital.specialties.join(" ")].join(" ").toLocaleLowerCase();
        return specialtyMatch && (!query || searchable.includes(query));
      });
      const doctors = data.doctors.filter((doctor) => {
        const hospital = hospitalById.get(doctor.hospitalId);
        const specialtyMatch = activeSpecialty === "All specialties" || doctor.specialty === activeSpecialty;
        const searchable = [doctor.name, doctor.specialty, hospital.name, hospital.location].join(" ").toLocaleLowerCase();
        return specialtyMatch && (!query || searchable.includes(query));
      });

      hospitalGrid.replaceChildren(...hospitals.map((item) => hospitalCard(item, false)));
      doctorGrid.replaceChildren(...doctors.map((item) => doctorCard(item, false)));
      if (hospitalEmpty) hospitalEmpty.hidden = hospitals.length > 0;
      if (doctorEmpty) doctorEmpty.hidden = doctors.length > 0;
      noResults.hidden = hospitals.length + doctors.length > 0;
      resultSummary.textContent = hospitals.length + " sample hospitals and " + doctors.length + " sample providers";

      document.querySelectorAll("[data-specialty-filter]").forEach((button) => {
        const selected = button.dataset.specialtyFilter === activeSpecialty;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
    }

    document.querySelectorAll("[data-specialty-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        activeSpecialty = button.dataset.specialtyFilter;
        render();
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      render();
    });
    search.addEventListener("input", render);

    if (clearButton) {
      clearButton.addEventListener("click", () => {
        search.value = "";
        activeSpecialty = "All specialties";
        window.history.replaceState({}, "", window.location.pathname);
        render();
        search.focus();
      });
    }

    hospitalGrid.addEventListener("click", (event) => openDetails(event, dialog));
    doctorGrid.addEventListener("click", (event) => openDetails(event, dialog));
    const closeButton = document.getElementById("details-close");
    if (closeButton) closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      dialog.close();
      if (lastDetailsTrigger && lastDetailsTrigger.isConnected) lastDetailsTrigger.focus();
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    render();
    if (params.get("type") === "hospital") hospitalGrid.scrollIntoView({ block: "start" });
    if (params.get("type") === "doctor") doctorGrid.scrollIntoView({ block: "start" });
    if (params.get("specialty")) document.getElementById("specialty-filters").scrollIntoView({ block: "center" });
  }

  function openDetails(event, dialog) {
    const button = event.target.closest("[data-details-kind]");
    if (!button) return;
    lastDetailsTrigger = button;

    const kind = button.dataset.detailsKind;
    const item = kind === "hospital"
      ? hospitalById.get(button.dataset.detailsId)
      : data.doctors.find((doctor) => doctor.id === button.dataset.detailsId);
    if (!item) throw new Error("The requested sample directory item was not found.");

    const title = document.getElementById("details-title");
    const content = document.getElementById("details-content");
    const bookingLink = document.getElementById("details-booking");
    content.replaceChildren();

    if (kind === "hospital") {
      title.textContent = item.name;
      content.append(
        element("p", "demo-label", "Fictional demonstration listing — not a real facility"),
        element("p", "", item.description),
        element("p", "card-kicker", item.location),
        element("h3", "detail-subheading", "Sample specialties"),
        element("p", "", item.specialties.join(", "))
      );
      const doctor = data.doctors.find((candidate) => candidate.hospitalId === item.id);
      bookingLink.href = doctor ? "appointments.html?doctor=" + encodeURIComponent(doctor.id) : "appointments.html";
      bookingLink.textContent = doctor ? "Explore a sample appointment" : "Explore appointments";
    } else {
      const hospital = hospitalById.get(item.hospitalId);
      title.textContent = item.name;
      content.append(
        element("p", "demo-label", "Fictional demonstration profile — not a real provider"),
        element("p", "card-kicker", item.specialty),
        element("p", "", "Sample directory profile for the TenaLink front-end demonstration. No real credentials or medical services are represented."),
        element("h3", "detail-subheading", "Associated sample facility"),
        element("p", "", hospital.name + " · " + hospital.location)
      );
      bookingLink.href = "appointments.html?doctor=" + encodeURIComponent(item.id);
      bookingLink.textContent = "Choose a sample time";
    }

    dialog.showModal();
    document.getElementById("details-close").focus();
  }

  function initAppointments() {
    const form = document.getElementById("appointment-form");
    const doctorSelect = document.getElementById("appointment-doctor");
    const dateSelect = document.getElementById("appointment-date");
    const slotsContainer = document.getElementById("time-slots");
    const slotStatus = document.getElementById("slot-status");
    const confirmation = document.getElementById("appointment-confirmation");
    const storageNotice = document.getElementById("storage-notice");
    if (!form || !doctorSelect || !dateSelect || !slotsContainer || !slotStatus || !confirmation) return;

    data.doctors.forEach((doctor) => {
      const hospital = hospitalById.get(doctor.hospitalId);
      const option = element("option", "", doctor.name + " — " + doctor.specialty + " · " + hospital.name);
      option.value = doctor.id;
      doctorSelect.append(option);
    });

    const requestedDoctor = new URLSearchParams(window.location.search).get("doctor");
    if (data.doctors.some((doctor) => doctor.id === requestedDoctor)) doctorSelect.value = requestedDoctor;

    const reservations = readReservations();
    let selectedTime = "";

    function selectedDoctor() {
      return data.doctors.find((doctor) => doctor.id === doctorSelect.value);
    }

    function showStorageMessage(message) {
      if (!storageNotice) return;
      storageNotice.textContent = message;
      storageNotice.hidden = false;
    }

    function renderDates() {
      const doctor = selectedDoctor();
      const previousDate = dateSelect.value;
      dateSelect.replaceChildren();
      doctor.schedule.forEach((day) => {
        const date = dateForOffset(day.offset);
        const option = element("option", "", formatDate(date));
        option.value = date;
        dateSelect.append(option);
      });
      if (doctor.schedule.some((day) => dateForOffset(day.offset) === previousDate)) {
        dateSelect.value = previousDate;
      }
      renderSlots();
    }

    function renderSlots() {
      const doctor = selectedDoctor();
      const date = dateSelect.value;
      const day = doctor.schedule.find((item) => dateForOffset(item.offset) === date);
      selectedTime = "";
      slotsContainer.replaceChildren();

      if (!day) {
        slotStatus.textContent = "No sample schedule is available for this date.";
        return;
      }

      let availableCount = 0;
      day.slots.forEach((slot) => {
        const reserved = reservations.has(reservationKey(doctor.id, date, slot.time));
        const button = element("button", "time-slot", slot.time);
        button.type = "button";
        button.disabled = !slot.available || reserved;
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-label", slot.time + (button.disabled ? ", unavailable" : ", available sample time"));
        if (!button.disabled) availableCount += 1;
        button.addEventListener("click", () => {
          confirmation.hidden = true;
          selectedTime = slot.time;
          slotsContainer.querySelectorAll(".time-slot").forEach((item) => {
            item.classList.toggle("selected", item === button);
            item.setAttribute("aria-pressed", String(item === button));
          });
          slotStatus.textContent = "Selected sample time: " + slot.time;
        });
        slotsContainer.append(button);
      });

      if (availableCount) {
        slotStatus.textContent = availableCount + " sample time" + (availableCount === 1 ? "" : "s") + " available. Select one to continue.";
        return;
      }

      const nextDay = doctor.schedule.find((item) => {
        const nextDate = dateForOffset(item.offset);
        return nextDate > date && item.slots.some((slot) => slot.available && !reservations.has(reservationKey(doctor.id, nextDate, slot.time)));
      });
      if (nextDay) {
        slotStatus.textContent = "All sample times are full on this date. Next sample availability: " + formatDate(dateForOffset(nextDay.offset)) + ".";
      } else {
        slotStatus.textContent = "All sample times are reserved for this provider in this session. Choose another provider.";
      }
    }

    doctorSelect.addEventListener("change", () => {
      confirmation.hidden = true;
      renderDates();
    });
    dateSelect.addEventListener("change", () => {
      confirmation.hidden = true;
      renderSlots();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!selectedTime) {
        slotStatus.textContent = "Choose an available sample time before continuing.";
        document.getElementById("time-slots-heading").focus();
        return;
      }

      const doctor = selectedDoctor();
      const date = dateSelect.value;
      const key = reservationKey(doctor.id, date, selectedTime);
      if (reservations.has(key)) {
        slotStatus.textContent = "That sample time was just reserved. Please choose another time.";
        renderSlots();
        return;
      }

      const reservedTime = selectedTime;
      reservations.add(key);
      try {
        window.sessionStorage.setItem("tenalink-demo-reservations", JSON.stringify(Array.from(reservations)));
      } catch (error) {
        console.error("Could not save this demo reservation in the browser session.", error);
        showStorageMessage("This browser could not save demo reservations. The selected slot is held only until you leave this page.");
      }

      const hospital = hospitalById.get(doctor.hospitalId);
      confirmation.textContent = "Demo request confirmed for " + doctor.name + " at " + hospital.name + " on " + formatDate(date) + " at " + reservedTime + ". This confirmation is local to this browser demo; nothing was sent to a clinic.";
      confirmation.hidden = false;
      document.getElementById("contact-name").value = "";
      document.getElementById("contact-email").value = "";
      selectedTime = "";
      renderSlots();
    });

    renderDates();
  }

  initHome();
  initDirectory();
  initAppointments();
})();
