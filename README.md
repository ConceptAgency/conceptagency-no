# conceptagency.no

Source for the Concept Agency AS website — a static site, no build step.

## Structure

| Path | Purpose |
|---|---|
| `index.html` | Homepage |
| `retail.html` | For Retail — served at `/retail` |
| `opticians.html` | For Opticians — served at `/opticians` |
| `privacy.html` | Privacy — served at `/privacy` |
| `milena-kling/` | Milena Kling brand page — served at `/milena-kling` |
| `images/` | Shared site imagery |
| `_redirects` | Netlify redirects and pretty URLs |
| `llms.txt` | Machine-readable site summary |

## Deploying

The site is hosted on Netlify (project `conceptagency`, primary domain conceptagency.no).
There is no build command and no framework — the repository root *is* the publish directory.

## Notes

- Contact forms POST to a Zapier catch hook. The endpoint is visible in client-side
  JavaScript, so treat it as public and expect occasional junk submissions.
- The Milena Kling viewing form uses Netlify Forms instead (`data-netlify="true"`).
