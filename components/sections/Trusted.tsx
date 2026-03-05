"use client";
import React, { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Partner = {
  name: string;
  category: string;
  accent: string;
  Logo: () => React.ReactElement;
};

type PartnerCardProps = {
  partner: Partner;
  index: number;
  mounted: boolean;
};

// ─── Inline SVG logos — zero external dependencies, always render ─────────────
const LogoInsightGlobal = (): React.ReactElement => (
  <svg viewBox="0 0 160 40" height="32" style={{ display: "block" }}>
    <circle cx="16" cy="20" r="14" fill="#2563EB" />
    <circle cx="16" cy="20" r="8" fill="none" stroke="#fff" strokeWidth="2.5" />
    <circle cx="16" cy="20" r="3" fill="#fff" />
    <text x="36" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" fill="#2563EB">Insight Global</text>
  </svg>
);

const LogoRandstad = (): React.ReactElement => (
  <svg viewBox="0 0 120 40" height="32" style={{ display: "block" }}>
    <rect x="0" y="8" width="24" height="24" rx="4" fill="#CA0034" />
    <text x="4" y="27" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="19" fill="#fff">R</text>
    <text x="30" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" fill="#1a1a1a">randstad</text>
  </svg>
);

const LogoGenpact = (): React.ReactElement => (
  <svg viewBox="0 0 120 40" height="32" style={{ display: "block" }}>
    <path d="M20 6 L34 14 L34 26 L20 34 L6 26 L6 14 Z" fill="#00A651" />
    <text x="8" y="25" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="14" fill="#fff">G</text>
    <text x="40" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" fill="#1a1a1a">Genpact</text>
  </svg>
);

const LogoKesit = (): React.ReactElement => (
  <svg viewBox="0 0 100 40" height="32" style={{ display: "block" }}>
    <rect x="0" y="6" width="28" height="28" rx="6" fill="#7C3AED" />
    <text x="5" y="27" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" fill="#fff">KS</text>
    <text x="34" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" fill="#7C3AED">KESIT</text>
  </svg>
);

const LogoRihantva = (): React.ReactElement => (
  <svg viewBox="0 0 140 40" height="32" style={{ display: "block" }}>
    <circle cx="16" cy="20" r="12" fill="#0EA5E9" />
    <path d="M10 14 L10 26 M10 14 L19 14 Q23 14 23 19 Q23 24 19 24 L10 24 M10 20 L19 20" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <text x="34" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#0f172a">
      Rihantva <tspan fill="#0EA5E9">AI</tspan>
    </text>
  </svg>
);

const LogoPlayersHealth = (): React.ReactElement => (
  <svg viewBox="0 0 150 40" height="32" style={{ display: "block" }}>
    <path d="M20 8 C20 8 6 14 6 22 C6 30 13 34 20 34 C27 34 34 30 34 22 C34 14 20 8 20 8Z" fill="#059669" />
    <path d="M14 20 L18 24 L26 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <text x="40" y="23" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#0f172a">Players Health</text>
    <text x="40" y="34" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="11" fill="#64748b">Insurance</text>
  </svg>
);

const LogoHexaware = (): React.ReactElement => (
  <svg viewBox="0 0 130 40" height="32" style={{ display: "block" }}>
    <polygon points="20,6 32,13 32,27 20,34 8,27 8,13" fill="#FF6B00" />
    <text x="7" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="13" fill="#fff">HX</text>
    <text x="38" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#1a1a1a">Hexaware</text>
  </svg>
);

const LogoCognizant = (): React.ReactElement => (
  <svg viewBox="0 0 130 40" height="32" style={{ display: "block" }}>
    <circle cx="16" cy="20" r="12" fill="#1572C8" />
    <path d="M22 14 A10 10 0 1 0 22 26" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
    <text x="33" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#1572C8">Cognizant</text>
  </svg>
);

const LogoInfosys = (): React.ReactElement => (
  <svg viewBox="0 0 120 40" height="32" style={{ display: "block" }}>
    <rect x="2" y="10" width="30" height="20" rx="3" fill="#007CC3" />
    <text x="6" y="26" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="13" fill="#fff">INF</text>
    <text x="37" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#007CC3">Infosys</text>
  </svg>
);

const LogoDeloitte = (): React.ReactElement => (
  <svg viewBox="0 0 120 40" height="32" style={{ display: "block" }}>
    <circle cx="16" cy="20" r="12" fill="#86BC25" />
    <rect x="10" y="14" width="4" height="12" rx="2" fill="#fff" />
    <rect x="17" y="10" width="4" height="20" rx="2" fill="#fff" />
    <text x="33" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#1a1a1a">Deloitte.</text>
  </svg>
);

const LogoWipro = (): React.ReactElement => (
  <svg viewBox="0 0 100 40" height="32" style={{ display: "block" }}>
    <circle cx="16" cy="20" r="12" fill="#341A5C" />
    <circle cx="16" cy="20" r="6" fill="#9F7FCA" />
    <circle cx="16" cy="20" r="2.5" fill="#fff" />
    <text x="33" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#341A5C">Wipro</text>
  </svg>
);

const LogoTCS = (): React.ReactElement => (
  <svg viewBox="0 0 80 40" height="32" style={{ display: "block" }}>
    <rect x="2" y="8" width="24" height="24" rx="4" fill="#EC1C24" />
    <text x="5" y="27" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="16" fill="#fff">TC</text>
    <text x="30" y="27" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#1a1a1a">TCS</text>
  </svg>
);

// ─── Partner data ─────────────────────────────────────────────────────────────
const partners: Partner[] = [
  { name: "Insight Global",           category: "Staffing",   accent: "#2563EB", Logo: LogoInsightGlobal },
  { name: "Randstad",                 category: "Staffing",   accent: "#CA0034", Logo: LogoRandstad },
  { name: "Genpact",                  category: "Operations", accent: "#00A651", Logo: LogoGenpact },
  { name: "KESIT",                    category: "Consulting", accent: "#7C3AED", Logo: LogoKesit },
  { name: "Rihantva AI",              category: "AI & Tech",  accent: "#0EA5E9", Logo: LogoRihantva },
  { name: "Players Health Insurance", category: "Healthcare", accent: "#059669", Logo: LogoPlayersHealth },
  { name: "Hexaware",                 category: "Technology", accent: "#FF6B00", Logo: LogoHexaware },
  { name: "Cognizant",                category: "Technology", accent: "#1572C8", Logo: LogoCognizant },
  { name: "Infosys",                  category: "Technology", accent: "#007CC3", Logo: LogoInfosys },
  { name: "Deloitte",                 category: "Consulting", accent: "#86BC25", Logo: LogoDeloitte },
  { name: "Wipro",                    category: "Technology", accent: "#341A5C", Logo: LogoWipro },
  { name: "TCS",                      category: "Technology", accent: "#EC1C24", Logo: LogoTCS },
];

// ─── Card component ───────────────────────────────────────────────────────────
function PartnerCard({ partner, index, mounted }: PartnerCardProps): React.ReactElement {
  const [hovered, setHovered] = useState(false);
  const { Logo } = partner;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1.5px solid ${hovered ? partner.accent + "55" : "#e8edf3"}`,
        borderRadius: 12,
        padding: "26px 20px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        boxShadow: hovered ? `0 12px 36px ${partner.accent}18` : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.22s ease",
        animation: mounted ? `fadeUp 0.5s ease ${0.04 + index * 0.06}s both` : "none",
        minHeight: 110,
      }}
    >
      {/* Accent top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: partner.accent,
        borderRadius: "12px 12px 0 0",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.22s",
      }} />

      {/* Logo */}
      <div style={{ filter: hovered ? "none" : "opacity(0.82)", transition: "filter 0.22s" }}>
        <Logo />
      </div>

      {/* Category tag */}
      <span style={{
        fontSize: 10.5,
        fontWeight: 700,
        color: partner.accent,
        background: partner.accent + "14",
        padding: "3px 10px",
        borderRadius: 20,
        letterSpacing: "0.04em",
      }}>
        {partner.category}
      </span>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function Trusted(): React.ReactElement {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section style={{
      background: "#f8fafc",
      padding: "84px 32px",
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
        .th { animation: ${mounted ? "fadeUp .5s ease 0s both"   : "none"}; }
        .ts { animation: ${mounted ? "fadeUp .5s ease .1s both"  : "none"}; }
        .tf { animation: ${mounted ? "fadeUp .5s ease .85s both" : "none"}; }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #0f172a; color: #fff;
          padding: 12px 22px; border-radius: 7px;
          font-size: 13px; font-weight: 700;
          text-decoration: none; border: none; cursor: pointer;
          font-family: inherit; white-space: nowrap;
          transition: background .18s, transform .18s;
        }
        .cta-btn:hover { background: #1e293b; transform: translateY(-1px); }
      `}</style>

      {/* Dot texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(#d1d9e6 1px, transparent 1px)",
        backgroundSize: "28px 28px", opacity: 0.38,
      }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div className="th" style={{ textAlign: "center", marginBottom: 12 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 26, height: 1.5, background: "#cbd5e1", borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a56db" }}>
              Our Clients & Partners
            </span>
            <div style={{ width: 26, height: 1.5, background: "#cbd5e1", borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 700, color: "#0f172a",
            margin: "0 0 14px", letterSpacing: "-0.022em",
          }}>
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="ts" style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: 15.5, color: "#64748b", maxWidth: 520, margin: "0 auto", lineHeight: 1.8 }}>
            We collaborate with top-tier companies across industries to deliver
            exceptional talent and technology solutions.
          </p>
        </div>

        {/* 4-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 32 }}>
          {partners.map((p, i) => (
            <PartnerCard key={p.name} partner={p} index={i} mounted={mounted} />
          ))}
        </div>

        {/* Footer banner */}
        <div className="tf" style={{
          background: "#fff",
          border: "1.5px solid #e2e8f0",
          borderRadius: 12,
          padding: "22px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 14,
        }}>
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>
              …and many more across healthcare, finance, technology, and government sectors.
            </p>
            <p style={{ fontSize: 12.5, color: "#64748b", margin: 0 }}>
              Our network spans 50+ active client companies across 30+ U.S. states.
            </p>
          </div>
          <a href="/contact" className="cta-btn">
            Partner With Us
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
