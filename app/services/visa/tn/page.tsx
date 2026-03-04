"use client";
import Link from "next/link";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const steps = [
  { title: "Eligibility Review", desc: "We confirm your citizenship (Canadian or Mexican), profession, and job offer qualify under USMCA." },
  { title: "Offer Letter Preparation", desc: "We prepare a detailed job offer letter meeting all TN requirements for your profession." },
  { title: "Entry Documentation", desc: "Canadians apply at the border; Mexicans apply at a US consulate. We prepare all required docs." },
  { title: "Renewal Support", desc: "TN status is granted in 3-year increments. We handle all renewals and extensions proactively." },
];

const benefits = [
  "No annual cap or lottery — apply any time",
  "Quick processing — often same-day for Canadians",
  "3-year initial period with unlimited renewals",
  "Covers 60+ USMCA-listed professions",
  "Dependents eligible for TD visa",
  "Dedicated support for each renewal cycle",
];

const faqs = [
  { q: "Who qualifies for a TN visa?", a: "Canadian and Mexican citizens working in USMCA-listed professional occupations such as engineers, accountants, scientists, and IT professionals." },
  { q: "How quickly can I get TN status?", a: "Canadian citizens can often obtain TN status at the US port of entry the same day. Mexican citizens must apply at a US consulate in advance." },
  { q: "Is there a TN visa cap?", a: "No. Unlike the H-1B, TN visas are not subject to annual caps or lotteries — you can apply at any time of year." },
  { q: "Can TN lead to a Green Card?", a: "TN is a non-immigrant visa and does not directly lead to a Green Card, but we can discuss parallel EB-2/EB-3 pathways for qualifying candidates." },
];

export default function TNPage() {
  return (
    <main className="w-full">
      <section style={{ padding: "80px 24px 72px", background: "linear-gradient(160deg, #0f172a 0%, #431407 55%, #b45309 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#fcd34d", textDecoration: "none", marginBottom: 24, fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Services
          </Link>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fef3c7", borderRadius: 100, padding: "4px 14px", marginBottom: 20, marginLeft: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#b45309" }}>USMCA</span>
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#f8fafc", margin: "0 0 18px", letterSpacing: "-0.025em", lineHeight: 1.1 }}>TN-1 / TN-2 Visas</h1>
          <p style={{ fontSize: 17, color: "#fcd34d", lineHeight: 1.75, maxWidth: 580, margin: "0 0 32px" }}>
            USMCA professional visas for Canadian and Mexican citizens seeking IT employment in the United States — no cap, no lottery, fast processing.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#fff", color: "#b45309", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            Get Started Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#b45309", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b45309" }}>Overview</span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: "0 0 16px", letterSpacing: "-0.02em" }}>What is a TN Visa?</h2>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: "0 0 16px" }}>
              The TN visa allows Canadian (TN-1) and Mexican (TN-2) professionals to work in the US under the United States-Mexico-Canada Agreement (USMCA) in designated professional occupations including IT, engineering, and management consulting.
            </p>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: 0 }}>
              Unlike the H-1B, TN visas have no annual cap and can be obtained quickly — sometimes the same day for Canadian citizens at the US border.
            </p>
          </div>
          <div style={{ background: "#fffbeb", borderRadius: 16, padding: "32px 28px", border: "1.5px solid #fde68a" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b45309", margin: "0 0 20px" }}>What&apos;s Included</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {benefits.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", color: "#b45309", flexShrink: 0, marginTop: 1 }}><CheckIcon /></div>
                  <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f8fafc", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #b45309 0%, #f59e0b 50%, transparent 100%)" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#b45309", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b45309" }}>The Process</span>
              <div style={{ width: 28, height: 2, background: "#b45309", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>How TN Visa Works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "24px 20px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#b45309", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
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
              <div style={{ width: 28, height: 2, background: "#b45309", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b45309" }}>FAQs</span>
              <div style={{ width: 28, height: 2, background: "#b45309", borderRadius: 2 }} />
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

      <section style={{ padding: "72px 24px", background: "linear-gradient(135deg, #431407 0%, #b45309 60%, #f59e0b 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#f8fafc", margin: "0 0 14px", letterSpacing: "-0.02em" }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 15, color: "rgba(254,243,199,0.85)", margin: "0 0 32px", lineHeight: 1.75 }}>
            Contact our team today to discuss your TN visa eligibility. We respond within one business day.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#fff", color: "#b45309", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.20)" }}>
            Contact Us Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
