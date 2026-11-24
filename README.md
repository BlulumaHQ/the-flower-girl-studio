# The Flower Girl Studio

Build a single HOMEPAGE ONLY (no other pages, no backend, no auth) for "The Flower Girl" — a boutique marketing, consulting & design studio in Vancouver, BC run by Lina. Style: "Editorial Refined" — luxury, feminine, magazine-like, airy, thin hairlines, italic serif accents. Must be fully responsive (perfect on phones). Static contact form (no submit logic yet). No Lovable badge text in the design.

FONTS (Google): Cormorant Garamond (300/400/500 + italic 300/400) for headings/accents; Jost (300/400/500) body, base weight 300; Questrial for the logo only.
COLORS: page bg #FBF8F3; alt section bg #F4EEE6; text #4A2C22; muted text #6A5A50 / #7A6A60; hairlines #E6DCD0; accent (mauve) #8D6492 used for italic accent words, eyebrow labels and numbers; soft lavender #C9AECF / #B892BF for ornaments; dark brown sections #3D2219 with text #F6EFE6, muted #D9CCC0, accent #D8BFDC.
IMAGES: CSS class .wk { filter: saturate(.85) contrast(.97) } on portfolio/mockup images; .ph { filter: saturate(.68) contrast(.94) brightness(1.03) } on photos. Use the exact image URLs below (hotlink for now; they will be replaced with local files later).

COMPONENTS
1) <Logo color flowerColor className> — inline SVG viewBox="0 0 1230 520": text "the" x=170 y=85 font-size 118 textLength 155; "flower" x=10 y=298 font-size 300 textLength 865; "girl" x=555 y=473 font-size 210 textLength 265 (all font-family Questrial, lengthAdjust="spacingAndGlyphs", fill=color #5A2414). Plus a starburst flower centered at (1043,328): 32 lines, angle i*360/32, from radius 40 to radius 168 (even i) or 151 (odd i), stroke flowerColor #C7A3CC, stroke-width 15, round caps. Header logo height: clamp(56px, 6.4vw, 92px). Footer: light version (text #F6EFE6) height 64px.
2) <Star size=22 color> — same starburst idea in viewBox 0 0 100 100: 24 lines from r=9 to r=48 (odd lines 90% length), stroke-width 3.2, round caps, color #B892BF (on dark: #C7A3CC). Used as small ornament before eyebrow labels.
3) <BrowserFrame src alt> — white card, 1px #E6DCD0 border, radius 12px, overflow hidden, shadow 0 40px 70px -40px rgba(74,44,34,.45); a 30px top bar (#F4EEE6, bottom hairline) with three 8px dots #DCC9BE and a pill 220×14 #FBF8F3; then the image, aspect-ratio 783/540, object-fit cover, object-position top.

SECTIONS (container max-width 1280px, side padding clamp(20px,5vw,64px))
A) HEADER: Logo left; nav center with numbered links (number in italic Cormorant mauve): 01 Studio(#studio) 02 Work(#work) 03 Services(#services) 04 Digital(#digital) 05 Contact(#contact), 13px, letter-spacing .1em; right a pill outline button "BOOK A CONSULT" (11px, tracking .24em, 1px border #4A2C22, radius 999px). On mobile collapse nav into a hamburger sheet. Hairline under header.
B) HERO (2 columns, wrap on mobile): Left: eyebrow with Star + "BOUTIQUE STUDIO · VANCOUVER" (11px, tracking .34em, #7A6A60); H1 Cormorant 300, clamp(54px,7.2vw,108px), line-height .96: "Brands that bloom, " + italic mauve "beautifully."; paragraph 18px/1.75 #6A5A50 max-width 450px: "Strategy, design and now digital — logos, social media, websites, SEO and AI automation, crafted with care by one boutique studio that knows your story."; buttons: filled dark pill "FREE CONSULTATION" (#4A2C22 bg, #FBF8F3 text) + italic Cormorant 20px underlined link "Explore services". Right: relative box max-width 620px, padding 0 0 90px 70px: BrowserFrame with https://uzdjwpkgldzhnoxjeyrw.supabase.co/storage/v1/object/public/content-images/b237218e-d944-4af0-87b2-09379102e53e/portfolio/tsai-orthodontics/live-cloudflare_worker-full.jpg ; overlapping bottom-left an ARCH image (width 38%, aspect 3/4, border-radius 300px 300px 0 0, 8px #FBF8F3 border, soft shadow) with https://bluluma.com/images/branding/accuqi-wellness-business-card-design.webp (object-position 66% 30%); bottom-right a Star + italic Cormorant 16px "Brand identity & website design".
C) TRUSTED BY strip (hairlines top/bottom): label "TRUSTED BY" (10px, tracking .34em, mauve) then names in Cormorant 21px #6A5A50 separated by 4px lavender dots: Small Business BC, Almira Bardai, The Comeback Corner, ER Auto Works, The Face Studio, Huds and Lolo, Idea Camp Communications, Pender Auto Body.
D) STUDIO (#studio, bg #F4EEE6, centered, max-width 1080): Star; eyebrow "01 · THE STUDIO"; H2 Cormorant 300 clamp(32px,3.8vw,50px) "A boutique marketing, consulting and design studio — built on " + italic mauve "personal service" + " and reaching the right audience."; paragraph "Traditional and modern marketing, go-to-market strategy and storytelling. You work directly with Lina, from the first logo sketch to the campaign, the event and now the website that brings it all together."; signature italic Cormorant 30px "— Lina".
E) SELECTED WORK (#work): eyebrow "02 · SELECTED WORK"; H2 clamp(42px,5vw,70px) "Brands we've " + italic mauve "brought to life."; right link italic "Start your project →". Flex-wrap grid (gap 40px 28px) of figures; each: image (bg #F1EBE3, object-fit cover) then caption row with hairline top: title Cormorant 25px left, tag 10px uppercase tracking .26em right. Items (flex-basis / image height / object-position):
 1. AccuQi Wellness — BRAND IDENTITY — https://bluluma.com/images/branding/accuqi-wellness-brand-mood-board.webp (1 1 320px / 520px / 50% 30%)
 2. NightClerk — BRAND IDENTITY — https://bluluma.com/images/branding/accuqi-wellness-logo-variations.webp (1 1 320px / 520px / 50% 30%)
 3. AccuQi Logo — LOGO DESIGN — https://bluluma.com/images/branding/accuqi-wellness-logo-design.webp (1 1 320px / 520px / 22% 50%)
 4. Reception Signage — SIGNAGE — https://bluluma.com/images/branding/accuqi-wellness-storefront-signage-window-graphics.webp (2 1 560px / 440px)
 5. Tote & Mug — COLLATERAL — https://bluluma.com/images/branding/accuqi-wellness-branded-merchandise.webp (1 1 320px / 440px)
 6. Yingting Smart — WEBSITE — https://uzdjwpkgldzhnoxjeyrw.supabase.co/storage/v1/object/public/content-images/b237218e-d944-4af0-87b2-09379102e53e/portfolio/yingting-smart/a-cloudflare_worker-full.jpg (2 1 560px / 420px / 50% 0%)
 7. Spa Linens — BRANDING — https://bluluma.com/images/branding/accuqi-wellness-staff-apparel.webp (1 1 320px / 420px)
F) SERVICES (#services): eyebrow "03 · SERVICES"; H2 "Everything your brand " + italic mauve "needs."; right italic Cormorant 21px "From identity to growth — eight services, one point of contact." Grid auto-fit minmax(270px,1fr) gap 20px of cards (1px #E6DCD0 border, padding 34px 30px, min-height 250px, white bg; NEW cards bg #F6F0F4): italic mauve number 22px, optional pill "NEW" (10px, #6E4A73 text, 1px #C9AECF border), title Cormorant 400 29px, 28px lavender rule, desc 14px. Cards: 01 Growth Strategy — Holistic marketing plans, goal setting, benchmarking and go-to-market strategy. 02 Brand & Logo Design — Logos, style guides and brand messaging that feel unmistakably you. 03 Social Media & Content — Social management, email marketing, blogs, brochures and collateral. 04 Creative Direction & Media — Graphic design, photography, media buying, radio and TV ads. 05 Corporate & Private Events — Brand launches, galas, golf tournaments and weddings — planned end to end. 06 Website Design (NEW) — Beautiful, fast, mobile-first websites built around your brand. 07 SEO & AI Search (NEW) — Rank on Google and show up when clients ask ChatGPT for a recommendation. 08 AI Automation (NEW) — Automatic lead replies, bookings, reviews and posting — less admin, more clients.
G) DIGITAL (#digital, bg #F4EEE6, 2 columns): left framed image (18px padding inside a 1px #D9C6D8 outline, image height clamp(420px,42vw,620px)) https://bluluma.com/images/branding/accuqi-wellness-brand-guidelines-cover.webp with a cream tag bottom-left italic "fig. 02 — AccuQi Wellness, website". Right: eyebrow "04 · NEW — THE DIGITAL STUDIO"; H2 clamp(40px,4.6vw,64px) "Your brand, now " + italic mauve "online" + " — and working while you sleep."; list with hairlines, roman numerals italic mauve 26px: i. Website Design — Elegant, mobile-first websites that match the brand we built together. ii. SEO & AI Search — Be found on Google — and in the answers from ChatGPT, Gemini and Perplexity. iii. AI Automation — Lead replies, bookings, reviews and social posting that run on their own. Link italic "Ask about a free website audit →".
H) HOW WE WORK: Star + eyebrow "HOW WE WORK"; 4 columns (auto-fit minmax 220px) each with hairline top, big italic Cormorant 58px number in #C9AECF, title Cormorant 26px, text 14px: 01 Discover — A one-on-one consult on your goals, audience and story. 02 Design — Brand, content and website — one consistent look. 03 Launch — Campaigns, events and sites go live, done properly. 04 Grow — SEO, automation and reporting keep results coming.
I) CONTACT (#contact, bg #3D2219): left: Star(light) + eyebrow "05 · CONTACT" (#D8C3D6); H2 clamp(46px,5.8vw,84px) "Let's grow something " + italic #D8BFDC "together."; text "Book a free consultation. Tell us where your brand is today and where you'd like it to go."; Cormorant 22px "lina@theflowergirl.ca" + italic "Vancouver, British Columbia". Right: 2-col form with underline-only inputs (border-bottom #7E655A, transparent bg, labels 11px uppercase tracking .24em): Name, Company, Email, Phone, "How can we help?" textarea (full width), cream pill button "REQUEST CONSULTATION".
J) FOOTER (#3D2219, top hairline #5A3C31): light Logo left, "© 2026 The Flower Girl · Vancouver, BC" right (12px #BFAEA3).

Generous section padding (~112–120px desktop, smaller on mobile). Smooth-scroll anchor links. SEO: title "The Flower Girl — Boutique Marketing, Branding & Web Design Studio in Vancouver", matching meta description.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/892b72e0-842c-4a3e-a99d-5baf2bb9cca9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
