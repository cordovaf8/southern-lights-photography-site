# Southern Lights Photography Co. Static Website

This is a static HTML/CSS/JS website for Southern Lights Photography Co., focused on sports photography.

## Pages

- `index.html` — Home
- `portfolio.html` — Stock image portfolio placeholders
- `pricing.html` — Digital package pricing
- `appointments.html` — Square Appointments embed placeholder
- `contact.html` — Contact page
- `styles.css` — Site styling
- `script.js` — Mobile navigation and dynamic year

## How to add Square Appointments

1. Sign in to Square Dashboard.
2. Go to Appointments or Payments > Appointments.
3. Go to Online Booking > Channels.
4. Under "Add your booking flow to an existing site," choose Get Started.
5. Choose Get embed code.
6. Copy Square's HTML code.
7. Open `appointments.html`.
8. Replace the `<div class="square-placeholder">...</div>` block with your Square embed code.

You can also use a simple button by replacing the sample Square URL in the commented button section.

## GitHub Pages setup

1. Create a GitHub repo.
2. Upload all files in this folder to the repo root.
3. Go to Settings > Pages.
4. Choose Deploy from branch.
5. Select `main` and `/root`.
6. Save.

## Custom domain

After GitHub Pages is live, add your custom domain in Settings > Pages, then update your domain DNS records with your domain provider.
