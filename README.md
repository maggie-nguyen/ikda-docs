# ikda-docs

Public-facing legal and support pages for Ikda — Korean Reading App.

## Files

| File | Purpose | Required by |
|------|---------|-------------|
| `privacy-policy.md` | Privacy Policy | App Store, Google Play (mandatory) |
| `terms-of-service.md` | Terms of Service / EULA | Both stores (strongly recommended) |
| `support.md` | Support + FAQ | App Store (Support URL required) |

## Hosting

Host these as public URLs before app submission. Options:
- **GitHub Pages** — push this repo, enable Pages → `https://yourusername.github.io/ikda-docs/`
- **Notion** — paste content into public pages
- **ikda.app/privacy**, **/terms**, **/support** — preferred (looks professional)

Once hosted, enter URLs in:
- **App Store Connect** → App Information → Privacy Policy URL, Support URL
- **Google Play Console** → Store listing → Privacy Policy URL
- **RevenueCat** dashboard → EULA / Privacy Policy fields

## To update policies

Edit the markdown files and redeploy. No app update required. Both stores read the live URL.
