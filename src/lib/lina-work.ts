// Lina Ma's portfolio — images served from her Portfoliobox library.
const CDN = "https://d2f8l4t0zpiyim.cloudfront.net/000_clients/4228016/page/";

/** Full online portfolio. */
export const PORTFOLIO_URL = "https://linama.portfoliobox.net/";
/** Downloadable PDF portfolio. Set to "/downloads/lina-ma-portfolio.pdf" once the file is in /public/downloads. */
export const PORTFOLIO_PDF: string | null = null;

export type Category = "Municipal" | "Provincial" | "Corporate & Community";
export type Piece = { t: string; tag: string; cat: Category; src: string; pos: string; fit: "cover" | "contain" };

const p = (t: string, tag: string, cat: Category, file: string, pos = "50% 0%"): Piece => ({ t, tag, cat, src: CDN + file, pos, fit: pos === "50% 50%" ? "contain" : "cover" });

export const work: Piece[] = [
  p("Town of Qualicum Beach", "Financial plan", "Municipal", "tqb-financial-plan-2025-template-page-1-f3aded.png"),
  p("City of North Vancouver", "Open Streets infographic", "Municipal", "cnv-open-streets-infographic-page-1-637e1c.png"),
  p("BC Digital Trust", "Brand overview", "Provincial", "bc-digital-trust-brand-overview-updated-page-1-62ad18.png"),
  p("Huds and Lolo", "Summer lookbook", "Corporate & Community", "hudslolo-summer-lookbook-2022-page-1-9b61f5.png"),
  p("City of Richmond", "Challenge coins", "Municipal", "city-of-richmond-challenge-coins-draft-3-88c862.png", "50% 50%"),
  p("RCMP", "Fraud awareness campaign", "Municipal", "rcmp-fraud-awareness-2026-c944d7.webp"),
  p("BC Parks", "Day-use pass report", "Provincial", "bc-parks-summer-day-use-pass-stats-report-final-updated-092724-page-1-051b86.png"),
  p("Women's Wellness", "Event invitation", "Corporate & Community", "womens-wellness-invitation-8f8528.png"),
  p("City of North Vancouver", "What We Heard report", "Municipal", "cnv-wwhr-climate-and-environment-ph2-page-01-e3804f.png"),
  p("Urban Forest Plan", "Policy document", "Municipal", "urban-forest-plan-2025-page-20-63af14.png"),
  p("Executive Summary", "Report design", "Provincial", "emdt-executive-summary-report-final-page-02-d563a1.png"),
  p("Ravens", "Let's Play Hockey", "Corporate & Community", "lets-play-hockey-ravens-43ceba.png"),
  p("Ravens", "Sponsorship package", "Corporate & Community", "ravens-sponsorship-package-2026-218915.webp"),
  p("The Shipyards", "Summer event ad", "Municipal", "cnv-shipyards-1-4-page-ad-4854x5-final-c9430d.png"),
  p("City of North Vancouver", "Budget in brief", "Municipal", "cnv-info-sheet-draft-2025-budget-in-brief-icc-december6-page-1-8c2ffa.png"),
  p("BC Digital Trust", "Tradeshow ad", "Provincial", "bcdt-ubcm-tradeshow-ad-35x475-final-42e197.png"),
  p("Advertising Opportunities", "Media kit", "Corporate & Community", "bccc-advertising-opportunities-2024-page-1-013655.png"),
  p("Ridge Meadows RCMP", "Strategic plan", "Municipal", "ridge-meadows-rcmp-strategic-plan-pamphlet-page-1-93ed22.png"),
  p("City of North Vancouver", "Utilities info", "Municipal", "2023-cnv-utilities-document-final-online-page-1-6b1460.png"),
  p("Liquor & Cannabis", "Bifold brochure", "Provincial", "liquor-cannabis-bifold-draft-3-page-2-b8c905.png", "50% 50%"),
  p("Chuckers", "Event flyer", "Corporate & Community", "chuckers-flyer-2023-page-1-762ba2.png"),
  p("Rumble", "Event invitation", "Corporate & Community", "rumble-invitation-may-30-3caa46.png"),
  p("Women's Health Event", "Event poster", "Corporate & Community", "menopause-event-ii-9d8fcc.webp"),
];

/** Homepage feature, in order. */
export const featured: Piece[] = ["bc-digital-trust-brand-overview", "hudslolo-summer-lookbook", "cnv-open-streets-infographic"].map((k) => work.find((w) => w.src.includes(k))!);

export const categories: Category[] = ["Municipal", "Provincial", "Corporate & Community"];

export type Site = { t: string; tag: string; src: string };
export const sites: Site[] = [
  { t: "Soulshine Sanctuary", tag: "Website", src: CDN + "soulshine-sanctuary-2-32e6fd.jpg" },
  { t: "NEO", tag: "Website", src: CDN + "neo-website-beabf2.png" },
  { t: "Visual", tag: "Website", src: CDN + "visual-website2-d1bae4.jpg" },
  { t: "Glambot", tag: "Website", src: CDN + "glambot-cfc3c0.jpg" },
  { t: "PAB", tag: "Website", src: CDN + "pab-website-3e17b8.jpg" },
  { t: "The Face Studio", tag: "Website", src: CDN + "facestudio-dbd9ee.jpg" },
  { t: "Ravens", tag: "Newsletter", src: CDN + "ravens-newsletter-3cdb59.jpg" },
  { t: "The Face Studio", tag: "Newsletter", src: CDN + "face-studio-newsletter-e2f546.jpg" },
];

export const img = (name: string) => CDN + name;
