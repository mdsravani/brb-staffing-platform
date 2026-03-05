"use client";
import { useState, useEffect } from "react";

export default function CTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1a4b8c 100%)", padding: "96px 24px", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
        .cta-primary { transition: all 0.22s ease; }
        .cta-primary:hover { background: #fff !important; color: #1e3a5f !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,255,255,0.15); }
        .cta-secondary { transition: all 0.22s ease; }
        .cta-secondary:hover { background: rgba(255,255,255,0.08) !important; transform: translateY(-2px); }
        @keyframes pulse-ring { 0%,100%{ transform: scale(1); opacity:0.4 } 50%{ transform: scale(1.15); opacity:0.1 } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
      `}</style>

      {/* Grid overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", top: -60, left: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, right: "10%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", animation: mounted ? "fadeUp 0.6s ease forwards" : "none" }}>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse-ring 2s ease-in-out infinite" }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#bfdbfe" }}>Actively Placing Consultants</span>
        </div>

        {/* Heading */}
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 700, color: "#f8fafc", margin: "0 0 20px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          Ready to Build Your Workforce{" "}
          <span style={{ color: "#60a5fa" }}>With Confidence?</span>
        </h2>

        {/* Subtext */}
        <p style={{ fontSize: 16, color: "rgba(148,163,184,0.90)", lineHeight: 1.85, maxWidth: 540, margin: "0 auto 40px" }}>
          Partner with BRB Data InfoTech for enterprise IT staffing, direct H-1B sponsorship, and compliance-driven workforce solutions across the United States.
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginBottom: 44, flexWrap: "wrap" }}>
          {[
            { value: "500+", label: "Consultants Placed" },
            { value: "H-1B", label: "Direct Sponsorship" },
            { value: "50+", label: "Client Companies" },
          ].map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", position: "relative" }}>
              {i !== 0 && (
                <div style={{ position: "absolute", left: -22, top: "50%", transform: "translateY(-50%)", width: 1, height: 28, background: "rgba(255,255,255,0.08)" }} />
              )}
              <div style={{ fontSize: 22, fontWeight: 700, color: "#60a5fa" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2, letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: 48, height: 1.5, background: "linear-gradient(90deg, transparent, #3b82f6, transparent)", margin: "0 auto 40px" }} />

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
          <a href="/contact" className="cta-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#2563eb", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
            Contact Our Team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="/services" className="cta-secondary" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", color: "#e2e8f0", padding: "14px 32px", borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
            View Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        {/* Trust note */}
        <p style={{ marginTop: 28, fontSize: 12, color: "#64748b" }}>
          No placement fees for consultants · H-1B, OPT, STEM OPT, GC supported
        </p>

      </div>
    </section>
  );
}