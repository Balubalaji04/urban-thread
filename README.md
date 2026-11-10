# Urban Thread — React + Vite storefront demo

## Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

## Install and run
```bash
cd urban-thread
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Responsive checks
Test in browser DevTools at 375px, 768px, and 1280px. The layout uses mobile-first breakpoints and switches the Three.js hero canvas to a static product image on small screens.

## Notes
- Product data, labels, navigation, and footer links are in `src/data/content.js`.
- Cart, filters, quick view, and the three-step demo checkout are client-side only.
- Checkout deliberately does not process payment or store customer data.
- Product/editorial photos are remote Unsplash images; replace them with licensed brand assets before production.
- The 3D hero is a lightweight procedural geometry object, not a real fabric scan/texture.
