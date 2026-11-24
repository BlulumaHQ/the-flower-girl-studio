import { Link } from "@tanstack/react-router";
import { useState, type CSSProperties, type ReactNode } from "react";

export const SITE_URL = "https://theflowergirl.ca";

export function pageHead(title: string, desc: string, path: string) {
  const url = SITE_URL + path;
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function Logo({ color = "var(--ink)", flowerColor = "var(--lav)", style }: { color?: string; flowerColor?: string; style?: CSSProperties }) {
  const lines = Array.from({ length: 32 }, (_, i) => {
    const a = ((i * 360) / 32) * (Math.PI / 180);
    const r2 = i % 2 === 0 ? 168 : 151;
    return <line key={i} x1={1043 + 40 * Math.cos(a)} y1={328 + 40 * Math.sin(a)} x2={1043 + r2 * Math.cos(a)} y2={328 + r2 * Math.sin(a)} />;
  });
  const t = { fontFamily: "Questrial", lengthAdjust: "spacingAndGlyphs" as const, fill: color };
  return (
    <svg viewBox="0 -24 1230 548" style={style} role="img" aria-label="The Flower Girl">
      <text x={170} y={85} fontSize={118} textLength={155} {...t}>the</text>
      <text x={10} y={298} fontSize={300} textLength={865} {...t}>flower</text>
      <text x={555} y={473} fontSize={210} textLength={265} {...t}>girl</text>
      <g stroke={flowerColor} strokeWidth={15} strokeLinecap="round">{lines}</g>
    </svg>
  );
}

export function Star({ size = 22, color = "var(--lav2)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden className="shrink-0">
      <g stroke={color} strokeWidth={3.2} strokeLinecap="round">
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          const r = i % 2 ? 9 + 39 * 0.9 : 48;
          return <line key={i} x1={50 + 9 * Math.cos(a)} y1={50 + 9 * Math.sin(a)} x2={50 + r * Math.cos(a)} y2={50 + r * Math.sin(a)} />;
        })}
      </g>
    </svg>
  );
}

export function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="browser">
      <div className="browser-bar"><span className="dot" /><span className="dot" /><span className="dot" /><span className="bpill" /></div>
      <img src={src} alt={alt} className="wk block w-full object-cover object-top" style={{ aspectRatio: "783/540" }} />
    </div>
  );
}

/** Full-length website screenshot that scrolls on hover (touch: scroll inside the frame). */
export function ScrollShot({ src, alt, height = 520 }: { src: string; alt: string; height?: number }) {
  return (
    <div className="browser">
      <div className="browser-bar"><span className="dot" /><span className="dot" /><span className="dot" /><span className="bpill" /></div>
      <div className="scrollshot" style={{ height: `min(${height}px, 110vw)` }}>
        <img src={src} alt={alt} loading="lazy" className="wk" />
      </div>
    </div>
  );
}

export const nav = [
  ["01", "Studio", "/studio"],
  ["02", "Work", "/portfolio"],
  ["03", "Services", "/services"],
  ["04", "Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur">
      <div className="wrap flex items-center justify-between gap-6 pt-6 pb-4">
        <Link to="/" aria-label="The Flower Girl home"><Logo style={{ height: "clamp(56px,6.4vw,92px)", width: "auto" }} /></Link>
        <nav className="hidden lg:flex gap-8 text-[13px] tracking-[.1em]">
          {nav.map(([n, l, h]) => (
            <Link key={h} to={h} className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>
              <span className="it text-[15px] mr-1.5">{n}</span>{l}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="pill pill-o hidden lg:inline-flex">Book a consult</Link>
        <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className="block w-7 h-px bg-foreground mb-2" /><span className="block w-7 h-px bg-foreground mb-2" /><span className="block w-5 h-px bg-foreground ml-auto" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-background">
          <nav className="wrap flex flex-col py-6 gap-5">
            {nav.map(([n, l, h]) => (
              <Link key={h} to={h} onClick={() => setOpen(false)} className="serif text-3xl"><span className="it text-lg mr-3">{n}</span>{l}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="pill pill-o self-start mt-2">Book a consult</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="dark border-t" style={{ borderColor: "oklch(0.36 0.04 40)" }}>
      <div className="wrap py-10 flex flex-wrap items-center justify-between gap-6">
        <Link to="/" aria-label="The Flower Girl home"><Logo color="var(--dark-foreground)" flowerColor="var(--lav)" style={{ height: 64, width: "auto" }} /></Link>
        <nav className="flex flex-wrap gap-6 text-[12px] tracking-[.1em] dmuted">
          {nav.map(([, l, h]) => <Link key={h} to={h} className="hover:underline">{l}</Link>)}
        </nav>
        <p className="text-[12px]" style={{ color: "oklch(0.77 0.02 50)" }}>© 2026 The Flower Girl · Vancouver, BC</p>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageIntro({ eyebrow, title, accent, text }: { eyebrow: string; title: string; accent: string; text?: string }) {
  return (
    <section className="pt-12 md:pt-16">
      <div className="wrap">
        <p className="eyebrow"><Star />{eyebrow}</p>
        <h1 className="h1 mt-6 max-w-[1000px]" style={{ fontSize: "clamp(44px,5.6vw,84px)" }}>{title} <span className="it">{accent}</span></h1>
        {text && <p className="mt-6 text-[18px] leading-[1.75] text-muted-foreground max-w-[620px]">{text}</p>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="sec dark">
      <div className="wrap flex flex-wrap items-end justify-between gap-10">
        <div className="max-w-[720px]">
          <p className="eyebrow" style={{ color: "var(--dark-accent)" }}><Star color="var(--lav)" />Free consultation</p>
          <h2 className="h2 mt-6" style={{ fontSize: "clamp(44px,5.6vw,80px)" }}>Let's grow something <span className="dacc">together.</span></h2>
          <p className="dmuted mt-6 text-[17px] leading-[1.8]">Tell us where your brand is today and where you'd like it to go.</p>
        </div>
        <Link to="/contact" className="pill pill-c">Book a consultation</Link>
      </div>
    </section>
  );
}

export const clients = ["Small Business BC", "Almira Bardai", "The Comeback Corner", "ER Auto Works", "The Face Studio", "Huds and Lolo", "Idea Camp Communications", "Pender Auto Body"];

export const services: { t: string; d: string; isNew: boolean; items: string[] }[] = [
  { t: "Growth Strategy", d: "Holistic marketing plans, goal setting, benchmarking and go-to-market strategy.", isNew: false, items: ["Holistic marketing plans", "Brand management", "Goal setting & benchmarking", "One-on-one consultations", "Go-to-market strategy"] },
  { t: "Brand & Logo Design", d: "Logos, style guides and brand messaging that feel unmistakably you.", isNew: false, items: ["Logo creation", "Style guides", "Brand messaging & positioning", "Marketing collateral"] },
  { t: "Social Media & Content", d: "Social management, email marketing, blogs, brochures and collateral.", isNew: false, items: ["Social media management", "Email marketing", "Blogs & brochures", "Content creation"] },
  { t: "Creative Direction & Media", d: "Graphic design, photography, media buying, radio and TV ads.", isNew: false, items: ["Graphic design", "Photography", "Media buying", "Radio & TV ad development", "Advertising campaigns"] },
  { t: "Corporate & Private Events", d: "Brand launches, galas, golf tournaments and weddings — planned end to end.", isNew: false, items: ["Corporate & non-profit events", "Weddings & private events", "Event marketing", "Vendor sourcing & budgets", "Day-of execution"] },
  { t: "Website Design", d: "Beautiful, fast, mobile-first websites built around your brand.", isNew: true, items: ["Custom website design", "Mobile-first build", "Bilingual sites", "Hosting & care"] },
  { t: "SEO & AI Search", d: "Rank on Google and show up when clients ask ChatGPT for a recommendation.", isNew: true, items: ["Google Business Profile", "On-page SEO", "Local citations", "AI search (ChatGPT, Gemini, Perplexity)"] },
  { t: "AI Automation", d: "Automatic lead replies, bookings, reviews and posting — less admin, more clients.", isNew: true, items: ["Instant lead replies", "Online booking", "Review requests", "Social auto-posting"] },
];

export const steps = [
  ["01", "Discover", "A one-on-one consult on your goals, audience and story."],
  ["02", "Design", "Brand, content and website — one consistent look."],
  ["03", "Launch", "Campaigns, events and sites go live, done properly."],
  ["04", "Grow", "SEO, automation and reporting keep results coming."],
];

export type Brand = { t: string; tag: string; src: string; flex: string; h: number; pos?: string };
export const brandWork: Brand[] = [
  { t: "AccuQi Wellness", tag: "Brand identity", src: "/images/accuqi-collage.jpg", flex: "1 1 320px", h: 520, pos: "50% 30%" },
  { t: "NightClerk", tag: "Brand identity", src: "/images/nightclerk-collage.jpg", flex: "1 1 320px", h: 520, pos: "50% 30%" },
  { t: "AccuQi Logo", tag: "Logo design", src: "/images/accuqi-logo.jpg", flex: "1 1 320px", h: 520, pos: "22% 50%" },
  { t: "Reception Signage", tag: "Signage", src: "/images/accuqi-reception.jpg", flex: "2 1 560px", h: 440 },
  { t: "Tote & Mug", tag: "Collateral", src: "/images/accuqi-tote-mug.jpg", flex: "1 1 320px", h: 440 },
  { t: "Business Cards", tag: "Print", src: "/images/accuqi-business-cards.jpg", flex: "1 1 320px", h: 420 },
  { t: "AccuQi Website", tag: "Website", src: "/images/accuqi-website-laptop.jpg", flex: "2 1 560px", h: 420 },
  { t: "Spa Linens", tag: "Branding", src: "/images/accuqi-towels.jpg", flex: "1 1 320px", h: 420 },
];

const S = "https://uzdjwpkgldzhnoxjeyrw.supabase.co/storage/v1/object/public/content-images/b237218e-d944-4af0-87b2-09379102e53e/portfolio/";
export const websites: { t: string; tag: string; src: string }[] = [
  { t: "Yingting Smart", tag: "Smart home · Bilingual", src: S + "yingting-smart/a-cloudflare_worker-full.jpg" },
  { t: "Tsai Orthodontics", tag: "Healthcare", src: S + "tsai-orthodontics/live-cloudflare_worker-full.jpg" },
  { t: "TTOP Chicken", tag: "Restaurant · Trilingual", src: S + "ttop-vancouver/live-cloudflare_worker-full.jpg" },
  { t: "Joyce Wu Dental", tag: "Healthcare", src: S + "joyce-wu-dental/a-cloudflare_worker-full.jpg" },
  { t: "MH Group", tag: "Real estate", src: S + "mh-group/a-cloudflare_worker-full.jpg" },
  { t: "Oceanicflo", tag: "Architecture", src: S + "oceanicflo/a-cloudflare_worker-full.jpg" },
  { t: "Wild West Wags", tag: "Dog training", src: S + "wild-west-wags/live-cloudflare_worker-full.jpg" },
  { t: "Shooting Star Travel", tag: "Travel · Trilingual", src: S + "shootingstar-travel/live-cloudflare_worker-full.jpg" },
];
