# Prasun P Portfolio

Personal portfolio built with Next.js, Tailwind CSS, Framer Motion, and a warm orange/beige theme.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For local contact-form testing, copy `.env.example` to `.env.local` and add your Web3Forms access key:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

The key is intentionally kept in `.env.local`, which is ignored by Git.

## Checks

```bash
npm run lint
npm run build
```

## GitHub Pages deployment

Deployment is handled by [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml) whenever changes are pushed to `master`.

Before deploying, add this repository secret in GitHub under **Settings → Secrets and variables → Actions**:

```text
Name: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
Value: your Web3Forms access key
```

The workflow injects the secret during the static build so the Contact form can submit through [Web3Forms](https://docs.web3forms.com/). The `NEXT_PUBLIC_` value is bundled into the browser build as required by this client-side form integration; it must not be treated as a private server secret.
