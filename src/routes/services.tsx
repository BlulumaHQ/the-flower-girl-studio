import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "../lib/lina-work";
import { Page, PageIntro, Star, CtaBand, pageHead, services } from "../components/site";

export const Route = createFileRoute("/services")({
  head: () => pageHead("Services — Marketing, Branding, Websites, SEO & AI | The Flower Girl", "Growth strategy, brand and logo design, social media, creative direction, events — plus website design, SEO & AI search and AI automation in Vancouver.", "/services"),
  component: Services,
});

const classic = services.filter((s) => !s.isNew);
const digital = services.filter((s) => s.isNew);

function Services() {
  return (
    <Page>
      <PageIntro eyebrow="Services" title="Everything your brand" accent="needs." text="From identity to growth — eight services, one point of contact. Pick one, or let us bring them together into a single plan." />

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow acc"><Star />Marketing & design</p>
          <div className="mt-10 border-t">
            {classic.map((s, i) => (
              <div key={s.t} className="grid gap-6 py-10 border-b md:grid-cols-[80px_1fr_1fr] items-start">
                <span className="it text-[28px]">0{i + 1}</span>
                <div>
                  <h2 className="serif text-[36px] leading-tight">{s.t}</h2>
                  <p className="text-[15px] leading-[1.8] text-muted-foreground mt-3 max-w-[460px]">{s.d}</p>
                </div>
                <ul className="grid gap-3 text-[15px]">
                  {s.items.map((it) => <li key={it} className="flex items-center gap-3"><span className="lavdot" />{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="digital" className="sec alt">
        <div className="wrap">
          <div className="flex flex-wrap gap-16 items-center">
            <div className="flex-1 basis-[380px] min-w-0">
              <p className="eyebrow acc">New — The digital studio</p>
              <h2 className="h2 mt-5" style={{ fontSize: "clamp(40px,4.6vw,64px)" }}>Your brand, now <span className="it">online</span> — and working while you sleep.</h2>
              <p className="mt-8 text-[17px] leading-[1.8] text-muted-foreground">The same eye for design, now on your website, in search results and behind the scenes.</p>
            </div>
            <div className="flex-1 basis-[380px] min-w-0 p-[18px] border" style={{ borderColor: "oklch(0.83 0.03 330)" }}>
              <img src={img("visual-website2-d1bae4.jpg")} alt="Website design by The Flower Girl" className="wk block w-full h-auto" />
            </div>
          </div>
          <div className="grid gap-5 mt-16" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
            {digital.map((s, i) => (
              <div key={s.t} className="card new">
                <div className="flex items-center justify-between"><span className="it text-[24px]">{["i.", "ii.", "iii."][i]}</span><span className="newtag">NEW</span></div>
                <h3 className="serif text-[31px] mt-6 leading-tight">{s.t}</h3>
                <div className="rule" />
                <p className="text-[14px] leading-[1.7] text-muted-foreground">{s.d}</p>
                <ul className="grid gap-2 mt-6 text-[14px]">
                  {s.items.map((it) => <li key={it} className="flex items-center gap-3"><span className="lavdot" />{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <Link to="/portfolio" className="ulink inline-block mt-12">See websites we've designed →</Link>
        </div>
      </section>

      <CtaBand />
    </Page>
  );
}
