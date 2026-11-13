# MediConnect

MediConnect is a responsive healthcare discovery and appointment platform concept created during Week 1 of the Ishvexa Hub internship. The project establishes the foundation for a patient-friendly experience that helps users find care providers, compare clinics, and manage upcoming appointments.

## Project status

This repository contains the first-week foundation work:
- formal project brief and problem statement
- user and objective definitions
- sitemap and page structure
- mobile and desktop wireframes
- design system with emerald and white premium palette
- semantic HTML prototype for the three required pages
- asset and source log

## Week 1 requirements covered

- Project brief and strategy definition
- Problem statement and objectives
- Target users and scope definition
- Three-page sitemap: Home, Find Care, Appointments
- Wireframes for mobile and desktop layouts
- Design tokens and visual direction
- Semantic HTML prototype and navigation
- Local repository initialization and documentation

## Local setup

```bash
git init
python -m http.server 8000
```

Then open:
- http://localhost:8000/
- http://localhost:8000/find-care.html
- http://localhost:8000/appointments.html

## Project structure

```text
MediConnect/
├── assets/
│   └── medi-connect-mark.svg
├── css/
│   └── styles.css
├── docs/
│   ├── asset-source-log.md
│   ├── brief.md
│   ├── design-system.md
│   ├── problem-statement.md
│   ├── project-objectives.md
│   ├── scope-and-limitations.md
│   ├── sitemap.md
│   ├── target-users.md
│   ├── week1-submission-checklist.md
│   └── wireframes.md
├── appointments.html
├── find-care.html
├── index.html
├── .gitignore
└── README.md
```

## Notes

- The project intentionally avoids AI integration and real booking logic in Week 1.
- The current implementation is a static semantic HTML prototype.
- Real appointment booking and API integration are reserved for later weeks.
