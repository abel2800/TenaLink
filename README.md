# TenaLink

TenaLink is a healthcare discovery frontend concept developed during the Ishvexa Hub internship. Week 1 established the product brief and design direction; Week 2 turns that foundation into a responsive three-page website with fictional sample listings and a local-only appointment demonstration.

## Project status

The Week 2 frontend includes:
- Home page with care search, specialty categories, featured sample listings, and safety information
- Find Care directory with search, specialty filters, empty states, and provider/facility detail dialogs
- Appointments page with sample provider/date/time selection and a browser-session demonstration request
- Shared responsive styles, mobile navigation, active-page semantics, visible focus, and reduced-motion support
- Nine full-page screenshots at 360px, 768px, and 1440px viewports
- Testing notes, issue/revision log, asset source log, and LinkedIn post drafts

Week 1 planning documents and wireframes remain in `docs/`.

## Local setup

```bash
python -m http.server 8000
```

Then open:
- http://localhost:8000/
- http://localhost:8000/find-care.html
- http://localhost:8000/appointments.html

## Project structure

```text
TenaLink/
├── assets/
│   ├── TenaLink-full-logo.png
│   └── TenaLink.png
├── css/
│   └── styles.css
├── docs/
│   ├── asset-source-log.md
│   ├── brief.md
│   ├── design-system.md
│   ├── evidence.md
│   ├── issue-log.md
│   ├── problem-statement.md
│   ├── project-objectives.md
│   ├── screenshots/
│   │   └── week2/
│   │       ├── home-360.png
│   │       ├── home-768.png
│   │       ├── home-1440.png
│   │       ├── find-care-360.png
│   │       ├── find-care-768.png
│   │       ├── find-care-1440.png
│   │       ├── appointments-360.png
│   │       ├── appointments-768.png
│   │       └── appointments-1440.png
│   ├── scope-and-limitations.md
│   ├── sitemap.md
│   ├── testing.md
│   ├── target-users.md
│   ├── week-1-linkedin/
│   │   ├── post.md
│   │   ├── home-desktop.png
│   │   ├── home-mobile.png
│   │   ├── find-care-desktop.png
│   │   ├── find-care-mobile.png
│   │   ├── appointments-desktop.png
│   │   └── appointments-mobile.png
│   ├── week-2-linkedin/
│   │   ├── home-360.png
│   │   ├── home-768.png
│   │   ├── home-1440.png
│   │   ├── find-care-360.png
│   │   ├── find-care-768.png
│   │   ├── find-care-1440.png
│   │   ├── appointments-360.png
│   │   ├── appointments-768.png
│   │   └── appointments-1440.png
│   ├── week-2-progress.md
│   ├── week1-submission-checklist.md
│   ├── wireframes.md
│   └── wireframes/
│       ├── appointments-desktop.svg
│       ├── appointments-mobile.svg
│       ├── find-care-desktop.svg
│       ├── find-care-mobile.svg
│       ├── home-desktop.svg
│       └── home-mobile.svg
├── appointments.html
├── find-care.html
├── index.html
├── js/
│   ├── navigation.js
│   ├── site-data.js
│   └── site.js
├── .gitignore
└── README.md
```

## Submission and evidence

- [Week 2 progress and LinkedIn drafts](docs/week-2-progress.md)
- [Browser and accessibility checks](docs/testing.md)
- [Issue and revision log](docs/issue-log.md)
- [Week 1 LinkedIn draft and screenshots](docs/week-1-linkedin/post.md)
- [Week 2 LinkedIn screenshots](docs/week-2-linkedin/)
- [Week 2 screenshots](docs/screenshots/week2/)
- Repository: [abel2800/TenaLink](https://github.com/abel2800/TenaLink)

The LinkedIn copy is prepared as drafts and has not been published. Local changes must be pushed before the online repository reflects this work.

## Limitations

- All provider, facility, specialty, and availability data is fictional.
- Appointment selections are demo reservations held in the current browser session; no appointment is created with a clinic.
- Contact-form values are not stored or transmitted. Use fictional details only.
- The site does not provide diagnosis, treatment, emergency support, or medical advice.
- No AI API, backend, authentication, deployment, or live provider database is included.
