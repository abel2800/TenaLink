# Week 2 Testing Record

## Environment and method

- Browser: local Chromium controlled with Playwright.
- Pages: local `file://` copies of `index.html`, `find-care.html`, and `appointments.html`.
- Responsive screenshots: full-page captures at CSS viewport widths 360px, 768px, and 1440px, with device scale factor 1.
- Interaction checks used browser-generated clicks and keyboard events. This is automated browser testing, not a manual assistive-technology audit.

## Responsive layout

All three pages were measured at each required viewport. `document.documentElement.scrollWidth` equalled the viewport width in all nine cases, so no horizontal overflow was observed. The nine PNG files are exactly 360px, 768px, and 1440px wide as named.

| Page | 360px | 768px | 1440px |
|---|---|---|---|
| Home | Pass | Pass | Pass |
| Find Care | Pass | Pass | Pass |
| Appointments | Pass | Pass | Pass |

Screenshots are in [`screenshots/week2/`](./screenshots/week2/).

## Functional checks

- **Navigation:** Each page exposes its active link with `aria-current="page"`. At 360px the mobile menu opens, updates `aria-expanded`, closes on Escape, and returns focus to the menu button.
- **Home search and assets:** Page images loaded without a failed image; the home search routes to the Find Care page with the query.
- **Directory:** Initial results show four sample facilities and six sample providers. Cardiology filtering shows two facilities and one provider; clearing restores the full set. An unmatched query shows the no-results state.
- **Details:** Hospital and provider dialogs open with their respective sample details. Escape closes the hospital dialog and returns focus to its trigger; the provider dialog closes with its labelled close button.
- **Appointment demonstration:** Required fields prevent an incomplete submission. A valid demo request displays an explicit local-only confirmation. Three sample slots can be reserved for the selected date, remain unavailable after reload in the same session, and produce a next-availability message when the day is full.
- **Safety:** Confirmation text states that nothing was sent to a clinic. Provider, facility, and availability data are fictional; no real booking is created.

## Accessibility and visual checks

- Form fields can be located by their visible labels.
- Interactive elements have visible `:focus-visible` styling; the active navigation item is programmatically identified.
- Mobile navigation and dialog Escape handling were exercised with browser keyboard events.
- Under `prefers-reduced-motion: reduce`, the document's computed scroll behavior is `auto`.
- Selected text/background contrast ratios calculated from the CSS colors:
  - Primary button text `#FFFFFF` on `#047857`: **5.48:1**
  - Heading text `#064E3B` on `#FFFFFF`: **9.72:1**
  - Muted body text `#4B5563` on `#FFFFFF`: **7.56:1**
  - Primary accent `#047857` on mint `#ECFDF5`: **5.21:1**

These selected text pairs exceed the 4.5:1 WCAG AA threshold for normal text. This calculation is not a full contrast audit of every state or surface.

## Limits

- Checks were run in one local Chromium environment; other browser engines and real mobile hardware were not tested.
- No screen reader or formal WCAG conformance audit was run.
- No backend, live provider data, AI service, or real appointment workflow exists in this frontend.
