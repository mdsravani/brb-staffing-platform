"use client";

import { useState } from "react";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function CompliancePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredFramework, setHoveredFramework] = useState<number | null>(null);

  const everifyBadges = [
    { label: "DHS Authorized E-Verify Participant", icon: "🏛️" },
    { label: "I-9 Employment Verification", icon: "📋" },
    { label: "STEM OPT 24-Month Extension Eligible", icon: "🎓" },
    { label: "USCIS Process Alignment", icon: "✅" },
  ];

  const workAuthCards = [
    {
      title: "H-1B Sponsorship",
      desc: "We act as the direct employer of record for all H-1B petitions — handling USCIS filings, LCA compliance, and documentation end to end.",
      accent: "#1d4ed8",
      bg: "#eff6ff",
      border: "#bfdbfe",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
    {
      title: "OPT & STEM OPT",
      desc: "As an E-Verify enrolled employer, we support both standard OPT and 24-month STEM OPT extensions for eligible F-1 graduates.",
      accent: "#0369a1",
      bg: "#f0f9ff",
      border: "#bae6fd",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    },
    {
      title: "H-1B Transfers",
      desc: "Employer-to-employer transfers processed with full portability — workers can begin with us as soon as the petition is filed.",
      accent: "#0f766e",
      bg: "#f0fdfa",
      border: "#99f6e4",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
    },
    {
      title: "Green Card (EB-2 / EB-3)",
      desc: "We support PERM labor certification and permanent residency filings for long-term IT professionals seeking to establish careers in the US.",
      accent: "#065f46",
      bg: "#f0fdf4",
      border: "#bbf7d0",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
    },
  ];

  const frameworkItems = [
    {
      number: "01",
      title: "Employment Eligibility Verification",
      desc: "Every hire goes through Form I-9 verification and E-Verify confirmation before onboarding — no exceptions.",
      items: ["Form I-9 completed within 3 days", "E-Verify case submitted same day", "Physical document inspection"],
    },
    {
      number: "02",
      title: "Immigration Documentation Management",
      desc: "We maintain complete, audit-ready immigration files for every sponsored employee throughout their engagement.",
      items: ["Petition copies and approvals on file", "Status tracking and expiry alerts", "Proactive renewal management"],
    },
    {
      number: "03",
      title: "Regulatory Recordkeeping",
      desc: "Our recordkeeping practices meet federal workforce standards with structured retention policies and audit support.",
      items: ["3-year I-9 retention compliance", "LCA public access file maintenance", "Payroll and benefits documentation"],
    },
    {
      number: "04",
      title: "Structured Onboarding Process",
      desc: "Every consultant goes through a compliance-first onboarding to ensure alignment before their first day on-site.",
      items: ["Background verification", "Tax and payroll setup", "Client NDA and policy alignment"],
    },
  ];

  return (
    <main className="w-full">

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ padding: "88px 24px 80px", background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #1a4b8c 100%)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -80, right: "10%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 100, padding: "5px 16px", marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#bfdbfe" }}>Fully Compliant &amp; E-Verify Enrolled</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#f8fafc", margin: "0 0 20px", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
            Compliance &amp; Immigration<br />Standards
          </h1>
          <p style={{ fontSize: 17, color: "#93c5fd", lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
            Maintaining rigorous employment verification, immigration alignment, and workforce compliance standards across all engagements.
          </p>
        </div>
      </section>

      {/* ── E-VERIFY SECTION ─────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1e3a5f" }}>E-Verify</span>
              </div>
              <h2 style={{ fontSize: 30, fontWeight: 800, color: "#0f172a", margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                BRB Data InfoTech Is an E-Verify Participating Company
              </h2>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: "0 0 28px" }}>
                We are enrolled in the E-Verify program administered by the U.S. Department of Homeland Security (DHS) and the Social Security Administration (SSA) to confirm employment authorization for our entire workforce.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {everifyBadges.map((b) => (
                  <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", color: "#1d4ed8", flexShrink: 0 }}>
                      <CheckIcon />
                    </div>
                    <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* E-Verify visual card */}
            <div style={{ borderRadius: 20, background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #1a4b8c 100%)", padding: "44px 36px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.12), transparent)", pointerEvents: "none" }} />

              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.25)", borderRadius: 100, padding: "5px 14px", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#86efac" }}>Active Enrollment</span>
              </div>

              <p style={{ fontSize: 28, fontWeight: 800, color: "#f8fafc", margin: "0 0 6px", letterSpacing: "-0.02em" }}>E-Verify</p>
              <p style={{ fontSize: 13, color: "rgba(191,219,254,0.7)", margin: "0 0 28px" }}>U.S. Department of Homeland Security</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[["Program", "E-Verify Employer"], ["Authority", "DHS + SSA"], ["Coverage", "All US workforce"], ["STEM OPT", "24-month eligible"]].map(([label, value]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 8 }}>
                    <span style={{ fontSize: 12, color: "rgba(191,219,254,0.65)", fontWeight: 500 }}>{label}</span>
                    <span style={{ fontSize: 13, color: "#f1f5f9", fontWeight: 700 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMMIGRATION & WORK AUTHORIZATION ─────────── */}
      <section style={{ padding: "88px 24px", background: "#f8fafc", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #1e3a5f 0%, #2d6a9f 50%, transparent 100%)" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>

          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1e3a5f" }}>Work Authorization</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "end" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                Immigration &amp; Work Authorization
              </h2>
              <p style={{ fontSize: 15, color: "#64748b", margin: 0, lineHeight: 1.75 }}>
                We directly sponsor and manage all immigration categories — acting as the employer of record with full legal accountability.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {workAuthCards.map((card, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderRadius: 14, padding: "28px 26px", background: "#fff",
                  border: hoveredCard === i ? `1.5px solid ${card.accent}` : "1.5px solid #e2e8f0",
                  boxShadow: hoveredCard === i ? "0 10px 32px rgba(0,0,0,0.10)" : "0 1px 6px rgba(0,0,0,0.04)",
                  transition: "all 0.22s ease",
                  transform: hoveredCard === i ? "translateY(-3px)" : "translateY(0)",
                  position: "relative", overflow: "hidden", cursor: "default",
                }}
              >
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: hoveredCard === i ? card.accent : "transparent", borderRadius: "14px 0 0 14px", transition: "all 0.22s" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: hoveredCard === i ? card.bg : "#f8fafc", border: `1px solid ${hoveredCard === i ? card.border : "#f1f5f9"}`, display: "flex", alignItems: "center", justifyContent: "center", color: hoveredCard === i ? card.accent : "#94a3b8", transition: "all 0.22s", flexShrink: 0 }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: hoveredCard === i ? "#0f172a" : "#1e293b", margin: 0, transition: "color 0.22s" }}>{card.title}</h3>
                </div>
                <p style={{ fontSize: 13.5, color: "#64748b", margin: 0, lineHeight: 1.75 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFORCE COMPLIANCE FRAMEWORK ───────────── */}
      <section style={{ padding: "88px 24px", background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #1a4b8c 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -80, right: "5%", width: 500, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa", display: "inline-block" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#bfdbfe" }}>Our Framework</span>
            </div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#f8fafc", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
              Workforce Compliance Framework
            </h2>
            <p style={{ fontSize: 15, color: "#93c5fd", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              A structured four-pillar framework that meets enterprise and federal workforce compliance standards.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {frameworkItems.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredFramework(i)}
                onMouseLeave={() => setHoveredFramework(null)}
                style={{
                  borderRadius: 16, padding: "30px 28px",
                  background: hoveredFramework === i ? "#fff" : "rgba(255,255,255,0.95)",
                  border: hoveredFramework === i ? "1.5px solid #1e3a5f" : "1.5px solid rgba(255,255,255,0.9)",
                  boxShadow: hoveredFramework === i ? "0 16px 40px rgba(0,0,0,0.20)" : "0 4px 16px rgba(0,0,0,0.12)",
                  transition: "all 0.22s ease",
                  transform: hoveredFramework === i ? "translateY(-3px)" : "translateY(0)",
                  position: "relative", overflow: "hidden", cursor: "default",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: hoveredFramework === i ? "linear-gradient(90deg, #1e3a5f, #2d6a9f)" : "transparent", transition: "all 0.22s", borderRadius: "16px 16px 0 0" }} />

                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: hoveredFramework === i ? "#1e3a5f" : "#cbd5e1", transition: "color 0.22s" }}>{item.number}</span>
                  <div style={{ width: 20, height: 1, background: hoveredFramework === i ? "#1e3a5f" : "#e2e8f0", transition: "background 0.22s" }} />
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: "0 0 10px", lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: 13.5, color: "#64748b", margin: "0 0 16px", lineHeight: 1.7 }}>{item.desc}</p>

                <div style={{ height: 1, background: "#f1f5f9", margin: "0 0 14px" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {item.items.map((point) => (
                    <div key={point} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 18, height: 18, borderRadius: 5, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", color: "#1d4ed8", flexShrink: 0 }}>
                        <CheckIcon />
                      </div>
                      <span style={{ fontSize: 12.5, color: "#475569" }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #2d6a9f 100%)", padding: "56px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent)", pointerEvents: "none" }} />
            <h2 style={{ fontSize: 30, fontWeight: 800, color: "#f8fafc", margin: "0 0 14px", letterSpacing: "-0.02em" }}>
              Questions About Our Compliance Standards?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(191,219,254,0.85)", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.8 }}>
              Our team is ready to walk you through our verification processes and immigration compliance framework.
            </p>
            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#fff", color: "#1e3a5f", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.20)" }}>
              Contact Our Team
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
