# Shahil KV — 3D Portfolio

A 3D room with a working Windows-95-style computer. The desktop on the CRT
(`ShahilOS`) lives in [`inner-site/`](inner-site) and is built into `static/os/`,
then loaded by the monitor's iframe at `/os/`.

Built on [henryjeff/portfolio-website](https://github.com/henryjeff/portfolio-website)
and its companion OS site by Henry Heffernan (see `LICENSE.md` and the in-app Credits).

## Editing content

All showcase copy — experience, projects, videos, stack and contact links — is in
[`inner-site/src/components/showcase/data.ts`](inner-site/src/components/showcase/data.ts).

## Development

```bash
npm i
npm run build:os   # build the OS into static/os
npm run dev        # 3D site

# Live-edit the OS on its own at http://localhost:3000/os/
npm run dev:os     # then open the 3D site with ?dev to point the monitor at it
```

## Production

```bash
npm run build      # builds the OS, then the 3D site, into public/
npm start          # serve public/ with express
```
