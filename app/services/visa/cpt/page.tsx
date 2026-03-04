"use client";
import Link from "next/link";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const cptSteps = [
  { title: "Enrollment Verification", desc: "We verify your F-1 status and confirm CPT eligibility with your Designated School Official (DSO)." },
  { title: "Job Offer Letter", desc: "We provide a formal offer letter detailing role, hours, and compensation for your CPT authorization." },
  { title: "DSO Authorization", desc: "Your DSO authorizes CPT on your I-20 based on our offer letter and program requirements." },
  { title: "Placement & Support", desc: "We place you with a matching enterprise client and provide ongoing support throughout your CPT." },
];

const cptBenefits = [
  "Formal job offer letter for DSO authorization",
  "Part-time and full-time CPT options",
  "Placement with top enterprise clients",
  "Hands-on IT project experience",
  "Pathway to OPT and H-1B sponsorship",
  "Dedicated support throughout engagement",
];

const cptFaqs = [
  { q: "What is CPT?", a: "Curricular Practical Training (CPT) allows F-1 students to work in a paid internship or co-op that is an integral part of their curriculum, authorized before graduation." },
  { q: "How do I get CPT authorized?", a: "Your DSO authorizes CPT on your I-20. BRB Data InfoTech provides the required job offer letter to initiate the process." },
  { q: "Can I work full-time on CPT?", a: "Yes, but more than 12 months of full-time CPT makes you ineligible for OPT. We help you plan accordingly." },
  { q: "Does CPT lead to H-1B sponsorship?", a: "CPT itself does not, but we actively sponsor qualifying candidates for OPT and H-1B after graduation." },
];

export function CPTPage() {
  return (
    <main className="w-full">
      <section style={{ padding: "80px 24px 72px", background: "linear-gradient(160deg, #0f172a 0%, #3b0764 55%, #7c3aed 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#c4b5fd", textDecoration: "none", marginBottom: 24, fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Services
          </Link>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#ede9fe", borderRadius: 100, padding: "4px 14px", marginBottom: 20, marginLeft: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>Students</span>
          </div>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#f8fafc", margin: "0 0 18px", letterSpacing: "-0.025em", lineHeight: 1.1 }}>CPT Programs</h1>
          <p style={{ fontSize: 17, color: "#c4b5fd", lineHeight: 1.75, maxWidth: 580, margin: "0 0 32px" }}>
            Curricular Practical Training placement support for international students seeking real-world US IT experience as part of their academic program.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#fff", color: "#7c3aed", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            Get Started Today
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#7c3aed", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7c3aed" }}>Overview</span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: "0 0 16px", letterSpacing: "-0.02em" }}>What is CPT?</h2>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: "0 0 16px" }}>
              Curricular Practical Training allows F-1 international students to gain paid work experience in their field before graduation, as an integral part of their academic curriculum.
            </p>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: 0 }}>
              BRB Data InfoTech provides formal job offers and enterprise placements to support your CPT authorization, giving you real US IT career experience.
            </p>
          </div>
          <div style={{ background: "#faf5ff", borderRadius: 16, padding: "32px 28px", border: "1.5px solid #ddd6fe" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7c3aed", margin: "0 0 20px" }}>What&apos;s Included</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {cptBenefits.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", color: "#7c3aed", flexShrink: 0, marginTop: 1 }}><CheckIcon /></div>
                  <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f8fafc", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #7c3aed 0%, #a78bfa 50%, transparent 100%)" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#7c3aed", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7c3aed" }}>The Process</span>
              <div style={{ width: 28, height: 2, background: "#7c3aed", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>How CPT Works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {cptSteps.map((step, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "24px 20px", border: "1.5px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#7c3aed", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
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
              <div style={{ width: 28, height: 2, background: "#7c3aed", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#7c3aed" }}>FAQs</span>
              <div style={{ width: 28, height: 2, background: "#7c3aed", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>Common Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {cptFaqs.map((faq, i) => (
              <div key={i} style={{ background: "#f8fafc", borderRadius: 12, padding: "22px 24px", border: "1.5px solid #e2e8f0" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: "#475569", margin: 0, lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "linear-gradient(135deg, #3b0764 0%, #7c3aed 60%, #a78bfa 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#f8fafc", margin: "0 0 14px", letterSpacing: "-0.02em" }}>Ready to Get Started?</h2>
          <p style={{ fontSize: 15, color: "rgba(237,233,254,0.85)", margin: "0 0 32px", lineHeight: 1.75 }}>
            Contact our team today to discuss your CPT placement. We respond within one business day.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#fff", color: "#7c3aed", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.20)" }}>
            Contact Us Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default CPTPage;
