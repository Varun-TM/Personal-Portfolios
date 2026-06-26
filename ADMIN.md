# Admin Panel (No-Database CMS)

WordPress-style content editing for the portfolio — edit any section from a GUI
at `/admin`, with **no database**. Content is stored as flat JSON in a Docker
volume and changes go live instantly.

---

## How it works

```
content/seed.json        Default content baked into the image (version controlled)
/app/data/content.json   Live content  → Docker volume "portfolio_data"  (persists edits)
/app/public/uploads/     Uploaded images → Docker volume "portfolio_uploads"
```

- The public site (`/`) reads from `content.json` on every request.
- The admin GUI writes back to `content.json` and triggers a revalidate, so the
  live site updates immediately — no rebuild, no redeploy.
- On first boot, if `content.json` doesn't exist yet, it's seeded from
  `content/seed.json` automatically.

> ⚠️ This flat-file model requires a **writable filesystem** (Docker on a
> VPS/server). It does **not** work on Vercel/serverless, where the runtime FS
> is read-only.

---

## Setup

### 1. Set credentials

Create a `.env` file next to `docker-compose.yml`:

```env
ADMIN_PASSWORD=your-strong-password
AUTH_SECRET=$(openssl rand -base64 32)   # any random string, min 16 chars
```

(Generate a secret: `openssl rand -base64 32`)

### 2. Start

Development / single-host:
```bash
docker compose up -d --build
```

Production:
```bash
docker compose -f docker-compose.prod.yml up -d --build
```

### 3. Log in

Visit `http://your-domain/admin` → enter `ADMIN_PASSWORD`.

---

## Using the editor

1. **Dashboard** (`/admin`) lists every section: Hero, About, Experience,
   Projects, Skills, Achievements, Education, Contact.
2. Click a section to open its form. The form is generated from the content
   structure, so you get:
   - Text inputs / textareas for copy
   - **+ Add item / ✕ Remove** for lists (experiences, projects, skills, tags…)
   - Nested groups for structured data (metrics, achievements…)
   - **Upload** buttons for any image field (writes to `/uploads/…`)
   - Dropdowns for named icons (About values, Skills, Achievements)
3. Click **Save changes**. The live site reflects edits on next load.

### Icons

- **Experience** entries use emoji icons (type any emoji).
- **About / Skills / Achievements** use named icons from a fixed set
  (`Cloud`, `Shield`, `Database`, `Code`, `GitBranch`, `BarChart3`,
  `TrendingUp`, `Users`, `Package`, `Award`, `Cpu`, `Rocket`, `Zap`, …).
  Pick from the dropdown. To add more, edit `lib/icons.tsx`.

---

## Backup & restore

All content is a single file inside the `portfolio_data` volume.

```bash
# Backup
docker compose exec portfolio cat /app/data/content.json > backup.json

# Restore
docker compose cp backup.json portfolio:/app/data/content.json
docker compose restart portfolio
```

Uploaded images live in the `portfolio_uploads` volume.

---

## Security notes

- `/admin` and content-write APIs are gated by signed-cookie auth
  (middleware-enforced). Public read APIs and the site itself stay open.
- The admin pages are marked `noindex`.
- This is single-author auth. For multiple editors, swap `lib/auth.ts` for
  NextAuth.
- Always run behind HTTPS in production (the session cookie is `Secure` in prod).

---

## Architecture map

| File | Role |
|------|------|
| `content/seed.json` | Default content |
| `lib/content.ts` | Read/write/seed the JSON store (server-only) |
| `lib/auth.ts` | Password check + signed session (jose) |
| `lib/icons.tsx` | Name → lucide icon registry |
| `middleware.ts` | Gates `/admin` + write APIs |
| `app/api/auth/*` | Login / logout |
| `app/api/content/[section]` | GET (public) / PUT (auth) a section |
| `app/api/upload` | Image upload to the uploads volume |
| `app/admin/*` | Login, dashboard, recursive GUI editor |
| `app/page.tsx` + components | Read content, render the live site |
