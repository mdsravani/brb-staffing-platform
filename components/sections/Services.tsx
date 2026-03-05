"use client";
import { useState, useEffect } from "react";

const enterpriseServices = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Specialized IT Talent Acquisition",
    desc: "End-to-end sourcing of pre-vetted IT professionals across software, cloud, data, and infrastructure domains.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Rapid Consultant Onboarding",
    desc: "Streamlined onboarding workflows that get qualified consultants productive from day one — minimizing project lag.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    title: "Flexible Engagement Structures",
    desc: "Contract, contract-to-hire, and direct placement models tailored to your project scope and timeline.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Compliance-Aligned Deployment",
    desc: "Full E-Verify, EEOC, and USCIS compliance baked into every placement — protecting your organization at every step.",
  },
];

const consultantServices = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Structured Career Placement",
    desc: "Personalized placement support that aligns your skills and goals with the right enterprise opportunities.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "H-1B Visa Sponsorship",
    desc: "Direct employer-of-record sponsorship — no third parties. We handle USCIS filing, documentation, and processing end-to-end.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Work Authorization Guidance",
    desc: "Expert support for OPT, STEM OPT, CPT, and Green Card transitions — keeping your status current at every stage.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: "Long-Term Engagement Support",
    desc: "Ongoing career management, project renewals, and re-placement support — we stay invested in your growth beyond day one.",
  },
];

const techDomains = [
  "Java / .NET", "Cloud & DevOps", "Data Engineering",
  "Salesforce", "SAP / ERP", "Cybersecurity",
  "Full Stack", "QA & Testing", "Business Analysis",
];

type ServiceItemProps = {
  icon: React.ReactElement;
  title: string;
  desc: string;
  accent: string;
  delay: number;
  mounted: boolean;
};

function ServiceItem({ icon, title, desc, accent, delay, mounted }: ServiceItemProps): React.ReactElement {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", gap: 16, padding: "20px 18px",
        borderRadius: 10,
        background: hovered ? (accent === "#1a56db" ? "#eff6ff" : "#f0fdf4") : "transparent",
        border: `1px solid ${hovered ? (accent === "#1a56db" ? "#bfdbfe" : "#bbf7d0") : "transparent"}`,
        transition: "all 0.2s ease",
        cursor: "default",
        animation: mounted ? `fadeUp 0.5s ease ${delay}s both` : "none",
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 8, flexShrink: 0,
        background: hovered ? accent : (accent === "#1a56db" ? "#eff6ff" : "#f0fdf4"),
        border: `1.5px solid ${accent === "#1a56db" ? "#bfdbfe" : "#bbf7d0"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? "#fff" : accent,
        transition: "all 0.2s ease",
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>{title}</p>
        <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.7 }}>{desc}</p>
      </div>
    </div>
  );
}

export default function Services(): React.ReactElement {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section style={{
      background: "#fff",
      padding: "88px 32px",
      fontFamily: "'Manrope', system-ui, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,700;1,9..144,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sh  { animation: ${mounted ? "fadeUp .5s ease 0s both"   : "none"}; }
        .ss  { animation: ${mounted ? "fadeUp .5s ease .1s both"  : "none"}; }
        .sc1 { animation: ${mounted ? "fadeUp .5s ease .2s both"  : "none"}; }
        .sc2 { animation: ${mounted ? "fadeUp .5s ease .28s both" : "none"}; }
        .sdom { animation: ${mounted ? "fadeUp .5s ease .55s both" : "none"}; }
        .domain-pill {
          font-size: 12px; font-weight: 600; color: #475569;
          background: #f8fafc; border: 1px solid #e2e8f0;
          padding: 6px 14px; border-radius: 20px;
          transition: all .18s; cursor: default;
        }
        .domain-pill:hover { background: #eff6ff; border-color: #bfdbfe; color: #1a56db; }
        .cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #1a56db; color: #fff;
          padding: 13px 26px; border-radius: 7px;
          font-size: 13.5px; font-weight: 700;
          text-decoration: none; border: none; cursor: pointer;
          font-family: inherit; transition: background .18s, transform .18s;
        }
        .cta-primary:hover { background: #1447c4; transform: translateY(-1px); }
        .cta-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #0f172a;
          padding: 12px 24px; border-radius: 7px;
          font-size: 13.5px; font-weight: 600;
          text-decoration: none; border: 1.5px solid #e2e8f0; cursor: pointer;
          font-family: inherit; transition: all .18s;
        }
        .cta-outline:hover { border-color: #1a56db; color: #1a56db; transform: translateY(-1px); }
      `}</style>

      {/* Faint background tint */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "40%", height: "100%",
        background: "linear-gradient(135deg, transparent 0%, #f8fafc 100%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative" }}>

        {/* ── Section header ── */}
        <div className="sh" style={{ textAlign: "center", marginBottom: 12 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 26, height: 1.5, background: "#cbd5e1", borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a56db" }}>
              What We Offer
            </span>
            <div style={{ width: 26, height: 1.5, background: "#cbd5e1", borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 700, color: "#0f172a",
            margin: "0 0 16px", letterSpacing: "-0.022em",
          }}>
            Workforce & Immigration Solutions
          </h2>
        </div>

        <div className="ss" style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
            Delivering specialized IT staffing and structured immigration support
            across high-demand technology sectors in the United States.
          </p>
        </div>

        {/* ── Two-column service cards ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 56 }}>

          {/* Enterprise card */}
          <div className="sc1" style={{
            background: "#fff",
            border: "1.5px solid #e2e8f0",
            borderRadius: 16,
            overflow: "hidden",
          }}>
            {/* Card header */}
            <div style={{
              padding: "24px 28px 20px",
              borderBottom: "1px solid #f1f5f9",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "#eff6ff", border: "1.5px solid #bfdbfe",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: 0 }}>For Enterprise Clients</p>
                <p style={{ fontSize: 12, color: "#94a3b8", margin: "2px 0 0", fontWeight: 500 }}>
                  Scalable IT workforce solutions
                </p>
              </div>
            </div>
            {/* Items */}
            <div style={{ padding: "12px 12px" }}>
              {enterpriseServices.map((s, i) => (
                <ServiceItem
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                  accent="#1a56db"
                  delay={0.25 + i * 0.07}
                  mounted={mounted}
                />
              ))}
            </div>
            {/* Footer CTA */}
            <div style={{ padding: "16px 28px 24px" }}>
              <a href="/contact" className="cta-primary">
                Request a Consultation
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Consultant card */}
          <div className="sc2" style={{
            background: "#fff",
            border: "1.5px solid #e2e8f0",
            borderRadius: 16,
            overflow: "hidden",
          }}>
            {/* Card header */}
            <div style={{
              padding: "24px 28px 20px",
              borderBottom: "1px solid #f1f5f9",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "#f0fdf4", border: "1.5px solid #bbf7d0",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: 0 }}>For IT Professionals</p>
                <p style={{ fontSize: 12, color: "#94a3b8", margin: "2px 0 0", fontWeight: 500 }}>
                  Career placement & visa sponsorship
                </p>
              </div>
            </div>
            {/* Items */}
            <div style={{ padding: "12px 12px" }}>
              {consultantServices.map((s, i) => (
                <ServiceItem
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                  accent="#059669"
                  delay={0.28 + i * 0.07}
                  mounted={mounted}
                />
              ))}
            </div>
            {/* Footer CTA */}
            <div style={{ padding: "16px 28px 24px" }}>
              <a href="/careers" className="cta-outline">
                Submit Your Resume
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ── Technology domains strip ── */}
        <div className="sdom" style={{
          background: "#f8fafc",
          border: "1.5px solid #e2e8f0",
          borderRadius: 14,
          padding: "28px 32px",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div style={{ flexShrink: 0 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", margin: "0 0 3px" }}>
                Technology Domains We Cover
              </p>
              <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>
                Across all major enterprise IT disciplines
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flex: 1, justifyContent: "flex-end" }}>
              {techDomains.map((d) => (
                <span key={d} className="domain-pill">{d}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
