"use client";
import { useState } from "react";

export default function AboutPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const approaches = [
    {
      number: "01",
      title: "Strategic Talent Acquisition",
      desc: "Identifying and onboarding highly skilled IT professionals aligned with enterprise requirements.",
      detail: "We leverage deep industry networks and rigorous screening to match the right talent with the right opportunity — every time.",
      accent: "#1d4ed8",
      iconBg: "#dbeafe",
      iconColor: "#1d4ed8",
      tag: "Talent",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    },
    {
      number: "02",
      title: "Immigration & Visa Support",
      desc: "Structured visa sponsorship and employment authorization processes.",
      detail: "From H-1B transfers to Green Card processing, we handle the complexity so your team can focus on delivering results.",
      accent: "#0369a1",
      iconBg: "#bae6fd",
      iconColor: "#0369a1",
      tag: "Visa",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
    {
      number: "03",
      title: "Compliance & Documentation",
      desc: "Maintaining employment verification and regulatory alignment.",
      detail: "Every engagement is backed by thorough I-9 verification, E-Verify compliance, and complete audit-ready documentation.",
      accent: "#1e3a5f",
      iconBg: "#e0e7ff",
      iconColor: "#1e3a5f",
      tag: "Compliance",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    },
    {
      number: "04",
      title: "Long-Term Engagement",
      desc: "Ongoing workforce support for consultants and client organizations.",
      detail: "We stay with you beyond placement — offering continued support, performance check-ins, and workforce planning assistance.",
      accent: "#0f766e",
      iconBg: "#ccfbf1",
      iconColor: "#0f766e",
      tag: "Growth",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#fff" }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#0f172a", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff", margin: 0 }}>About BRB Data InfoTech</h1>
          <p style={{ marginTop: 16, color: "#94a3b8", lineHeight: 1.7, maxWidth: 560, margin: "16px auto 0" }}>
            A professional IT staffing and workforce solutions company delivering talent acquisition and immigration support services across the United States.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1e3a5f" }}>Our Story</span>
            </div>
            <h2 style={{ fontSize: 30, fontWeight: 800, color: "#0f172a", margin: "0 0 16px" }}>Who We Are</h2>
            <p style={{ color: "#475569", lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              BRB Data InfoTech is an IT staffing and workforce solutions firm specializing in talent acquisition, visa sponsorship, and long-term consultant engagement across multiple industries in the United States.
            </p>
          </div>
          <div style={{ borderRadius: 16, background: "linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 100%)", padding: "36px 28px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.07), transparent)", pointerEvents: "none" }} />
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(191,219,254,0.8)", margin: "0 0 16px" }}>Company Overview</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[["US-Based Operations", "Serving clients nationwide"], ["IT & Workforce Focus", "Staffing + immigration support"], ["End-to-End Solutions", "From hire to compliance"]].map(([title, sub]) => (
                <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa", flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9", margin: 0 }}>{title}</p>
                    <p style={{ fontSize: 12, color: "rgba(191,219,254,0.7)", margin: 0 }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH — RICH BACKGROUND ───────────── */}
      <section style={{
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 45%, #1a4b8c 100%)",
      }}>
        {/* Texture dots */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

        {/* Soft light bloom top-right */}
        <div style={{ position: "absolute", top: -100, right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        {/* Soft light bloom bottom-left */}
        <div style={{ position: "absolute", bottom: -80, left: "0%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative" }}>

          {/* Heading */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "end", marginBottom: 52 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 100, padding: "5px 14px", marginBottom: 16 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60a5fa", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#bfdbfe" }}>How We Work</span>
              </div>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: "#f8fafc", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                Our Approach
              </h2>
            </div>
            <p style={{ fontSize: 15, color: "#93c5fd", lineHeight: 1.75, margin: 0 }}>
              A proven four-step framework trusted by enterprise clients — from initial talent search to long-term workforce success.
            </p>
          </div>

          {/* Cards — white on rich dark bg */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
            {approaches.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  borderRadius: 16,
                  padding: "30px 28px",
                  background: activeCard === i ? "#ffffff" : "rgba(255,255,255,0.96)",
                  border: activeCard === i ? `1.5px solid ${item.accent}` : "1.5px solid rgba(255,255,255,0.9)",
                  boxShadow: activeCard === i
                    ? `0 16px 48px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.10)`
                    : "0 4px 20px rgba(0,0,0,0.15)",
                  transition: "all 0.25s ease",
                  transform: activeCard === i ? "translateY(-4px)" : "translateY(0)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                  background: activeCard === i ? item.accent : "transparent",
                  borderRadius: "16px 0 0 16px",
                  transition: "all 0.25s",
                }} />

                {/* Top row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: activeCard === i ? item.accent : "#cbd5e1", transition: "color 0.25s" }}>{item.number}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: activeCard === i ? item.accent : "#94a3b8", background: activeCard === i ? item.iconBg : "#f1f5f9", padding: "2px 8px", borderRadius: 20, transition: "all 0.25s" }}>{item.tag}</span>
                  </div>
                  <div style={{
                    width: 46, height: 46, borderRadius: 12,
                    background: activeCard === i ? item.iconBg : "#f8fafc",
                    border: `1px solid ${activeCard === i ? item.iconBg : "#e2e8f0"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: activeCard === i ? item.iconColor : "#94a3b8",
                    transition: "all 0.25s", flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 16, fontWeight: 700, color: activeCard === i ? "#0f172a" : "#1e293b", margin: "0 0 9px", lineHeight: 1.35, transition: "color 0.25s" }}>
                  {item.title}
                </h3>

                {/* Desc */}
                <p style={{ fontSize: 13.5, color: "#64748b", margin: "0 0 16px", lineHeight: 1.7 }}>
                  {item.desc}
                </p>

                <div style={{ height: 1, background: "#f1f5f9", margin: "0 0 14px" }} />

                {/* Detail */}
                <p style={{ fontSize: 12.5, lineHeight: 1.7, margin: 0, color: activeCard === i ? "#475569" : "#94a3b8", transition: "color 0.25s" }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Stats bar — glassy on dark bg */}
          <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}>
            {[["500+", "Placements Made"], ["50+", "Enterprise Clients"], ["98%", "Satisfaction Rate"], ["< 24h", "Avg. Response"]].map(([num, label], i) => (
              <div key={i} style={{ padding: "26px 20px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.10)" : "none" }}>
                <p style={{ fontSize: 28, fontWeight: 800, color: "#f8fafc", margin: "0 0 5px", letterSpacing: "-0.025em" }}>{num}</p>
                <p style={{ fontSize: 11, color: "#93c5fd", margin: 0, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── COMPLIANCE ───────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #2d6a9f 100%)", padding: "56px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent)", pointerEvents: "none" }} />
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(96,165,250,0.15)", border: "1px solid rgba(96,165,250,0.25)", borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#93c5fd" }}>Our Commitment</span>
            </div>
            <h2 style={{ fontSize: 30, fontWeight: 800, color: "#f8fafc", margin: "0 0 16px", letterSpacing: "-0.02em" }}>Compliance Commitment</h2>
            <p style={{ color: "rgba(191,219,254,0.8)", maxWidth: 620, margin: "0 auto 36px", lineHeight: 1.8, fontSize: 15 }}>
              We maintain adherence to employment verification standards and support proper documentation processes aligned with workforce compliance requirements across engagements.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 640, margin: "0 auto" }}>
              {[["I-9 Verification", "Employment eligibility"], ["E-Verify Compliant", "Federal standards"], ["Legal Work Auth", "Full documentation"]].map(([title, sub]) => (
                <div key={title} style={{ padding: "16px 12px", borderRadius: 12, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", margin: "0 0 3px" }}>{title}</p>
                  <p style={{ fontSize: 11, color: "rgba(191,219,254,0.65)", margin: 0 }}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
