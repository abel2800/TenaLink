# Screenshots and Evidence Log

This log preserves the Week 1 captures and links to the Week 2 responsive evidence. Week 2 captures are full-page PNG screenshots generated in local Chromium with Playwright.

## Saved screenshots

| Page | Desktop | Mobile |
|---|---|---|
| Home | [home-desktop.png](./screenshots/home-desktop.png) | [home-mobile.png](./screenshots/home-mobile.png) |
| Find Care | [find-care-desktop.png](./screenshots/find-care-desktop.png) | [find-care-mobile.png](./screenshots/find-care-mobile.png) |
| Appointments | [appointments-desktop.png](./screenshots/appointments-desktop.png) | [appointments-mobile.png](./screenshots/appointments-mobile.png) |

### Week 2 responsive screenshots

Each screenshot uses the exact CSS viewport width in its filename.

| Page | 360px | 768px | 1440px |
|---|---|---|---|
| Home | [home-360.png](./screenshots/week2/home-360.png) | [home-768.png](./screenshots/week2/home-768.png) | [home-1440.png](./screenshots/week2/home-1440.png) |
| Find Care | [find-care-360.png](./screenshots/week2/find-care-360.png) | [find-care-768.png](./screenshots/week2/find-care-768.png) | [find-care-1440.png](./screenshots/week2/find-care-1440.png) |
| Appointments | [appointments-360.png](./screenshots/week2/appointments-360.png) | [appointments-768.png](./screenshots/week2/appointments-768.png) | [appointments-1440.png](./screenshots/week2/appointments-1440.png) |

## URL checks
- `http://localhost:8000/index.html` — HTTP 200
- `http://localhost:8000/find-care.html` — HTTP 200
- `http://localhost:8000/appointments.html` — HTTP 200

## Visual wireframes
Six SVG wireframes, covering desktop and mobile layouts for Home, Find Care, and Appointments, are linked from [wireframes.md](./wireframes.md).

## Validation notes
- Week 1 screenshots and wireframes remain available as historical design evidence.
- Week 2 responsive layout was checked at 360px, 768px, and 1440px on all three pages; each screenshot's pixel width matched its CSS viewport and no horizontal overflow was found.
- Search, filtering, empty states, both detail-dialog types, mobile navigation, keyboard Escape behavior, and the local-only appointment demonstration were checked in Chromium.
- The appointment page blocks an incomplete required form, displays a demo confirmation after a valid request, and keeps reserved sample slots in `sessionStorage`.
- Contrast samples, labelled form controls, visible focus behavior, active-page semantics, and reduced-motion styling were checked. See [testing.md](./testing.md) for methods, results, and limitations.
- These are frontend demonstration checks, not clinical, production, screen-reader, or cross-browser certification.
