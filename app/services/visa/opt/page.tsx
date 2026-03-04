"use client";
import Link from "next/link";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const steps = [
  { title: "Eligibility Check", desc: "We verify your F-1 status, graduation date, and STEM field designation for OPT or STEM OPT." },
  { title: "E-Verify Enrollment", desc: "As an E-Verify enrolled employer, we complete the required employer enrollment for STEM OPT." },
  { title: "I-983 Training Plan", desc: "We prepare your training plan documenting learning objectives, supervision, and compensation." },
  { title: "DSO Reporting", desc: "We coordinate with your DSO and ensure all reporting requirements are met throughout your OPT." },
];

const benefits = [
  "E-Verify enrolled employer — STEM OPT eligible",
  "24-month STEM OPT extension support",
  "I-983 training plan preparation",
  "DSO coordination and reporting",
  "Pathway to H-1B sponsorship",
  "Dedicated support throughout OPT period",
];

const faqs = [
  { q: "What is OPT?", a: "Optional Practical Training (OPT) allows F-1 students to work in the US for up to 12 months in a job directly related to their field of study." },
  { q: "What is STEM OPT?", a: "STEM OPT extends OPT authorization by 24 months for students who graduated with a STEM degree and are working for an E-Verify employer." },
  { q: "Is BRB Data InfoTech E-Verify enrolled?", a: "Yes. We are a registered E-Verify employer, making us eligible to sponsor STEM OPT extensions for qualifying graduates." },
  { q: "Can I transition from OPT to H-1B?", a: "Yes — we actively sponsor H-1B petitions for OPT workers, making your transition to long-term work authorization seamless." },
];

export default function OPTPage() {
  return (
    <main className="w-full">
      <section style={{ padding: "80px 24px 72px", background: "linear-gradient(160deg, #0f172a 0%, #0c4a6e 55%, #0369a1 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -80, right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#7dd3fc", textDecoration: "none", marginBottom: 24, fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Services
          </Link>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e0f2fe", borderRadius: 100, padding: "4px 14px", marginBottom: 20, marginLeft: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0369a1" }}>STEM</span>
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#f8fafc", margin: "0 0 18px", letterSpacing: "-0.025em", lineHeight: 1.1 }}>OPT / STEM OPT</h1>
          <p style={{ fontSize: 17, color: "#7dd3fc", lineHeight: 1.75, maxWidth: 580, margin: "0 0 32px" }}>
            E-Verify enrolled employer supporting 24-month STEM OPT extensions for eligible graduates in designated STEM fields across the US.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#fff", color: "#0369a1", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            Get Started Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#0369a1", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0369a1" }}>Overview</span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: "0 0 16px", letterSpacing: "-0.02em" }}>What is OPT / STEM OPT?</h2>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: "0 0 16px" }}>
              Optional Practical Training (OPT) allows F-1 international students to work in the US for up to 12 months after graduation. STEM OPT extends this by an additional 24 months for qualifying graduates in Science, Technology, Engineering, and Mathematics fields.
            </p>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: 0 }}>
              BRB Data InfoTech is a registered E-Verify employer, making us a qualified sponsor for both standard OPT and STEM OPT extensions.
            </p>
          </div>
          <div style={{ background: "#f0f9ff", borderRadius: 16, padding: "32px 28px", border: "1.5px solid #bae6fd" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0369a1", margin: "0 0 20px" }}>What&apos;s Included</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {benefits.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: "#e0f2fe", display: "flex", alignItems: "center", justifyContent: "center", color: "#0369a1", flexShrink: 0, marginTop: 1 }}><CheckIcon /></div>
                  <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f8fafc", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0369a1 0%, #38bdf8 50%, transparent 100%)" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#0369a1", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0369a1" }}>The Process</span>
              <div style={{ width: 28, height: 2, background: "#0369a1", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>How OPT / STEM OPT Works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "24px 20px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#0369a1", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
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
              <div style={{ width: 28, height: 2, background: "#0369a1", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0369a1" }}>FAQs</span>
              <div style={{ width: 28, height: 2, background: "#0369a1", borderRadius: 2 }} />
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

      <section style={{ padding: "72px 24px", background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 60%, #38bdf8 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#f8fafc", margin: "0 0 14px", letterSpacing: "-0.02em" }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 15, color: "rgba(224,242,254,0.85)", margin: "0 0 32px", lineHeight: 1.75 }}>
            Contact our team today to discuss your OPT or STEM OPT eligibility. We respond within one business day.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#fff", color: "#0369a1", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.20)" }}>
            Contact Us Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
