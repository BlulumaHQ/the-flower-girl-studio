import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page, PageIntro, CtaBand, pageHead, brandWork, websites, ScrollShot } from "../components/site";

export const Route = createFileRoute("/portfolio")({
  head: () => pageHead("Portfolio — Branding & Website Design | The Flower Girl", "Selected brand identities, logos, print, signage and websites designed for Vancouver businesses.", "/portfolio"),
  component: Portfolio,
});

const tabs = ["All", "Branding", "Websites"] as const;

function Portfolio() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  return (
    <Page>
      <PageIntro eyebrow="Portfolio" title="Brands we've" accent="brought to life." text="Logos, brand identities, print, signage and websites. Hover over a website to scroll through the full homepage." />

      <section className="sec pt-14">
        <div className="wrap">
          <div className="flex flex-wrap gap-3 border-b pb-6">
            {tabs.map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`pill ${tab === t ? "pill-d" : "pill-o"}`} style={{ padding: "12px 22px" }}>{t}</button>
            ))}
          </div>

          {tab !== "Websites" && (
            <div className="mt-14">
              <p className="eyebrow acc">Branding & identity</p>
              <div className="flex flex-wrap mt-8" style={{ gap: "40px 28px" }}>
                {brandWork.map((w) => (
                  <figure key={w.t} style={{ flex: w.flex }} className="min-w-0">
                    <img src={w.src} alt={`${w.t} — ${w.tag}`} loading="lazy" className="wk w-full object-cover bg-alt" style={{ height: `min(${w.h}px, 120vw)`, objectPosition: w.pos ?? "50% 50%" }} />
                    <figcaption className="flex justify-between items-baseline gap-4 border-t mt-4 pt-4">
                      <span className="serif text-[25px]">{w.t}</span><span className="text-[10px] uppercase tracking-[.26em] text-muted-foreground">{w.tag}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {tab !== "Branding" && (
            <div className="mt-20">
              <p className="eyebrow acc">Website design</p>
              <div className="grid mt-8" style={{ gap: "56px 32px", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
                {websites.map((w) => (
                  <figure key={w.t} className="min-w-0">
                    <ScrollShot src={w.src} alt={`${w.t} website homepage`} />
                    <figcaption className="flex justify-between items-baseline gap-4 border-t mt-4 pt-4">
                      <span className="serif text-[25px]">{w.t}</span><span className="text-[10px] uppercase tracking-[.26em] text-muted-foreground">{w.tag}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </Page>
  );
}
