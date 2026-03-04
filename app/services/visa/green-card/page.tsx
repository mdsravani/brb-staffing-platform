"use client";
import Link from "next/link";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const steps = [
  { title: "PERM Labor Certification", desc: "We conduct the required recruitment process and file the PERM application with the Department of Labor." },
  { title: "I-140 Petition", desc: "Once PERM is certified, we file the Immigrant Petition for Alien Workers (I-140) with USCIS." },
  { title: "Priority Date & Waiting", desc: "We monitor your priority date and advise you when a visa number becomes available based on your country." },
  { title: "Adjustment of Status", desc: "Once your priority date is current, we help you file Form I-485 to adjust to permanent resident status." },
];

const benefits = [
  "PERM labor certification filing support",
  "I-140 immigrant petition preparation",
  "Priority date monitoring and guidance",
  "I-485 adjustment of status assistance",
  "EAD and Advance Parole during processing",
  "Dedicated immigration attorney coordination",
];

const faqs = [
  { q: "What is an EB-2 vs EB-3 Green Card?", a: "EB-2 is for professionals with advanced degrees or exceptional ability. EB-3 is for skilled workers with a bachelor's degree. BRB Data InfoTech supports both categories for IT professionals." },
  { q: "How long does the Green Card process take?", a: "The timeline varies significantly by country of birth. For some countries (like India), the wait can be many years due to per-country limits. We help you plan and manage the process realistically." },
  { q: "Can I change jobs during the Green Card process?", a: "After the I-140 is approved and your priority date is within 180 days of filing I-485, you may be able to port your Green Card to a similar job under AC21 provisions." },
  { q: "Do I need to maintain H-1B status during the process?", a: "Yes, typically. We help ensure your H-1B remains valid throughout the Green Card process so there is no gap in work authorization." },
];

export default function GreenCardPage() {
  return (
    <main className="w-full">
      <section style={{ padding: "80px 24px 72px", background: "linear-gradient(160deg, #0f172a 0%, #064e3b 55%, #065f46 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6ee7b7", textDecoration: "none", marginBottom: 24, fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Services
          </Link>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#d1fae5", borderRadius: 100, padding: "4px 14px", marginBottom: 20, marginLeft: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#065f46" }}>Permanent</span>
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#f8fafc", margin: "0 0 18px", letterSpacing: "-0.025em", lineHeight: 1.1 }}>Green Card (EB-2 / EB-3)</h1>
          <p style={{ fontSize: 17, color: "#6ee7b7", lineHeight: 1.75, maxWidth: 580, margin: "0 0 32px" }}>
            PERM labor certification and permanent residency filing support for IT professionals seeking long-term career establishment in the United States.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#fff", color: "#065f46", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            Get Started Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#065f46", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#065f46" }}>Overview</span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: "0 0 16px", letterSpacing: "-0.02em" }}>What is an EB Green Card?</h2>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: "0 0 16px" }}>
              Employment-Based Green Cards (EB-2 and EB-3) offer a path to permanent residency for skilled IT professionals sponsored by a US employer through the PERM labor certification process.
            </p>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: 0 }}>
              BRB Data InfoTech supports the entire process — from PERM recruitment and filing, through I-140 petition, to Adjustment of Status — with expert guidance at every stage.
            </p>
          </div>
          <div style={{ background: "#f0fdf4", borderRadius: 16, padding: "32px 28px", border: "1.5px solid #bbf7d0" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#065f46", margin: "0 0 20px" }}>What&apos;s Included</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {benefits.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center", color: "#065f46", flexShrink: 0, marginTop: 1 }}><CheckIcon /></div>
                  <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f8fafc", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #065f46 0%, #34d399 50%, transparent 100%)" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#065f46", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#065f46" }}>The Process</span>
              <div style={{ width: 28, height: 2, background: "#065f46", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>How Green Card Sponsorship Works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "24px 20px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#065f46", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
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
              <div style={{ width: 28, height: 2, background: "#065f46", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#065f46" }}>FAQs</span>
              <div style={{ width: 28, height: 2, background: "#065f46", borderRadius: 2 }} />
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

      <section style={{ padding: "72px 24px", background: "linear-gradient(135deg, #064e3b 0%, #065f46 60%, #34d399 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#f8fafc", margin: "0 0 14px", letterSpacing: "-0.02em" }}>Ready to Start Your Green Card Journey?</h2>
          <p style={{ fontSize: 15, color: "rgba(209,250,229,0.85)", margin: "0 0 32px", lineHeight: 1.75 }}>
            Contact our team today to discuss your EB-2 or EB-3 eligibility. We respond within one business day.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#fff", color: "#065f46", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.20)" }}>
            Contact Us Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
