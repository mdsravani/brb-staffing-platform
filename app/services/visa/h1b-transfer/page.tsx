"use client";
import Link from "next/link";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const steps = [
  { title: "Transfer Assessment", desc: "We review your current H-1B status, employer details, and role alignment with BRB Data InfoTech." },
  { title: "Petition Filing", desc: "We file the H-1B transfer petition with USCIS — you can begin working with us once filed (portability)." },
  { title: "Documentation", desc: "Our team gathers and prepares all required supporting documents for a clean, fast approval." },
  { title: "Approval & Continuation", desc: "Once approved, your H-1B is seamlessly continued under BRB Data InfoTech sponsorship." },
];

const benefits = [
  "Work authorization continues during transfer (portability)",
  "No new H-1B cap subject — immediate filing",
  "Streamlined documentation process",
  "Rapid compliance alignment",
  "Dedicated immigration case manager",
  "Pathway to Green Card sponsorship",
];

const faqs = [
  { q: "Can I work while my transfer is pending?", a: "Yes. Under H-1B portability rules, you can begin working with BRB Data InfoTech as soon as the transfer petition is filed, provided you have been in valid H-1B status." },
  { q: "How long does an H-1B transfer take?", a: "Standard processing takes 2–4 months. Premium processing (15 business days) is available for faster approval." },
  { q: "Do I need to leave the US for a transfer?", a: "No. H-1B transfers are processed without requiring you to leave the United States." },
  { q: "Is there an H-1B cap for transfers?", a: "No. H-1B transfers are cap-exempt — they are not subject to the annual H-1B lottery." },
];

export default function H1BTransferPage() {
  return (
    <main className="w-full">
      <section style={{ padding: "80px 24px 72px", background: "linear-gradient(160deg, #0f172a 0%, #134e4a 55%, #0f766e 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#99f6e4", textDecoration: "none", marginBottom: 24, fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Services
          </Link>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#ccfbf1", borderRadius: 100, padding: "4px 14px", marginBottom: 20, marginLeft: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0f766e" }}>Fast Track</span>
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#f8fafc", margin: "0 0 18px", letterSpacing: "-0.025em", lineHeight: 1.1 }}>H-1B Transfers</h1>
          <p style={{ fontSize: 17, color: "#99f6e4", lineHeight: 1.75, maxWidth: 580, margin: "0 0 32px" }}>
            Employer-to-employer H-1B transfer processing with streamlined documentation, rapid compliance alignment, and zero disruption to your work authorization.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#fff", color: "#0f766e", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            Get Started Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#0f766e", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0f766e" }}>Overview</span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: "0 0 16px", letterSpacing: "-0.02em" }}>What is an H-1B Transfer?</h2>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: "0 0 16px" }}>
              An H-1B transfer allows you to move your existing H-1B sponsorship from your current employer to BRB Data InfoTech without losing your work authorization or re-entering the H-1B lottery.
            </p>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: 0 }}>
              Thanks to H-1B portability rules, you can start working with us as soon as the transfer petition is filed — no waiting for approval.
            </p>
          </div>
          <div style={{ background: "#f0fdfa", borderRadius: 16, padding: "32px 28px", border: "1.5px solid #99f6e4" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0f766e", margin: "0 0 20px" }}>What&apos;s Included</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {benefits.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: "#ccfbf1", display: "flex", alignItems: "center", justifyContent: "center", color: "#0f766e", flexShrink: 0, marginTop: 1 }}><CheckIcon /></div>
                  <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f8fafc", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0f766e 0%, #34d399 50%, transparent 100%)" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#0f766e", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0f766e" }}>The Process</span>
              <div style={{ width: 28, height: 2, background: "#0f766e", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>How H-1B Transfer Works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "24px 20px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0f766e", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>0{i + 1}</span>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#0f766e", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0f766e" }}>FAQs</span>
              <div style={{ width: 28, height: 2, background: "#0f766e", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>Common Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "#f8fafc", borderRadius: 12, padding: "22px 24px", border: "1.5px solid #e2e8f0" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: "#475569", margin: 0, lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "linear-gradient(135deg, #134e4a 0%, #0f766e 60%, #34d399 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#f8fafc", margin: "0 0 14px", letterSpacing: "-0.02em" }}>Ready to Transfer?</h2>
          <p style={{ fontSize: 15, color: "rgba(204,251,241,0.85)", margin: "0 0 32px", lineHeight: 1.75 }}>
            Contact our team today to start your H-1B transfer process. We respond within one business day.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#fff", color: "#0f766e", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.20)" }}>
            Contact Us Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
