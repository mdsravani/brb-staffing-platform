"use client";

import { useState } from "react";

// ── Icons ─────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function ServicesPage() {
  const [hoveredVisa, setHoveredVisa] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const visaCards = [
    {
      title: "H-1B Visa Sponsorship",
      desc: "Direct employer-based H-1B sponsorship with structured petition filing, documentation management, and compliance oversight.",
      tag: "Most Popular",
      tagColor: "#1d4ed8",
      tagBg: "#dbeafe",
      href: "/services/visa/h1b",
    },
    {
      title: "OPT / STEM OPT",
      desc: "E-Verify enrolled employer supporting 24-month STEM OPT extensions for eligible graduates in designated fields.",
      tag: "STEM",
      tagColor: "#0369a1",
      tagBg: "#e0f2fe",
      href: "/services/visa/opt",
    },
    {
      title: "H-1B Transfers",
      desc: "Employer-to-employer H-1B transfer processing with streamlined documentation and rapid compliance alignment.",
      tag: "Fast Track",
      tagColor: "#0f766e",
      tagBg: "#ccfbf1",
      href: "/services/visa/h1b-transfer",
    },
    {
      title: "CPT Programs",
      desc: "Curricular Practical Training placement support for international students seeking US work experience.",
      tag: "Students",
      tagColor: "#7c3aed",
      tagBg: "#ede9fe",
      href: "/services/visa/cpt",
    },
    {
      title: "TN-1 / TN-2 Visas",
      desc: "USMCA professional visas for Canadian and Mexican citizens seeking IT employment in the United States.",
      tag: "USMCA",
      tagColor: "#b45309",
      tagBg: "#fef3c7",
      href: "/services/visa/tn",
    },
    {
      title: "Green Card (EB-2 / EB-3)",
      desc: "PERM labor certification and permanent residency filing support for long-term career establishment.",
      tag: "Permanent",
      tagColor: "#065f46",
      tagBg: "#d1fae5",
      href: "/services/visa/green-card",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Talent Assessment",
      desc: "In-depth technical evaluation and skills mapping to ensure precise workforce alignment with enterprise needs.",
      stat: "48hr", statLabel: "Avg. turnaround",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    },
    {
      number: "02",
      title: "Client Alignment",
      desc: "Matching rigorously screened professionals with the exact technical and cultural requirements of your enterprise.",
      stat: "98%", statLabel: "Match accuracy",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
    {
      number: "03",
      title: "Immigration Processing",
      desc: "Full-service visa sponsorship and compliance documentation — H-1B, OPT, Green Card — handled with zero burden on your team.",
      stat: "100%", statLabel: "Compliance rate",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
    {
      number: "04",
      title: "Workforce Deployment",
      desc: "Structured onboarding, ongoing payroll, and long-term engagement support so your consultants hit the ground running.",
      stat: "500+", statLabel: "Deployed consultants",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    },
  ];

  const enterpriseItems = [
    "Specialized IT talent acquisition",
    "Rapid consultant onboarding",
    "Flexible workforce engagement models",
    "Immigration-compliant workforce deployment",
    "Long-term staffing partnerships",
  ];

  const professionalItems = [
    "Structured career placement support",
    "Visa sponsorship & immigration assistance",
    "Work authorization guidance",
    "H-1B transfers and OPT/STEM processing",
    "Long-term project engagement opportunities",
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
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#bfdbfe" }}>US-Based Staffing &amp; Immigration</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#f8fafc", margin: "0 0 20px", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
            IT Staffing &amp; Immigration<br />Solutions
          </h1>
          <p style={{ fontSize: 17, color: "#93c5fd", lineHeight: 1.75, maxWidth: 540, margin: "0 auto" }}>
            Delivering specialized IT staffing solutions with structured immigration and compliance support across the United States.
          </p>
        </div>
      </section>

      {/* ── FOR ENTERPRISE CLIENTS ───────────────────── */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1e3a5f" }}>Enterprise Solutions</span>
            </div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", margin: "0 0 20px", letterSpacing: "-0.02em" }}>For Enterprise Clients</h2>
            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, margin: "0 0 28px" }}>
              We partner with US enterprises to deliver immigration-ready IT talent, fast — with full compliance handled end to end.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {enterpriseItems.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", color: "#1d4ed8", flexShrink: 0, marginTop: 1 }}>
                    <CheckIcon />
                  </div>
                  <span style={{ fontSize: 14.5, color: "#374151", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 20, background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #1a4b8c 100%)", padding: "44px 36px", position: "relative", overflow: "hidden", minHeight: 320 }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.12), transparent)", pointerEvents: "none" }} />
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(191,219,254,0.8)", margin: "0 0 20px" }}>Enterprise Value</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["Faster Hiring", "Avg. 2-week placement"], ["Full Compliance", "I-9, E-Verify, documentation"], ["Flexible Models", "Contract, C2C, full-time"], ["Nationwide Coverage", "All 50 US states"]].map(([title, sub]) => (
                <div key={title} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#60a5fa", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9", margin: 0 }}>{title}</p>
                    <p style={{ fontSize: 11, color: "rgba(191,219,254,0.65)", margin: 0 }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR IT PROFESSIONALS ─────────────────────── */}
      <section style={{ padding: "88px 24px", background: "#f8fafc", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, #1e3a5f 30%, #2d6a9f 60%, transparent)" }} />
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ borderRadius: 20, background: "#fff", border: "1.5px solid #e2e8f0", padding: "36px 32px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#1e3a5f", margin: "0 0 20px" }}>Your Career Path</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[["Apply & Assessment", "Resume + technical screening", "#1d4ed8"], ["Visa Processing", "H-1B, OPT, or transfer filing", "#0369a1"], ["Client Matching", "Aligned with enterprise roles", "#1e3a5f"], ["Onboarding", "Start your US career journey", "#065f46"]].map(([title, sub, color], idx, arr) => (
                <div key={title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: "#fff" }}>{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    {idx < arr.length - 1 && <div style={{ width: 2, height: 28, background: "#e2e8f0", margin: "4px 0" }} />}
                  </div>
                  <div style={{ paddingTop: 6 }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: "0 0 2px" }}>{title}</p>
                    <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 12px" }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1e3a5f" }}>Consultant Support</span>
            </div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", margin: "0 0 20px", letterSpacing: "-0.02em" }}>For IT Professionals</h2>
            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.75, margin: "0 0 28px" }}>
              We support your career in the US — from visa sponsorship to long-term project placement with top enterprise clients.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {professionalItems.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", color: "#1d4ed8", flexShrink: 0, marginTop: 1 }}>
                    <CheckIcon />
                  </div>
                  <span style={{ fontSize: 14.5, color: "#374151", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISA SPONSORSHIP ─────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #1a4b8c 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -80, right: "5%", width: 500, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa", display: "inline-block" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#bfdbfe" }}>Immigration Services</span>
            </div>
            <h2 style={{ fontSize: 34, fontWeight: 800, color: "#f8fafc", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
              Visa Sponsorship &amp; Immigration Support
            </h2>
            <p style={{ fontSize: 15, color: "#93c5fd", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Comprehensive immigration services for IT professionals and enterprise workforce needs.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {visaCards.map((card, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredVisa(i)}
                onMouseLeave={() => setHoveredVisa(null)}
                style={{
                  borderRadius: 14, padding: "26px 24px",
                  background: hoveredVisa === i ? "#fff" : "rgba(255,255,255,0.95)",
                  border: hoveredVisa === i ? `1.5px solid ${card.tagColor}` : "1.5px solid rgba(255,255,255,0.9)",
                  boxShadow: hoveredVisa === i ? "0 16px 40px rgba(0,0,0,0.20)" : "0 4px 16px rgba(0,0,0,0.12)",
                  transition: "all 0.22s ease",
                  transform: hoveredVisa === i ? "translateY(-3px)" : "translateY(0)",
                  position: "relative", overflow: "hidden", cursor: "pointer",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: hoveredVisa === i ? card.tagColor : "transparent", transition: "all 0.22s", borderRadius: "14px 14px 0 0" }} />
                <div style={{ marginBottom: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: card.tagColor, background: card.tagBg, padding: "3px 8px", borderRadius: 20 }}>{card.tag}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 10px", lineHeight: 1.35 }}>{card.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.7 }}>{card.desc}</p>
                {hoveredVisa === i && (
                  <a
                    href={card.href}
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, color: card.tagColor, textDecoration: "none", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em" }}
                  >
                    Learn more <ArrowRight />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT PROCESS ───────────────────────── */}
      <section style={{ padding: "96px 24px", background: "#f8fafc", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #1e3a5f 0%, #2d6a9f 50%, transparent 100%)" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1e3a5f" }}>How It Works</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "end" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.15 }}>Our Engagement Process</h2>
              <p style={{ fontSize: 15, color: "#64748b", margin: 0, lineHeight: 1.75 }}>
                A streamlined four-step process that gets the right talent placed quickly and compliantly.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
            <div style={{ position: "absolute", top: 44, left: "12%", right: "12%", height: 2, background: "linear-gradient(90deg, #1e3a5f, #2d6a9f, #3b82f6)", zIndex: 0, borderRadius: 2 }} />
            {steps.map((step, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 12px", position: "relative", zIndex: 1, cursor: "default" }}
              >
                <div style={{
                  width: 88, height: 88, borderRadius: "50%",
                  background: hoveredStep === i ? "linear-gradient(135deg, #1e3a5f, #2d6a9f)" : "#fff",
                  border: hoveredStep === i ? "3px solid #1e3a5f" : "3px solid #e2e8f0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: hoveredStep === i ? "0 8px 28px rgba(30,58,95,0.30)" : "0 2px 12px rgba(0,0,0,0.08)",
                  transition: "all 0.25s ease",
                  color: hoveredStep === i ? "#fff" : "#1e3a5f",
                  marginBottom: 20, flexShrink: 0,
                }}>
                  {step.icon}
                </div>
                <div style={{
                  width: "100%", borderRadius: 14, padding: "22px 18px",
                  background: "#fff",
                  border: hoveredStep === i ? "1.5px solid #1e3a5f" : "1.5px solid #e2e8f0",
                  boxShadow: hoveredStep === i ? "0 12px 36px rgba(0,0,0,0.10)" : "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "all 0.25s ease",
                  transform: hoveredStep === i ? "translateY(-3px)" : "translateY(0)",
                  textAlign: "center",
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", color: hoveredStep === i ? "#1e3a5f" : "#cbd5e1", transition: "color 0.25s" }}>{step.number}</span>
                    <div style={{ width: 16, height: 1, background: hoveredStep === i ? "#1e3a5f" : "#e2e8f0", transition: "background 0.25s" }} />
                    <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", color: hoveredStep === i ? "#1e3a5f" : "#cbd5e1", transition: "color 0.25s" }}>STEP</span>
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: hoveredStep === i ? "#0f172a" : "#1e293b", margin: "0 0 8px", lineHeight: 1.3, transition: "color 0.25s" }}>{step.title}</h3>
                  <p style={{ fontSize: 12, color: "#64748b", margin: "0 0 14px", lineHeight: 1.65 }}>{step.desc}</p>
                  <div style={{
                    padding: "8px 12px", borderRadius: 8,
                    background: hoveredStep === i ? "rgba(30,58,95,0.07)" : "#f8fafc",
                    border: `1px solid ${hoveredStep === i ? "rgba(30,58,95,0.15)" : "#f1f5f9"}`,
                    transition: "all 0.25s",
                  }}>
                    <p style={{ fontSize: 18, fontWeight: 800, color: "#1e3a5f", margin: "0 0 1px", letterSpacing: "-0.02em" }}>{step.stat}</p>
                    <p style={{ fontSize: 10, color: "#94a3b8", margin: 0, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{step.statLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
