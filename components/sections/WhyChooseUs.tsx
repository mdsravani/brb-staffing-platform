"use client";
import React, { useState, useEffect } from "react";

type Point = {
  number: string;
  title: string;
  desc: string;
  accent: string;
  bg: string;
  border: string;
  stat: string;
  statLabel: string;
  icon: React.ReactElement;
};

type Credential = {
  icon: string;
  label: string;
  sub: string;
};

type PointCardProps = {
  point: Point;
  index: number;
  mounted: boolean;
};

const points: Point[] = [
  {
    number: "01",
    title: "Specialized IT Talent Acquisition",
    desc: "Strategic sourcing and placement of highly skilled IT professionals across enterprise environments — pre-vetted, compliance-ready, and deployment-fast.",
    accent: "#1a56db", bg: "#eff6ff", border: "#bfdbfe",
    stat: "500+", statLabel: "Consultants Placed",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Comprehensive Visa Sponsorship",
    desc: "Structured immigration support including H-1B, OPT/STEM, TN, and permanent residency — handled entirely in-house, with no third-party vendors.",
    accent: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe",
    stat: "Direct", statLabel: "H-1B Sponsorship",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "E-Verify & Compliance Commitment",
    desc: "Full employment verification and regulatory alignment — USCIS authorized, EEOC compliant, and E-Verify certified on every single placement.",
    accent: "#059669", bg: "#f0fdf4", border: "#bbf7d0",
    stat: "100%", statLabel: "E-Verify Compliant",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Long-Term Workforce Partnerships",
    desc: "Sustainable engagement models built for longevity — serving both Fortune 500 enterprises and individual consultants with consistent, accountable support.",
    accent: "#d97706", bg: "#fffbeb", border: "#fde68a",
    stat: "50+", statLabel: "Enterprise Clients",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

const credentials: Credential[] = [
  { icon: "🛡️", label: "E-Verify Certified",    sub: "Federal employer standard" },
  { icon: "⚖️", label: "EEOC Compliant",         sub: "Equal opportunity employer" },
  { icon: "🇺🇸", label: "USCIS Authorized",       sub: "H-1B sponsorship support" },
  { icon: "🤝", label: "Direct Employer Model", sub: "In-house hiring and sponsorship" }
];

function PointCard({ point, index, mounted }: PointCardProps): React.ReactElement {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? point.bg : "#fff",
        border: `1.5px solid ${hovered ? point.border : "#e8edf3"}`,
        borderRadius: 16,
        padding: "30px 26px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "all 0.22s ease",
        boxShadow: hovered ? `0 16px 40px ${point.accent}14` : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        animation: mounted ? `fadeUp 0.55s ease ${0.08 + index * 0.1}s both` : "none",
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: point.accent,
        borderRadius: "16px 16px 0 0",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.22s",
      }} />

      {/* Number + stat */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: point.accent, opacity: 0.5 }}>
          {point.number}
        </span>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 24, fontWeight: 800, color: point.accent, margin: 0, lineHeight: 1, letterSpacing: "-0.03em", fontFamily: "'Fraunces', serif" }}>
            {point.stat}
          </p>
          <p style={{ fontSize: 10, color: "#94a3b8", margin: "3px 0 0", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
            {point.statLabel}
          </p>
        </div>
      </div>

      {/* Icon */}
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: hovered ? point.accent : point.bg,
        border: `1.5px solid ${point.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? "#fff" : point.accent,
        marginBottom: 18,
        transition: "all 0.22s ease",
      }}>
        {point.icon}
      </div>

      <h3 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 17, fontWeight: 700,
        color: hovered ? point.accent : "#0f172a",
        margin: "0 0 10px",
        lineHeight: 1.25, letterSpacing: "-0.01em",
        transition: "color 0.22s",
      }}>
        {point.title}
      </h3>
      <p style={{ fontSize: 13.5, color: "#64748b", margin: 0, lineHeight: 1.75 }}>
        {point.desc}
      </p>
    </div>
  );
}

export default function WhyChooseUs(): React.ReactElement {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section style={{
      background: "#f8fafc",
      padding: "88px 32px",
      fontFamily: "'Manrope', system-ui, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,700;1,9..144,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wh  { animation: ${mounted ? "fadeUp .55s ease 0s both"   : "none"}; }
        .ws  { animation: ${mounted ? "fadeUp .55s ease .1s both"  : "none"}; }
        .wcr { animation: ${mounted ? "fadeUp .55s ease .55s both" : "none"}; }
        .wb  { animation: ${mounted ? "fadeUp .55s ease .7s both"  : "none"}; }
        .cta-dark {
          display: inline-flex; align-items: center; gap: 8px;
          background: #0f172a; color: #fff;
          padding: 13px 28px; border-radius: 7px;
          font-size: 13.5px; font-weight: 700;
          border: none; cursor: pointer; font-family: inherit;
          text-decoration: none; transition: background .18s, transform .18s;
        }
        .cta-dark:hover { background: #1e293b; transform: translateY(-1px); }
        .cta-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #0f172a;
          padding: 12px 24px; border-radius: 7px;
          font-size: 13.5px; font-weight: 600;
          border: 1.5px solid #e2e8f0; cursor: pointer;
          font-family: inherit; text-decoration: none; transition: all .18s;
        }
        .cta-outline:hover { border-color: #1a56db; color: #1a56db; transform: translateY(-1px); }
      `}</style>

      {/* Dot texture — consistent with all other pages */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(#d1d9e6 1px, transparent 1px)",
        backgroundSize: "28px 28px", opacity: 0.38,
      }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div className="wh" style={{ textAlign: "center", marginBottom: 12 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 26, height: 1.5, background: "#cbd5e1", borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a56db" }}>
              Our Advantage
            </span>
            <div style={{ width: 26, height: 1.5, background: "#cbd5e1", borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(26px, 3.5vw, 42px)",
            fontWeight: 700, color: "#0f172a",
            margin: 0, letterSpacing: "-0.025em", lineHeight: 1.1,
          }}>
            Why Choose{" "}
            <span style={{ color: "#1a56db", fontStyle: "italic" }}>BRB Data InfoTech</span>
          </h2>
        </div>

        <div className="ws" style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 15.5, color: "#64748b", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.8 }}>
            Delivering IT staffing and immigration-enabled workforce solutions with
            enterprise-grade professionalism and compliance standards.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18, marginBottom: 18 }}>
          {points.map((p, i) => (
            <PointCard key={p.title} point={p} index={i} mounted={mounted} />
          ))}
        </div>

        {/* Credentials strip */}
        <div className="wcr" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 18 }}>
          {credentials.map((c) => (
            <div key={c.label} style={{
              background: "#fff",
              border: "1.5px solid #e8edf3",
              borderRadius: 12, padding: "16px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <p style={{ fontSize: 12.5, fontWeight: 700, color: "#0f172a", margin: 0 }}>{c.label}</p>
                <p style={{ fontSize: 11, color: "#94a3b8", margin: "2px 0 0", fontWeight: 500 }}>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="wb" style={{
          background: "#fff",
          border: "1.5px solid #e2e8f0",
          borderRadius: 14, padding: "26px 32px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 18,
        }}>
          <div>
            <p style={{ fontSize: 15.5, fontWeight: 700, color: "#0f172a", margin: "0 0 5px", fontFamily: "'Fraunces', serif" }}>
              Ready to build your next IT team?
            </p>
            <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
              From single placements to full enterprise workforce programs — we deliver.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/contact" className="cta-dark">
              Get in Touch
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="/services" className="cta-outline">View Our Services</a>
          </div>
        </div>

      </div>
    </section>
  );
}
