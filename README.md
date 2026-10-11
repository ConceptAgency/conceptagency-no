# conceptagency.no

Source for the Concept Agency AS website — a static site, no build step.

## Structure

| Path | Purpose |
|---|---|
| `index.html` | Homepage |
| `no.html` | Norwegian homepage — served at `/no` |
| `retail.html` | For Retail — served at `/retail` |
| `opticians.html` | For Opticians — served at `/opticians` |
| `forhandler.html` | Norwegian version of For Retail — served at `/forhandler` |
| `optiker.html` | Norwegian version of For Opticians — served at `/optiker` |
| `privacy.html` | Privacy — served at `/privacy` |
| `hippie-de-luxe.html` | Hippie de Luxe brand list (Norwegian) — served at `/hippie-de-luxe` |
| `milena-kling/` | Milena Kling brand page — served at `/milena-kling` |
| `images/` | Shared site imagery |
| `images/hdl/` | Hippie de Luxe brand logos — 480×240 WebP, one per brand, named by the brand's B2B slug |
| `_redirects` | Netlify redirects and pretty URLs |
| `llms.txt` | Machine-readable site summary |

## Deploying

The site is hosted on Netlify (project `conceptagency`, primary domain conceptagency.no).
There is no build command and no framework — the repository root *is* the publish directory.

## Notes

- Contact forms POST to a Zapier catch hook. The endpoint is visible in client-side
  JavaScript, so treat it as public and expect occasional junk submissions.
- The Milena Kling viewing form uses Netlify Forms instead (`data-netlify="true"`).
- The buyer pages (`forhandler`, `retail`, `optiker`, `opticians`) carry a questions-and-answers section.
  Each answer exists twice: in the visible HTML and in the `FAQPage` block of the page's JSON-LD.
  Change both together, and mirror the change in `llms.txt`.
- The organisation number (912 977 099) appears in every footer, in `llms.txt` and in the homepage JSON-LD.
- The Hippie de Luxe brand count (34) is written out on `hippie-de-luxe.html`, `forhandler.html`, `retail.html`,
  `index.html`, `no.html` and in `llms.txt`. When the list changes, update the names on `hippie-de-luxe.html`
  (visible list and JSON-LD) and `llms.txt`, then search for the old number.
