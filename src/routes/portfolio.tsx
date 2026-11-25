import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page, PageIntro, CtaBand, pageHead, BrowserFrame } from "../components/site";
import { work, sites, categories, PORTFOLIO_PDF, PORTFOLIO_URL, type Category } from "../lib/lina-work";

export const Route = createFileRoute("/portfolio")({
  head: () => pageHead("Portfolio — Print, Branding & Website Design | The Flower Girl", "Reports, campaigns, brand guides, event materials and websites designed for municipal, provincial, corporate and community clients across BC.", "/portfolio"),
  component: Portfolio,
});

type Tab = "All" | Category | "Websites";
const tabs: Tab[] = ["All", ...categories, "Websites"];

function Portfolio() {
  const [tab, setTab] = useState<Tab>("All");
  const shown = tab === "All" ? categories : tab === "Websites" ? [] : [tab];
  return (
    <Page>
      <PageIntro eyebrow="Portfolio" title="Work for the public," accent="private and non-profit sectors." text="Over 20 years of reports, campaigns, brand guides, event materials and websites for municipalities, the Province of BC, businesses and community organizations." />

      <section className="sec pt-14">
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b pb-6">
            <div className="flex flex-wrap gap-3">
              {tabs.map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`pill ${tab === t ? "pill-d" : "pill-o"}`} style={{ padding: "12px 22px" }}>{t}</button>
              ))}
            </div>
            <a href={PORTFOLIO_PDF ?? PORTFOLIO_URL} target="_blank" rel="noopener" {...(PORTFOLIO_PDF ? { download: true } : {})} className="ulink">
              {PORTFOLIO_PDF ? "Download the full portfolio (PDF) ↓" : "View the full portfolio →"}
            </a>
          </div>

          {shown.map((cat) => (
            <div key={cat} className="mt-14">
              <p className="eyebrow acc">{cat} projects</p>
              <div className="grid mt-8" style={{ gap: "44px 28px", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))" }}>
                {work.filter((w) => w.cat === cat).map((w) => (
                  <figure key={w.src} className="min-w-0">
                    <img src={w.src} alt={`${w.t} — ${w.tag}`} loading="lazy" className="wk w-full bg-alt" style={{ aspectRatio: "4/5", objectPosition: w.pos, objectFit: w.fit, padding: w.fit === "contain" ? 16 : 0 }} />
                    <figcaption className="border-t mt-4 pt-4">
                      <span className="serif text-[22px] block leading-tight">{w.t}</span>
                      <span className="text-[10px] uppercase tracking-[.26em] text-muted-foreground">{w.tag}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}

          {(tab === "All" || tab === "Websites") && (
            <div className="mt-20">
              <p className="eyebrow acc">Websites & e-communications</p>
              <div className="grid mt-8" style={{ gap: "56px 32px", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
                {sites.map((w) => (
                  <figure key={w.src} className="min-w-0">
                    <BrowserFrame src={w.src} alt={`${w.t} ${w.tag.toLowerCase()}`} />
                    <figcaption className="flex justify-between items-baseline gap-4 border-t mt-4 pt-4">
                      <span className="serif text-[25px]">{w.t}</span><span className="text-[10px] uppercase tracking-[.26em] text-muted-foreground">{w.tag}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="mt-24 border-t pt-12 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-[560px]">
              <p className="eyebrow acc">The full portfolio</p>
              <h2 className="h2 mt-5" style={{ fontSize: "clamp(34px,4vw,54px)" }}>See every project in <span className="it">one place.</span></h2>
            </div>
            <a href={PORTFOLIO_PDF ?? PORTFOLIO_URL} target="_blank" rel="noopener" {...(PORTFOLIO_PDF ? { download: true } : {})} className="pill pill-d">
              {PORTFOLIO_PDF ? "Download PDF" : "View full portfolio"}
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </Page>
  );
}
