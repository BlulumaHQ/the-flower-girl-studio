import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const SITE_URL = "https://theflowergirl.ca";
const TITLE = "The Flower Girl — Boutique Marketing, Branding & Web Design Studio in Vancouver";
const DESC = "The Flower Girl is a boutique marketing, consulting and design studio in Vancouver, BC — branding, social media, websites, SEO and AI automation with personal service from Lina.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

const SB = "https://uzdjwpkgldzhnoxjeyrw.supabase.co/storage/v1/object/public/content-images/b237218e-d944-4af0-87b2-09379102e53e/portfolio";
const BL = "https://bluluma.com/images/branding";

function Logo({ color = "var(--ink)", flowerColor = "var(--lav)", className = "", style }: { color?: string; flowerColor?: string; className?: string; style?: React.CSSProperties }) {
  const lines = Array.from({ length: 32 }, (_, i) => {
    const a = (i * 360) / 32 * Math.PI / 180; const r2 = i % 2 === 0 ? 168 : 151;
    return <line key={i} x1={1043 + 40 * Math.cos(a)} y1={328 + 40 * Math.sin(a)} x2={1043 + r2 * Math.cos(a)} y2={328 + r2 * Math.sin(a)} />;
  });
  const t = { fontFamily: "Questrial", lengthAdjust: "spacingAndGlyphs" as const, fill: color };
  return (
    <svg viewBox="0 0 1230 520" className={className} style={style} role="img" aria-label="The Flower Girl">
      <text x={170} y={85} fontSize={118} textLength={155} {...t}>the</text>
      <text x={10} y={298} fontSize={300} textLength={865} {...t}>flower</text>
      <text x={555} y={473} fontSize={210} textLength={265} {...t}>girl</text>
      <g stroke={flowerColor} strokeWidth={15} strokeLinecap="round">{lines}</g>
    </svg>
  );
}

function Star({ size = 22, color = "var(--lav2)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden className="shrink-0">
      <g stroke={color} strokeWidth={3.2} strokeLinecap="round">
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i * 15 * Math.PI) / 180; const r = i % 2 ? 9 + 39 * 0.9 : 48;
          return <line key={i} x1={50 + 9 * Math.cos(a)} y1={50 + 9 * Math.sin(a)} x2={50 + r * Math.cos(a)} y2={50 + r * Math.sin(a)} />;
        })}
      </g>
    </svg>
  );
}

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="browser">
      <div className="browser-bar"><span className="dot" /><span className="dot" /><span className="dot" /><span className="bpill" /></div>
      <img src={src} alt={alt} className="wk block w-full object-cover object-top" style={{ aspectRatio: "783/540" }} />
    </div>
  );
}

const nav = [["01", "Studio", "#studio"], ["02", "Work", "#work"], ["03", "Services", "#services"], ["04", "Digital", "#digital"], ["05", "Contact", "#contact"]];
const clients = ["Small Business BC", "Almira Bardai", "The Comeback Corner", "ER Auto Works", "The Face Studio", "Huds and Lolo", "Idea Camp Communications", "Pender Auto Body"];
const work: [string, string, string, string, number, string?][] = [
  ["AccuQi Wellness", "Brand identity", `${BL}/accuqi-wellness-brand-mood-board.webp`, "1 1 320px", 520, "50% 30%"],
  ["NightClerk", "Brand identity", `${BL}/accuqi-wellness-logo-variations.webp`, "1 1 320px", 520, "50% 30%"],
  ["AccuQi Logo", "Logo design", `${BL}/accuqi-wellness-logo-design.webp`, "1 1 320px", 520, "22% 50%"],
  ["Reception Signage", "Signage", `${BL}/accuqi-wellness-storefront-signage-window-graphics.webp`, "2 1 560px", 440],
  ["Tote & Mug", "Collateral", `${BL}/accuqi-wellness-branded-merchandise.webp`, "1 1 320px", 440],
  ["Yingting Smart", "Website", `${SB}/yingting-smart/a-cloudflare_worker-full.jpg`, "2 1 560px", 420, "50% 0%"],
  ["Spa Linens", "Branding", `${BL}/accuqi-wellness-staff-apparel.webp`, "1 1 320px", 420],
];
const services: [string, string, boolean][] = [
  ["Growth Strategy", "Holistic marketing plans, goal setting, benchmarking and go-to-market strategy.", false],
  ["Brand & Logo Design", "Logos, style guides and brand messaging that feel unmistakably you.", false],
  ["Social Media & Content", "Social management, email marketing, blogs, brochures and collateral.", false],
  ["Creative Direction & Media", "Graphic design, photography, media buying, radio and TV ads.", false],
  ["Corporate & Private Events", "Brand launches, galas, golf tournaments and weddings — planned end to end.", false],
  ["Website Design", "Beautiful, fast, mobile-first websites built around your brand.", true],
  ["SEO & AI Search", "Rank on Google and show up when clients ask ChatGPT for a recommendation.", true],
  ["AI Automation", "Automatic lead replies, bookings, reviews and posting — less admin, more clients.", true],
];
const digital = [["i.", "Website Design", "Elegant, mobile-first websites that match the brand we built together."], ["ii.", "SEO & AI Search", "Be found on Google — and in the answers from ChatGPT, Gemini and Perplexity."], ["iii.", "AI Automation", "Lead replies, bookings, reviews and social posting that run on their own."]];
const steps = [["01", "Discover", "A one-on-one consult on your goals, audience and story."], ["02", "Design", "Brand, content and website — one consistent look."], ["03", "Launch", "Campaigns, events and sites go live, done properly."], ["04", "Grow", "SEO, automation and reporting keep results coming."]];

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur">
        <div className="wrap flex items-center justify-between gap-6 py-4">
          <a href="#top" aria-label="The Flower Girl home"><Logo style={{ height: "clamp(56px,6.4vw,92px)", width: "auto" }} /></a>
          <nav className="hidden lg:flex gap-8 text-[13px] tracking-[.1em]">
            {nav.map(([n, l, h]) => <a key={h} href={h} className="hover:text-accent transition-colors"><span className="it text-[15px] mr-1.5">{n}</span>{l}</a>)}
          </nav>
          <a href="#contact" className="pill pill-o hidden lg:inline-flex">Book a consult</a>
          <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span className="block w-7 h-px bg-foreground mb-2" /><span className="block w-7 h-px bg-foreground mb-2" /><span className="block w-5 h-px bg-foreground ml-auto" />
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t bg-background">
            <nav className="wrap flex flex-col py-6 gap-5">
              {nav.map(([n, l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="serif text-3xl font-light"><span className="it text-lg mr-3">{n}</span>{l}</a>)}
              <a href="#contact" onClick={() => setOpen(false)} className="pill pill-o self-start mt-2">Book a consult</a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="sec">
          <div className="wrap flex flex-wrap items-center gap-16 justify-between">
            <div className="flex-1 basis-[420px] min-w-0">
              <p className="eyebrow"><Star />Boutique studio · Vancouver</p>
              <h1 className="serif font-light mt-8" style={{ fontSize: "clamp(54px,7.2vw,108px)", lineHeight: .96 }}>Brands that bloom, <span className="it">beautifully.</span></h1>
              <p className="mt-8 text-[18px] leading-[1.75] text-muted-foreground max-w-[450px]">Strategy, design and now digital — logos, social media, websites, SEO and AI automation, crafted with care by one boutique studio that knows your story.</p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <a href="#contact" className="pill pill-d">Free consultation</a>
                <a href="#services" className="ulink">Explore services</a>
              </div>
            </div>
            <div className="relative flex-1 basis-[420px] max-w-[620px] pb-[90px] pl-[40px] sm:pl-[70px]">
              <BrowserFrame src={`${SB}/tsai-orthodontics/live-cloudflare_worker-full.jpg`} alt="Tsai Orthodontics website design" />
              <div className="arch"><img src={`${BL}/accuqi-wellness-business-card-design.webp`} alt="AccuQi Wellness business cards" className="ph w-full h-full object-cover" style={{ objectPosition: "66% 30%" }} /></div>
              <p className="absolute right-0 bottom-4 flex items-center gap-2 it text-[16px] text-foreground"><Star size={18} />Brand identity & website design</p>
            </div>
          </div>
        </section>

        <section className="border-y py-8">
          <div className="wrap flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[10px] tracking-[.34em] text-accent mr-4">TRUSTED BY</span>
            {clients.map((c, i) => <span key={c} className="flex items-center gap-6 serif text-[21px] text-muted-foreground">{i > 0 && <span className="lavdot" />}{c}</span>)}
          </div>
        </section>

        <section id="studio" className="sec alt">
          <div className="wrap text-center max-w-[1080px] flex flex-col items-center">
            <Star size={30} />
            <p className="eyebrow acc mt-6">01 · The Studio</p>
            <h2 className="h2 mt-8" style={{ fontSize: "clamp(32px,3.8vw,50px)", lineHeight: 1.2 }}>A boutique marketing, consulting and design studio — built on <span className="it">personal service</span> and reaching the right audience.</h2>
            <p className="mt-8 text-[17px] leading-[1.8] text-muted-foreground max-w-[680px]">Traditional and modern marketing, go-to-market strategy and storytelling. You work directly with Lina, from the first logo sketch to the campaign, the event and now the website that brings it all together.</p>
            <p className="it text-[30px] mt-8">— Lina</p>
          </div>
        </section>

        <section id="work" className="sec">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <div><p className="eyebrow acc">02 · Selected work</p><h2 className="h2 mt-5" style={{ fontSize: "clamp(42px,5vw,70px)" }}>Brands we've <span className="it">brought to life.</span></h2></div>
              <a href="#contact" className="ulink no-underline hover:underline">Start your project →</a>
            </div>
            <div className="flex flex-wrap" style={{ gap: "40px 28px" }}>
              {work.map(([t, tag, src, fb, h, pos]) => (
                <figure key={t} style={{ flex: fb }} className="min-w-0">
                  <img src={src} alt={`${t} — ${tag}`} loading="lazy" className="wk w-full object-cover bg-alt" style={{ height: `min(${h}px, 120vw)`, objectPosition: pos ?? "50% 50%" }} />
                  <figcaption className="flex justify-between items-baseline gap-4 border-t mt-4 pt-4">
                    <span className="serif text-[25px]">{t}</span><span className="text-[10px] uppercase tracking-[.26em] text-muted-foreground">{tag}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="sec pt-0">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <div><p className="eyebrow acc">03 · Services</p><h2 className="h2 mt-5" style={{ fontSize: "clamp(42px,5vw,70px)" }}>Everything your brand <span className="it">needs.</span></h2></div>
              <p className="serif italic text-[21px] text-muted-foreground max-w-[360px]">From identity to growth — eight services, one point of contact.</p>
            </div>
            <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))" }}>
              {services.map(([t, d, n], i) => (
                <div key={t} className={`card ${n ? "new" : ""}`}>
                  <div className="flex items-center justify-between"><span className="it text-[22px]">{String(i + 1).padStart(2, "0")}</span>{n && <span className="newtag">NEW</span>}</div>
                  <h3 className="serif text-[29px] mt-6 leading-tight">{t}</h3>
                  <div className="rule" />
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="digital" className="sec alt">
          <div className="wrap flex flex-wrap gap-16 items-center">
            <div className="flex-1 basis-[380px] min-w-0 relative p-[18px] border" style={{ borderColor: "oklch(0.83 0.03 330)" }}>
              <img src={`${BL}/accuqi-wellness-brand-guidelines-cover.webp`} alt="AccuQi Wellness brand guidelines" loading="lazy" className="wk w-full object-cover" style={{ height: "clamp(420px,42vw,620px)" }} />
              <span className="absolute left-0 bottom-8 bg-background px-5 py-3 it text-[16px] text-foreground">fig. 02 — AccuQi Wellness, website</span>
            </div>
            <div className="flex-1 basis-[380px] min-w-0">
              <p className="eyebrow acc">04 · New — The digital studio</p>
              <h2 className="h2 mt-5" style={{ fontSize: "clamp(40px,4.6vw,64px)" }}>Your brand, now <span className="it">online</span> — and working while you sleep.</h2>
              <ul className="mt-10 border-t">
                {digital.map(([n, t, d]) => (
                  <li key={t} className="flex gap-6 py-6 border-b"><span className="it text-[26px] w-12 shrink-0">{n}</span><div><h3 className="serif text-[25px]">{t}</h3><p className="text-[14px] leading-[1.7] text-muted-foreground mt-1">{d}</p></div></li>
                ))}
              </ul>
              <a href="#contact" className="ulink inline-block mt-8">Ask about a free website audit →</a>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <p className="eyebrow acc"><Star />How we work</p>
            <div className="grid gap-10 mt-12" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
              {steps.map(([n, t, d]) => (
                <div key={n} className="border-t pt-6">
                  <span className="serif italic text-[58px] leading-none text-lav">{n}</span>
                  <h3 className="serif text-[26px] mt-4">{t}</h3>
                  <p className="text-[14px] leading-[1.7] text-muted-foreground mt-2">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="sec dark">
          <div className="wrap flex flex-wrap gap-16">
            <div className="flex-1 basis-[380px] min-w-0">
              <p className="eyebrow dacc not-italic" style={{ fontFamily: "var(--font-sans)", fontStyle: "normal" }}><Star color="var(--lav)" />05 · Contact</p>
              <h2 className="h2 mt-6" style={{ fontSize: "clamp(46px,5.8vw,84px)" }}>Let's grow something <span className="dacc">together.</span></h2>
              <p className="dmuted mt-8 text-[17px] leading-[1.8] max-w-[440px]">Book a free consultation. Tell us where your brand is today and where you'd like it to go.</p>
              <p className="serif text-[22px] mt-10"><a href="mailto:lina@theflowergirl.ca" className="hover:underline">lina@theflowergirl.ca</a></p>
              <p className="serif italic text-[22px] dmuted">Vancouver, British Columbia</p>
            </div>
            {/* TODO: wire form submission later */}
            <form className="flex-1 basis-[380px] min-w-0 grid sm:grid-cols-2 gap-x-8 gap-y-8 content-start" onSubmit={(e) => e.preventDefault()}>
              {["Name", "Company", "Email", "Phone"].map((l) => (
                <div key={l} className="field"><label htmlFor={l}>{l}</label><input id={l} name={l.toLowerCase()} type={l === "Email" ? "email" : l === "Phone" ? "tel" : "text"} /></div>
              ))}
              <div className="field sm:col-span-2"><label htmlFor="msg">How can we help?</label><textarea id="msg" name="message" rows={4} /></div>
              <div className="sm:col-span-2"><button type="submit" className="pill pill-c">Request consultation</button></div>
            </form>
          </div>
        </section>
      </main>

      <footer className="dark border-t" style={{ borderColor: "oklch(0.36 0.04 40)" }}>
        <div className="wrap py-10 flex flex-wrap items-center justify-between gap-6">
          <Logo color="var(--dark-foreground)" flowerColor="var(--lav)" style={{ height: 64, width: "auto" }} />
          <div className="text-[12px] text-right" style={{ color: "oklch(0.77 0.02 50)" }}>
            <p>© 2026 The Flower Girl · Vancouver, BC</p>
            <p className="mt-1">Website by <a href="https://bluluma.com" target="_blank" rel="noopener" className="underline">Bluluma Design</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
