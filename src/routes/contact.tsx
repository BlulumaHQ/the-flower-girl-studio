import { createFileRoute } from "@tanstack/react-router";
import { Page, Star, pageHead } from "../components/site";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact — Book a Free Consultation | The Flower Girl", "Book a free consultation with The Flower Girl in Vancouver — branding, marketing, events, websites, SEO and AI automation.", "/contact"),
  component: Contact,
});

function Contact() {
  return (
    <Page>
      <section className="sec dark">
        <div className="wrap flex flex-wrap gap-16">
          <div className="flex-1 basis-[380px] min-w-0">
            <p className="eyebrow" style={{ color: "var(--dark-accent)" }}><Star color="var(--lav)" />Contact</p>
            <h1 className="h1 mt-6" style={{ fontSize: "clamp(48px,6.2vw,92px)" }}>Let's grow something <span className="dacc">together.</span></h1>
            <p className="dmuted mt-8 text-[17px] leading-[1.8] max-w-[440px]">Book a free consultation. Tell us where your brand is today and where you'd like it to go — we'll reply within one business day.</p>
            <p className="serif text-[24px] mt-10"><a href="mailto:lina@theflowergirl.ca" className="hover:underline">lina@theflowergirl.ca</a></p>
            <p className="serif italic text-[22px] dmuted">Vancouver, British Columbia</p>
          </div>
          {/* TODO: wire form submission (Formspree) */}
          <form className="flex-1 basis-[380px] min-w-0 grid sm:grid-cols-2 gap-x-8 gap-y-8 content-start" onSubmit={(e) => e.preventDefault()}>
            {["Name", "Company", "Email", "Phone"].map((l) => (
              <div key={l} className="field"><label htmlFor={l}>{l}</label><input id={l} name={l.toLowerCase()} type={l === "Email" ? "email" : l === "Phone" ? "tel" : "text"} /></div>
            ))}
            <div className="field sm:col-span-2">
              <label htmlFor="interest">Interested in</label>
              <select id="interest" name="interest" className="w-full bg-transparent border-0 border-b py-2.5 outline-none" style={{ borderColor: "oklch(0.55 0.04 40)", color: "var(--dark-foreground)" }}>
                {["Brand & logo", "Social media & content", "Events", "Website design", "SEO & AI search", "AI automation", "Not sure yet"].map((o) => <option key={o} style={{ color: "#3D2219" }}>{o}</option>)}
              </select>
            </div>
            <div className="field sm:col-span-2"><label htmlFor="msg">How can we help?</label><textarea id="msg" name="message" rows={4} /></div>
            <div className="sm:col-span-2"><button type="submit" className="pill pill-c">Request consultation</button></div>
          </form>
        </div>
      </section>
    </Page>
  );
}
