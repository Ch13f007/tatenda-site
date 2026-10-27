# tatenda-site

Personal site and resume of Tatenda Chitanda: AI governance, cybersecurity and compliance systems.

Plain HTML, CSS and JavaScript. No framework, no build step, no third party requests.

## Edit content
Everything on the page comes from [`public/data.js`](public/data.js): projects, case studies, publications, books, experience and certifications. Edit that file and push. Netlify redeploys automatically.

To add screenshots to a project, put the images in `public/img/` and list them in that project's `shots` array:
```js
shots: [{ src: "img/sentinel-audit.png", alt: "Scored audit with findings" }],
```

## Run locally
```bash
python -m http.server 8000 --directory public
```

## Security
The site is a small portfolio piece in its own right:
- Strict Content Security Policy and hardening headers in [`public/_headers`](public/_headers)
- `/.well-known/security.txt` for vulnerability reports. **Renew the `Expires` date before 27 Oct 2027.**
- Fonts self hosted (IBM Plex, SIL Open Font License), so visitors are not tracked by third parties
- Public CV copies have the phone number removed and the document metadata cleaned
