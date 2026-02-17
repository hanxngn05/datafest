# BOW ASA DataFest 2026 Website

A modern, responsive website for the BOW ASA DataFest 2026 event, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero section, call-to-action buttons, key information snapshot, and partners/sponsors
- **Register Page**: Participant and Mentor/Judge/Sponsor registration sections
- **Schedule Page**: Overview, detailed schedule, and logistics information
- **Data Page**: Topic overview, dataset access information, and rules & submission guidelines
- **Resources Page**: Workshops, guides, and analysis support
- **People Page**: Guests/speakers, mentors & judges, and organizing team
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
