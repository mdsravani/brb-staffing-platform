"use client";
import React, { useState, useEffect } from "react";

type Industry = {
  title: string;
  desc: string;
  accent: string;
  img: string;
};

const industries: Industry[] = [
  {
    title: "Healthcare Technology",
    desc: "EHR systems, telemedicine, HIPAA-compliant infrastructure & clinical IT staffing.",
    accent: "#059669",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Financial Services & FinTech",
    desc: "Core banking, payment systems, risk analytics & regulatory compliance technology.",
    accent: "#1a56db",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Retail & eCommerce",
    desc: "Supply chain platforms, POS systems, data analytics & digital commerce engineering.",
    accent: "#d97706",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "SaaS & Cloud Platforms",
    desc: "Multi-tenant architecture, DevOps pipelines & cloud-native platform engineering.",
    accent: "#7c3aed",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Enterprise Technology",
    desc: "ERP, CRM, infrastructure modernization & large-scale system integration.",
    accent: "#0369a1",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Data Engineering & Analytics",
    desc: "Big data pipelines, BI platforms, ML infrastructure & real-time analytics.",
    accent: "#0f766e",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80&auto=format&fit=crop",
  },
];

type IndustryCardProps = {
  industry: Industry;
  index: number;
  mounted: boolean;
};

function IndustryCard({ industry, index, mounted }: IndustryCardProps): React.ReactElement {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        height: 260,
        cursor: "default",
        boxShadow: hovered ? "0 20px 48px rgba(0,0,0,0.28)" : "0 4px 16px rgba(0,0,0,0.12)",
        transform: hovered ? "translateY(-5px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "all 0.3s ease",
        animation: mounted ? `fadeUp 0.55s ease ${0.06 + index * 0.09}s both` : "none",
      }}
    >
      {/* Background image */}
      <img
        src={industry.img}
        alt={industry.title}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
      />

      {/* Dark gradient always on */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.08) 100%)",
      }} />

      {/* Accent color overlay on hover */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(135deg, ${industry.accent}cc 0%, ${industry.accent}44 100%)`,
        opacity: hovered ? 0.55 : 0,
        transition: "opacity 0.3s ease",
      }} />

      {/* Category pill — top left */}
      <div style={{
        position: "absolute", top: 16, left: 16,
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: 20, padding: "4px 12px",
      }}>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          IT Staffing
        </span>
      </div>

      {/* Floating text bottom */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "0 22px 22px",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.3s ease",
      }}>
        <h3 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 18, fontWeight: 700,
          color: "#fff", margin: "0 0 8px",
          lineHeight: 1.2, letterSpacing: "-0.01em",
          textShadow: "0 1px 8px rgba(0,0,0,0.4)",
        }}>
          {industry.title}
        </h3>
        <p style={{
          fontSize: 12.5,
          color: "rgba(255,255,255,0.85)",
          margin: 0, lineHeight: 1.65,
          maxHeight: hovered ? "80px" : "0px",
          overflow: "hidden",
          opacity: hovered ? 1 : 0,
          transition: "all 0.35s ease",
        }}>
          {industry.desc}
        </p>
      </div>

      {/* Accent bottom line */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
        background: industry.accent,
        opacity: hovered ? 1 : 0.5,
        transition: "opacity 0.3s",
      }} />
    </div>
  );
}

export default function Industries(): React.ReactElement {
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
        .ih { animation: ${mounted ? "fadeUp .5s ease 0s both"  : "none"}; }
        .is { animation: ${mounted ? "fadeUp .5s ease .1s both" : "none"}; }
        .ib { animation: ${mounted ? "fadeUp .5s ease .7s both" : "none"}; }
        .discuss-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #1a56db; color: #fff;
          padding: 13px 28px; border-radius: 7px;
          font-size: 13.5px; font-weight: 700;
          border: none; cursor: pointer; font-family: inherit;
          text-decoration: none;
          transition: background .18s, transform .18s;
        }
        .discuss-cta:hover { background: #1447c4; transform: translateY(-1px); }
      `}</style>

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(#d1d9e6 1px, transparent 1px)",
        backgroundSize: "28px 28px", opacity: 0.38,
      }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative" }}>

        <div className="ih" style={{ textAlign: "center", marginBottom: 12 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 26, height: 1.5, background: "#cbd5e1", borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1a56db" }}>
              Industries We Serve
            </span>
            <div style={{ width: 26, height: 1.5, background: "#cbd5e1", borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 700, color: "#0f172a",
            margin: "0 0 14px", letterSpacing: "-0.022em",
          }}>
            Industries We Support
          </h2>
        </div>

        <div className="is" style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: 15.5, color: "#64748b", maxWidth: 540, margin: "0 auto", lineHeight: 1.8 }}>
            Delivering specialized IT staffing and visa-sponsored workforce solutions
            across high-demand technology-driven industries in the United States.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 36 }}>
          {industries.map((ind, i) => (
            <IndustryCard key={ind.title} industry={ind} index={i} mounted={mounted} />
          ))}
        </div>

        <div className="ib" style={{
          background: "#fff", border: "1.5px solid #e2e8f0",
          borderRadius: 14, padding: "24px 32px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <p style={{ fontSize: 14.5, fontWeight: 700, color: "#0f172a", margin: "0 0 4px" }}>
              Don't see your industry? We likely cover it.
            </p>
            <p style={{ fontSize: 13, color: "#64748b", margin: 0 }}>
              Our consultants have been deployed across 20+ technology verticals nationwide.
            </p>
          </div>
          <a href="/contact" className="discuss-cta">
            Discuss Your Needs
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
