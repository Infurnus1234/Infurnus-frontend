# MASTER PROMPT — "Infurnus" Mobility & Logistics Site
### (Interactive, WebGL, GSAP Scroll-Driven Single Page Rebuild)

**Role:** You are an expert creative front-end developer specializing in scroll-driven, WebGL-enhanced marketing sites. Build a single-page website for **INFURNUS**, a mobility & logistics platform (rides, SUV rentals, freight/logistics), matching the spec below exactly.

---

## Tech Stack
- **HTML/CSS/JS** (or React if preferred), single-page, no backend needed — static/interactive only
- **GSAP** + **ScrollTrigger** (+ ScrollSmoother if available) for all scroll animations, pinning, and the horizontal-scroll section
- **Three.js / WebGL** canvas as a fixed full-viewport background layer: a subtle animated particle field / gradient mesh / shader noise that reacts to scroll progress and mouse position, sitting behind all content (z-index below UI, pointer-events: none)
- **Light/Dark theme toggle** (pill switch with sun/moon icons) that swaps CSS custom properties instantly with a smooth transition, and updates the WebGL background palette too
- Custom cursor: a small circular ring/dot that follows the mouse with lerped/eased movement (visible in top-right area of viewport in the reference), scales up on hover over buttons/links

---

## Fonts
Use a bold condensed/grotesque **display font** for headlines and a clean **grotesque sans** for body text — pull both from Google Fonts or Fontshare (variable fonts preferred):
- **Display** (headlines, numbers, nav logo): "Clash Display" or "General Sans" (Fontshare, weight 600–700) — fallback: `"Archivo Black", "Inter Tight", sans-serif`
- **Body/UI text**: "General Sans" or "Inter" (weight 400–500) — fallback: `system-ui, sans-serif`
- Use `font-display: swap` and preload critical weights.

---

## Design System

### Dark theme (default)
- Background: `#0a0a0a` / near-black
- Surface cards: `#ffffff` (white cards float on black sections — strong contrast)
- Primary text: `#ffffff`, secondary/muted text: `rgba(255,255,255,0.5)`
- Accent: bright green (from logo mark), e.g. `#22c55e` / lime-green, used sparingly for the logo "N" and small highlights
- CTAs: solid black pill buttons with white text (on white cards) / solid white pill buttons with black text (on dark bg)

### Light theme
- Background: `#ffffff` / off-white
- Cards: `#0a0a0a` or light gray, inverted appropriately
- Text inverts accordingly; keep the same green accent

### Shared
- Rounded corners: large radius (16–24px) on cards, full pill radius on buttons/toggle
- Generous whitespace, big bold typography, headline "ghost text" technique: in section headings, the emphasis word(s) render in a lighter/translucent or outlined version of the same font (e.g. "Everything You Need to **Move & Transport**" — "Move & Transport" rendered as low-opacity outline text)
- Subtle grid/dot background texture visible faintly through WebGL layer

---

## Global Components

### Navbar (fixed/sticky, transparent → solid on scroll)
- Left: logo — black rounded-square icon with green "N" mark + wordmark "INFURNUS" (bold) with small tracked subtext "MOBILITY & LOGISTICS"
- Center/right nav links: `Home / Services / For Business / About / Support`
- Right cluster: theme toggle pill (sun/moon), "Login" (white pill button), "Become a Provider →" (bold text link with arrow)
- Custom cursor dot follows scroll on the right edge as a scroll-progress indicator (small circle that fills/moves as user scrolls)

### Footer
- Logo + tagline: "Your next-generation mobility and freight platform for city rides, 4x4 SUV rentals, heavy logistics deliveries, and enterprise fleet management."
- 4 social icon circles
- 3 link columns:
  - **SERVICES**: Ride Booking, Car & SUV Rentals, Logistics & Freight, Business Solutions
  - **COMPANY**: About Us, Careers, Contact, Support
  - **PARTNER WITH US**: Become a Driver, Vehicle Owner, Business Partner, Partner Login
- App download banner: rounded card with logo, "Book rides and track parcel shipments anywhere on mobile." + App Store / Google Play buttons
- Bottom bar: "© 2026 Infurnus Technologies. All rights reserved." + Privacy Policy / Terms & Conditions

---

## Sections (in order)

### 1. Hero — "Your City. Your Way."
- Huge bold display headline, two lines, second line slightly ghosted/lighter
- Subtext: "Rides, Luxury SUV Rentals & Commercial Logistics — powered by next-generation telematics. Move smarter, faster and further with Infurnus."
- Full-bleed background: night cityscape photo with a car (right side), dark gradient overlay blending to black on the left where text sits
- Booking widget card (bottom-left, floating): tab switcher **Ride / Rentals / Logistics** (icons), "Enter pickup location" input with pin icon, a time/schedule input, black pill **"Find a Ride Now →"** button
- GSAP: headline lines fade/slide up on load; background image has subtle parallax on scroll; widget card animates in

### 2. Trust bar
4 horizontal cards (icon + text):
- "Verified drivers & vehicles"
- "On-time arrival, guaranteed"
- "UPI, Cards, Cash & Wallet"
- "Always here whenever you move"

### 3. "Explore Infurnus Mobility" — pinned horizontal-scroll section
- Sticky/pinned via ScrollTrigger; vertical scroll drives horizontal translation of 3 large cards
- UI chrome: "SCROLL PROGRESS" label + progress bar, "HORIZONTAL MATRIX" label
- Cards numbered:
  - **01 City Ride & Cabs** — icon, description, stat row (ETA Average / Fleet Coverage / Safety Rating), logo + CTA "Book City Ride"
  - **02 Luxury & Off-Road** — icon, description, stat row (Duration / Insured / Deposit), logo + CTA "Explore Fleet"
  - **03 Logistics & Freight** — icon, description, stat row (Load Capacity / Live Telematics / On-Demand), logo + CTA "Book Logistics"

### 4. "Everything You Need to Move & Transport"
3 white cards:
- **Book a Ride** — tags: Bike Taxi, Sedan Cab, City Shuttle, Intercity Express — CTA "Book a Ride"
- **Explore Premium** — tags: Fortuner 4x4, Thar Convertible, Luxury SUV, Flexible Hourly — CTA "Explore Premium"
- **Book Logistics** — tags: Mini Truck, Pickup 8ft, Tata Ace, Heavy Cargo Truck — CTA "Book Logistics"

### 5. "Get Started in 4 Simple Steps"
4 numbered cards in a row connected by a thin line/timeline:
1. Sign up instantly with phone number and unlock all mobility services
2. Enter your coordinates for automated GPS routing and driver matching
3. Choose ride cabs, rentals, heavy logistics or emergency service vehicles
4. Pay seamlessly via UPI, cards or cash and monitor trip telemetry in real-time

### 6. "Tailored Portals for Every User & Role"
5 cards, each icon + description + checklist (checkmark items):
- **Customer** — Ride Booking, SUV Rentals, Logistics Fleet
- **Driver** — Instant Rides, Daily Earnings, GPS Telematics
- **Fleet Owner** — Fleet Control, Driver Roster, Revenue Insights
- **Business/Vendor** — Bulk Freight, Corporate Billing, Multi-Branch
- **Admin** — Realtime Matrix, Ops Security, Audit Logs

### 7. "Real-Time Tracking For Total Peace of Mind"
- **Left**: a Live Telematics map mockup card — header "LIVE TELEMATICS / Trip #INF-9482" + toggle, faint grid map background, pickup pin ("HSR Layout Sector 1") and destination pin ("Koramangala 8th Block") connected by a route line with a car icon animating along it, a floating rating badge; below it a driver card with avatar, star rating, plate number, call/message icon buttons
- **Right**: headline (ghost text on "For Total Peace of Mind"), description paragraph, 2 feature rows ("Sub-meter GPS accuracy for active vehicles and freight containers", "Dynamic route calculation taking urban congestion into account"), an SOS card ("Share live status with trusted contacts with emergency SOS triggers"), "Explore Live Telematics →" link
- GSAP: animate the car icon along the SVG path in sync with scroll position

### 8. "Trusted by Riders, Drivers & Vendors"
3 testimonial cards, quote + avatar-letter circle + name/role:
- Infurnus Customer
- Driver Partner
- Logistics Enterprise Partner

---

## Interaction / Animation Requirements
- All sections reveal via ScrollTrigger (fade + translateY, staggered per card)
- Horizontal card section must **pin** the viewport and scrub cards left-to-right tied to scroll
- WebGL background subtly shifts hue/intensity per section and reacts to scroll velocity
- Theme toggle animates a smooth cross-fade of CSS variables (~400ms) with no flash
- Respect `prefers-reduced-motion`: disable pinning/parallax, keep simple fades
- Fully responsive: horizontal-scroll section degrades to a normal vertical stack on mobile; custom cursor disabled on touch devices

---

## Deliverable
Produce a single self-contained `index.html` (with linked/inline CSS + JS, GSAP + Three.js via CDN) that runs standalone, is performant (lazy-load below-fold images, debounce resize), and is accessible (proper contrast in both themes, keyboard-navigable nav/toggle, alt text).
