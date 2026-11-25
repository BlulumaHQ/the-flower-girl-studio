import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Star, CtaBand, pageHead, clients, services, steps, websites } from "../components/site";
import { img } from "../lib/lina-work";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "The Flower Girl — Boutique Marketing, Branding & Web Design Studio in Vancouver",
      "The Flower Girl is a boutique marketing, consulting and design studio in Vancouver, BC — branding, social media, websites, SEO and AI automation with personal service from Lina.",
      "/",
    ),
  component: Index,
});

function Index() {
  const homeSites = ["soulshine", "neo-website", "visual-website2", "facestudio-dbd9ee"].map((k) => websites.find((w) => w.src.includes(k))!);
  return (
    <Page>
      <section className="pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="wrap flex flex-wrap items-center gap-12 justify-between">
          <div className="flex-1 basis-[420px] min-w-0">
            <p className="eyebrow"><Star />Boutique studio · Vancouver</p>
            <h1 className="h1 mt-6" style={{ fontSize: "clamp(48px,6vw,92px)" }}>Brands that bloom, <span className="it">beautifully.</span></h1>
            <p className="mt-6 text-[18px] leading-[1.7] text-muted-foreground max-w-[450px]">Strategy, design and now digital — logos, social media, websites, SEO and AI automation, crafted with care by one boutique studio that knows your story.</p>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <Link to="/contact" className="pill pill-d">Free consultation</Link>
              <Link to="/services" className="ulink">Explore services</Link>
            </div>
          </div>
          <div className="relative flex-1 basis-[420px] max-w-[560px] pb-[70px] pl-[40px] sm:pl-[64px]">
            <img src={img("soulshine-sanctuary-2-32e6fd.jpg")} alt="Soulshine Sanctuary website design" className="wk block w-full h-auto" style={{ boxShadow: "0 24px 60px -30px rgba(60,30,20,.35)" }} />
            <div className="arch"><img src="/images/flowers-roses.jpg" alt="Flowers in the studio" className="ph w-full h-full object-cover" /></div>
            <p className="absolute right-0 bottom-4 flex items-center gap-2 it text-[16px] text-foreground"><Star size={18} />Print, brand & website design</p>
          </div>
        </div>
      </section>

      <section className="border-y py-8">
        <div className="wrap flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-[10px] tracking-[.34em] text-accent mr-4">TRUSTED BY</span>
          {clients.map((c, i) => <span key={c} className="flex items-center gap-6 serif text-[21px] text-muted-foreground">{i > 0 && <span className="lavdot" />}{c}</span>)}
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap text-center max-w-[1080px] flex flex-col items-center">
          <Star size={30} />
          <p className="eyebrow acc mt-6">The Studio</p>
          <h2 className="h2 mt-8" style={{ fontSize: "clamp(32px,3.8vw,50px)", lineHeight: 1.2 }}>A boutique marketing, consulting and design studio — built on <span className="it">personal service</span> and reaching the right audience.</h2>
          <p className="mt-8 text-[17px] leading-[1.8] text-muted-foreground max-w-[680px]">You work directly with Lina, from the first logo sketch to the campaign, the event and now the website that brings it all together.</p>
          <Link to="/studio" className="ulink mt-8">Meet the studio →</Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div><p className="eyebrow acc">Selected work</p><h2 className="h2 mt-5" style={{ fontSize: "clamp(42px,5vw,70px)" }}>Websites we've <span className="it">brought to life.</span></h2></div>
            <Link to="/portfolio" className="ulink">View the portfolio →</Link>
          </div>
          <div className="grid" style={{ gap: "56px 32px", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))" }}>
            {homeSites.map((w) => (
              <figure key={w.src} className="min-w-0">
                <img src={w.src} alt={`${w.t} website`} loading="lazy" className="wk w-full bg-alt" style={{ aspectRatio: "16/10", objectFit: "contain", padding: 12 }} />
                <figcaption className="flex justify-between items-baseline gap-4 border-t mt-4 pt-4">
                  <span className="serif text-[25px]">{w.t}</span><span className="text-[10px] uppercase tracking-[.26em] text-muted-foreground">Website</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sec pt-0">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div><p className="eyebrow acc">Services</p><h2 className="h2 mt-5" style={{ fontSize: "clamp(42px,5vw,70px)" }}>Everything your brand <span className="it">needs.</span></h2></div>
            <Link to="/services" className="ulink">All services →</Link>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))" }}>
            {services.map((s, i) => (
              <Link to="/services" key={s.t} className={`card block hover:border-[var(--lav)] transition-colors ${s.isNew ? "new" : ""}`}>
                <div className="flex items-center justify-between"><span className="it text-[22px]">{String(i + 1).padStart(2, "0")}</span>{s.isNew && <span className="newtag">NEW</span>}</div>
                <h3 className="serif text-[29px] mt-6 leading-tight">{s.t}</h3>
                <div className="rule" />
                <p className="text-[14px] leading-[1.7] text-muted-foreground">{s.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap flex flex-wrap gap-16 items-center">
          <div className="flex-1 basis-[380px] min-w-0 relative p-[18px] border" style={{ borderColor: "oklch(0.83 0.03 330)" }}>
            <img src={img("neo-website-beabf2.png")} alt="NEO website design" loading="lazy" className="wk block w-full h-auto" />
            <span className="absolute left-0 bottom-8 bg-background px-5 py-3 it text-[16px] text-foreground">fig. 02 — NEO, website</span>
          </div>
          <div className="flex-1 basis-[380px] min-w-0">
            <p className="eyebrow acc">New — The digital studio</p>
            <h2 className="h2 mt-5" style={{ fontSize: "clamp(40px,4.6vw,64px)" }}>Your brand, now <span className="it">online</span> — and working while you sleep.</h2>
            <p className="mt-8 text-[17px] leading-[1.8] text-muted-foreground max-w-[520px]">Websites, SEO and AI search, and simple automations — built with the same eye for design as your brand.</p>
            <Link to="/services" hash="digital" className="ulink inline-block mt-8">Explore the digital studio →</Link>
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

      <CtaBand />
    </Page>
  );
}
