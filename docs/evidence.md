# Screenshots and Evidence Log

The site was rendered locally and captured as full-page PNG screenshots at 1440px desktop and 390px mobile viewport widths. Captures were regenerated after aligning the mobile menu button beside the visit button at the right side of the header.

## Saved screenshots

| Page | Desktop | Mobile |
|---|---|---|
| Home | [home-desktop.png](./screenshots/home-desktop.png) | [home-mobile.png](./screenshots/home-mobile.png) |
| Find Care | [find-care-desktop.png](./screenshots/find-care-desktop.png) | [find-care-mobile.png](./screenshots/find-care-mobile.png) |
| Appointments | [appointments-desktop.png](./screenshots/appointments-desktop.png) | [appointments-mobile.png](./screenshots/appointments-mobile.png) |

## URL checks
- `http://localhost:8000/index.html` — HTTP 200
- `http://localhost:8000/find-care.html` — HTTP 200
- `http://localhost:8000/appointments.html` — HTTP 200

## Visual wireframes
Six SVG wireframes, covering desktop and mobile layouts for Home, Find Care, and Appointments, are linked from [wireframes.md](./wireframes.md).

## Validation notes
- The three main HTML pages loaded and showed their expected page headings and navigation.
- Desktop and mobile captures were generated at their documented viewport widths.
- Responsive layout was checked at 320, 360, 375, 390, 430, 640, 768, 900, 901, 1024, 1440, and 1920 pixels across all three pages with no horizontal overflow or header collisions.
- Mobile navigation was checked for open and Escape-to-close behavior at the tested narrow and tablet widths.
- PNG files and SVG wireframes were checked for valid image dimensions / XML markup.
- Local links, fragment targets, semantic page headings, and the mobile menu opening behavior were checked.
- The prototype retains its white and emerald-green visual direction.
