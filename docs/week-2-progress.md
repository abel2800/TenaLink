# Week 2 — TenaLink Responsive Website

## Outcome

The Week 1 TenaLink concept is now a responsive frontend with exactly three main pages: Home, Find Care, and Appointments. The site uses fictional Addis Ababa sample listings and availability. It does not integrate an AI API or create real appointments.

## Completed work

- Refined shared color, typography, spacing, button, card, and navigation styles.
- Added responsive mobile navigation and an active-page indicator.
- Built the home hero, search entry point, specialty cards, featured sample facilities/providers, guided navigation, safety disclaimer, and footer.
- Built the Find Care search/filter experience, clear/reset behavior, empty states, and hospital/provider detail dialogs.
- Built a demonstration-only appointment flow with provider/date/time selection, required fields, confirmation, and session-local slot reservations.
- Checked responsive layouts at 360px, 768px, and 1440px with no horizontal overflow.
- Checked keyboard behavior, form labels, focus return, reduced motion, and representative text contrast.
- Recorded issues and refinements in [issue-log.md](./issue-log.md), and detailed test methods in [testing.md](./testing.md).

## Screenshot evidence

Each page has full-page captures at all three tested widths:

- Home: [360px](./screenshots/week2/home-360.png) · [768px](./screenshots/week2/home-768.png) · [1440px](./screenshots/week2/home-1440.png)
- Find Care: [360px](./screenshots/week2/find-care-360.png) · [768px](./screenshots/week2/find-care-768.png) · [1440px](./screenshots/week2/find-care-1440.png)
- Appointments: [360px](./screenshots/week2/appointments-360.png) · [768px](./screenshots/week2/appointments-768.png) · [1440px](./screenshots/week2/appointments-1440.png)

## Wednesday work-in-progress post — draft

> Week 2 at Ishvexa Hub: I’m developing TenaLink, my healthcare discovery frontend concept, into a responsive three-page experience. This week I’m focusing on the Home, Find Care, and Appointments interfaces, with sample listings and a clear, calm user journey. I’m also checking how the layouts adapt across mobile, tablet, and desktop sizes. The listings and availability are fictional, and the appointment flow is a frontend demonstration only. I’ll share the tested results at the end of the week.
>
> #IshvexaHub #Internship #WebDevelopment #ResponsiveDesign #UX

## Friday results post — draft

> Week 2 results at Ishvexa Hub: TenaLink now has a responsive Home page, searchable and filterable Find Care directory, and a local-only appointment demonstration. I added provider and facility detail dialogs, empty states, mobile navigation, keyboard behavior, and safety notices. I tested all three pages at 360px, 768px, and 1440px with no horizontal overflow, and documented the accessibility checks and refinements.
>
> All provider and availability data is fictional. The appointment demo does not contact a clinic or create a real booking, and no AI API is integrated. Screenshots and testing notes are in the repository.
>
> #IshvexaHub #Internship #WebDevelopment #Accessibility #ResponsiveDesign

Both LinkedIn posts above are drafts only and have not been published.

## Submission

- Repository: [abel2800/TenaLink](https://github.com/abel2800/TenaLink)
- Evidence: [`screenshots/week2/`](./screenshots/week2/) and [testing.md](./testing.md)
- Repository changes in this working tree have not been pushed; push the branch before treating the online link as the updated submission.

## Remaining limitations

The app has no production backend, AI integration, authentication, live data, or real booking. Sample reservations live only in browser `sessionStorage`, and contact form values are not saved or transmitted. This is a frontend concept, not a medical service.
