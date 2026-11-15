# Week 2 Issue and Revision Log

| ID | Issue or refinement | Revision | Verification | Status |
|---|---|---|---|---|
| W2-01 | Active navigation was visually marked but needed a programmatic current-page indicator. | The shared navigation script applies `aria-current="page"` to the active link. | Confirmed on Home, Find Care, and Appointments. | Fixed |
| W2-02 | Directory searches could produce no matches without enough recovery guidance. | Added an announced no-results state, section-specific empty messages, and a clear-filters action. | Searched an unmatched term; empty state appeared, and clearing restored all sample results. | Fixed |
| W2-03 | Appointment confirmation could disappear when the slot list re-rendered after a valid demo request. | Kept confirmation visible after reserving a slot; changing the provider/date or selecting another time dismisses stale confirmation. | Submitted a valid request and verified confirmation remained visible while the reserved slot became unavailable. | Fixed |
| W2-04 | Dialog and mobile-menu keyboard behavior needed explicit checks. | Added/retained Escape handling and focus return for the menu and detail dialog; kept a labelled close control. | Browser keyboard events closed the menu and hospital dialog; focus returned to the expected control. | Verified |
| W2-05 | Responsive evidence needed to represent the requested viewport widths accurately. | Regenerated all nine full-page screenshots with local Chromium at 360px, 768px, and 1440px CSS widths. | PNG dimensions matched their names; all pages had no horizontal overflow at those widths. | Verified |
| W2-06 | Motion preference and readable text contrast needed recording. | Added reduced-motion handling and measured representative CSS text/background pairs. | Reduced-motion computed scroll behavior was `auto`; selected contrast pairs ranged from 5.21:1 to 9.72:1. | Verified |

See [testing.md](./testing.md) for the full methods and limitations.
