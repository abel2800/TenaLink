# Design System and Color Tokens

## Design direction
TenaLink adopts a premium, calming healthcare visual identity built around white space, emerald green accents, and crisp sans-serif typography. The system emphasizes clarity and trust while remaining modern and accessible.

## Color tokens
- Primary emerald: `#047857`
- Deep emerald: `#064E3B`
- Secondary emerald: `#059669`
- Mint surface: `#ECFDF5`
- Page surface: `#F9FAFB`
- Text: `#111827`
- Muted text: `#4B5563`
- Border: `#E5E7EB`
- White: `#FFFFFF`

## Typography
- Headings and body: `Inter, Manrope, "Segoe UI", sans-serif`
- Responsive heading sizes use `clamp()`.
- Font weight emphasis: 550–750

## Spacing scale
- `--space-1` through `--space-20`: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, and 80px

## Layout rules
- Main content is capped at 1180px with fluid side margins.
- Responsive layouts adapt at 920px, 680px, and 380px.
- Card grids reduce from three columns to two and then one where appropriate.
- Cards use rounded corners, light borders, and restrained shadows.
- Focus-visible controls use a high-contrast outline; reduced-motion preferences are respected.

## Component style
- Buttons: shared primary/outline styles; full-width on narrow layouts where useful.
- Cards: reusable directory, specialty, and process-card treatments.
- Inputs: labelled controls with visible keyboard focus.
- Badges: compact emerald/mint labels for fictional sample data.

The authoritative token definitions are in [`../css/styles.css`](../css/styles.css).
