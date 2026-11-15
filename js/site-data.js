(function () {
  const hospitals = [
    {
      id: "bole-demo-clinic",
      name: "TenaLink Demo Clinic — Bole",
      location: "Bole, Addis Ababa",
      specialties: ["General Medicine", "Cardiology", "Dermatology"],
      description: "A fictional sample clinic used to demonstrate provider discovery in TenaLink."
    },
    {
      id: "arada-demo-hospital",
      name: "TenaLink Demo Hospital — Arada",
      location: "Arada, Addis Ababa",
      specialties: ["Cardiology", "Neurology", "Dentistry"],
      description: "An illustrative hospital listing with sample specialty information."
    },
    {
      id: "kirkos-demo-center",
      name: "TenaLink Demo Care Center — Kirkos",
      location: "Kirkos, Addis Ababa",
      specialties: ["Pediatrics", "General Medicine"],
      description: "A fictional care center for exploring the sample directory."
    },
    {
      id: "yeka-demo-clinic",
      name: "TenaLink Demo Clinic — Yeka",
      location: "Yeka, Addis Ababa",
      specialties: ["Neurology", "Dermatology", "General Medicine"],
      description: "A sample listing created for this front-end demonstration."
    }
  ];

  const doctors = [
    {
      id: "selam-bekele",
      name: "Selam Bekele",
      specialty: "General Medicine",
      hospitalId: "bole-demo-clinic",
      schedule: [
        { offset: 1, slots: [{ time: "09:00", available: true }, { time: "10:30", available: true }, { time: "14:00", available: true }] },
        { offset: 2, slots: [{ time: "09:30", available: true }, { time: "12:00", available: true }] },
        { offset: 4, slots: [{ time: "10:00", available: true }, { time: "13:30", available: true }] }
      ]
    },
    {
      id: "mikael-tadesse",
      name: "Mikael Tadesse",
      specialty: "Cardiology",
      hospitalId: "arada-demo-hospital",
      schedule: [
        { offset: 1, slots: [{ time: "08:30", available: true }, { time: "11:00", available: true }] },
        { offset: 3, slots: [{ time: "09:00", available: true }, { time: "13:00", available: true }, { time: "15:00", available: true }] },
        { offset: 5, slots: [{ time: "10:30", available: true }] }
      ]
    },
    {
      id: "hana-girma",
      name: "Hana Girma",
      specialty: "Dermatology",
      hospitalId: "bole-demo-clinic",
      schedule: [
        { offset: 2, slots: [{ time: "09:00", available: true }, { time: "11:30", available: true }] },
        { offset: 3, slots: [{ time: "10:00", available: true }, { time: "14:30", available: true }] },
        { offset: 6, slots: [{ time: "09:30", available: true }] }
      ]
    },
    {
      id: "liya-mekonnen",
      name: "Liya Mekonnen",
      specialty: "Pediatrics",
      hospitalId: "kirkos-demo-center",
      schedule: [
        { offset: 1, slots: [{ time: "08:00", available: true }, { time: "10:00", available: true }] },
        { offset: 4, slots: [{ time: "09:00", available: true }, { time: "12:30", available: true }] },
        { offset: 7, slots: [{ time: "11:00", available: true }] }
      ]
    },
    {
      id: "nuru-tesfaye",
      name: "Nuru Tesfaye",
      specialty: "Neurology",
      hospitalId: "yeka-demo-clinic",
      schedule: [
        { offset: 2, slots: [{ time: "09:30", available: true }] },
        { offset: 5, slots: [{ time: "10:00", available: true }, { time: "13:00", available: true }] },
        { offset: 7, slots: [{ time: "09:00", available: true }] }
      ]
    },
    {
      id: "dawit-fikru",
      name: "Dawit Fikru",
      specialty: "Dentistry",
      hospitalId: "arada-demo-hospital",
      schedule: [
        { offset: 1, slots: [{ time: "09:00", available: true }, { time: "12:00", available: true }] },
        { offset: 3, slots: [{ time: "10:00", available: true }, { time: "14:00", available: true }] },
        { offset: 6, slots: [{ time: "11:30", available: true }] }
      ]
    }
  ];

  window.TenaLinkData = Object.freeze({
    specialties: ["Cardiology", "Dermatology", "Pediatrics", "Neurology", "Dentistry", "General Medicine"],
    hospitals: hospitals,
    doctors: doctors
  });
})();
