# BOW ASA DataFest 2026 Website

A modern, responsive website for the BOW ASA DataFest 2026 event, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero section, call-to-action buttons, key information snapshot, and partners/sponsors
- **Register Page**: Participant and Mentor/Judge/Sponsor registration sections
- **Schedule Page**: Overview, detailed schedule, and logistics information
- **Data Page**: Topic overview, dataset access information, and rules & submission guidelines
- **Resources Page**: Guides and analysis support
- **People Page**: Mentors & judges, and organizing team
- **FAQ Page**: Comprehensive FAQ with collapsible sections

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
datafest/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── register/          # Register page
│   ├── schedule/          # Schedule page
│   ├── data/              # Data page
│   ├── resources/         # Resources page
│   ├── people/            # People page
│   └── faq/               # FAQ page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── home/              # Home page components
│   ├── register/          # Register page components
│   ├── schedule/          # Schedule page components
│   ├── data/              # Data page components
│   ├── resources/         # Resources page components
│   ├── people/            # People page components
│   └── faq/               # FAQ page components
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

### Option 1: Deploy with Vercel CLI

1. Install the Vercel CLI (if you haven't already):
   ```bash
   npm i -g vercel
   ```

2. From the project root, run:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Link to existing project? **N** (for first deploy)
   - Project name: **bow-datafest-2026** (or your choice)
   - Directory: **./** (press Enter)
   - Override settings? **N**

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub + Vercel Dashboard

1. Push your code to GitHub (e.g. `hanxngn05/datafest`).

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.

3. Click **Add New** → **Project** and import your repository.

4. Configure the project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. Click **Deploy**. Vercel will build and deploy your site. Future pushes to the main branch will trigger automatic deployments.

### Environment Variables

If your project uses environment variables (e.g. API keys), add them in **Project Settings** → **Environment Variables** in the Vercel dashboard.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## Customization

- Update colors in `tailwind.config.js`
- Modify content in component files
- Add images to `public/` directory
- Update metadata in `app/layout.tsx`

## License

This project is for BOW ASA DataFest 2026.
