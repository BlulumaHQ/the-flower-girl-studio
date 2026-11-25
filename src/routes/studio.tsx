import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageIntro, Star, CtaBand, pageHead, steps, clients } from "../components/site";

export const Route = createFileRoute("/studio")({
  head: () => pageHead("The Studio — The Flower Girl, Vancouver", "A boutique marketing, consulting and design studio in Vancouver. Personal service from Lina, from strategy and branding to events and websites.", "/studio"),
  component: Studio,
});

const values = [
  ["Personal service", "One point of contact from the first call to the final launch. No hand-offs, no templates."],
  ["The right audience", "Every plan starts with who you want to reach — then the brand, content and channels follow."],
  ["Story first", "Traditional and modern marketing, tied together with a story people remember."],
];

function Studio() {
  return (
    <Page>
      <PageIntro eyebrow="The Studio" title="A boutique studio built on" accent="personal service." text="The Flower Girl is a marketing, consulting and design studio in Vancouver. We blend traditional and modern marketing with go-to-market strategy and storytelling — and now websites, SEO and AI automation." />

      <section className="sec">
        <div className="wrap flex flex-wrap gap-16 items-center">
          <div className="flex-1 basis-[380px] min-w-0 relative pb-10 pl-8">
            <img src="/images/flowers-dried.jpg" alt="Dried flowers in The Flower Girl studio" className="ph w-full object-cover" style={{ height: "clamp(440px,46vw,640px)", borderRadius: "320px 320px 0 0", objectPosition: "50% 20%" }} />
            <div className="absolute left-0 bottom-0 bg-background px-5 py-3 it text-[16px] flex items-center gap-2"><Star size={18} />fig. 01 — brand identity</div>
          </div>
          <div className="flex-1 basis-[380px] min-w-0">
            <p className="eyebrow acc">Meet Lina</p>
            <h2 className="h2 mt-5" style={{ fontSize: "clamp(38px,4.4vw,60px)" }}>Your brand, handled by <span className="it">one person who cares.</span></h2>
            <p className="mt-8 text-[17px] leading-[1.85] text-muted-foreground">Lina founded The Flower Girl to give small businesses and organisations the kind of personal, considered marketing that big agencies rarely offer. She works directly with every client — from strategy sessions and logo sketches to campaigns, events and the website that ties it all together.</p>
            <p className="mt-5 text-[17px] leading-[1.85] text-muted-foreground">Clients range from Small Business BC to local studios, auto shops and wellness brands across Vancouver.</p>
            <p className="it text-[30px] mt-8">— Lina</p>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <p className="eyebrow acc"><Star />What we believe</p>
          <div className="grid gap-10 mt-12" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {values.map(([t, d], i) => (
              <div key={t} className="border-t pt-6">
                <span className="it text-[22px]">0{i + 1}</span>
                <h3 className="serif text-[32px] mt-3">{t}</h3>
                <p className="text-[15px] leading-[1.8] text-muted-foreground mt-3">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="eyebrow acc">How we work</p><h2 className="h2 mt-5" style={{ fontSize: "clamp(40px,4.6vw,64px)" }}>Four steps, <span className="it">one partner.</span></h2></div>
            <Link to="/services" className="ulink">See all services →</Link>
          </div>
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

      <section className="border-y py-8">
        <div className="wrap flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-[10px] tracking-[.34em] text-accent mr-4">TRUSTED BY</span>
          {clients.map((c, i) => <span key={c} className="flex items-center gap-6 serif text-[21px] text-muted-foreground">{i > 0 && <span className="lavdot" />}{c}</span>)}
        </div>
      </section>

      <CtaBand />
    </Page>
  );
}
