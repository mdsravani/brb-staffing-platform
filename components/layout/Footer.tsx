"use client";
import { useState, useEffect } from "react";

type Dot = { x: number; y: number; o: number };

const services = [
  { name: "IT Staffing", desc: "Enterprise placements nationwide" },
  { name: "H-1B Sponsorship", desc: "Full visa sponsorship support" },
  { name: "OPT / STEM OPT", desc: "Work auth assistance" },
  { name: "Workforce Deployment", desc: "Scalable consultant teams" },
];

const links = [
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Compliance", href: "/compliance" },
  { name: "Contact", href: "/contact" },
];

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Footer() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [year] = useState<number>(new Date().getFullYear());
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const arr: Dot[] = Array.from({ length: 18 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      o: 0.03 + Math.random() * 0.07,
    }));
    setDots(arr);
  }, []);

  return (
    <footer style={{ background: "linear-gradient(170deg, #080f1f 0%, #0b1628 55%, #0d1f3c 100%)", position: "relative", overflow: "hidden", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .footer-link { transition: color 0.2s, padding-left 0.2s; }
        .footer-link:hover { color: #93c5fd; padding-left: 6px; }
        .service-card { transition: all 0.25s ease; cursor: default; }
        .service-card:hover { background: rgba(255,255,255,0.06) !important; border-color: rgba(96,165,250,0.3) !important; }
        .linkedin-btn { transition: all 0.22s ease; }
        .linkedin-btn:hover { background: #0a66c2 !important; color: #fff !important; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(10,102,194,0.35); }
        .email-link:hover { color: #93c5fd !important; }
        .bottom-link:hover { color: #64748b !important; }
        @keyframes floatDot { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-12px) } }
      `}</style>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {dots.map((d, i) => (
          <div key={i} style={{ position: "absolute", left: `${d.x}%`, top: `${d.y}%`, width: 3, height: 3, borderRadius: "50%", background: `rgba(147,197,253,${d.o})`, animation: `floatDot ${4 + (i % 4)}s ease-in-out ${i * 0.3}s infinite` }} />
        ))}
        <div style={{ position: "absolute", top: -80, left: "15%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: 0, right: "10%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)" }} />
      </div>

      {/* Top accent */}
      <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #1d4ed8 30%, #3b82f6 60%, transparent 100%)" }} />

      {/* Main content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px 48px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1.2fr 1fr 1.4fr", gap: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #1d4ed8, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>B</span>
                </div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#f1f5f9" }}>
                  BRB Data InfoTech
                </span>
              </div>
              <div style={{ height: 1.5, width: 48, background: "linear-gradient(90deg, #3b82f6, transparent)", marginTop: 10, marginLeft: 38 }} />
            </div>
            <p style={{ fontSize: 13.5, color: "rgba(148,163,184,0.85)", lineHeight: 1.85, marginBottom: 24, maxWidth: 240 }}>
              Enterprise IT staffing and direct H-1B sponsorship solutions across the United States.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.20)", borderRadius: 100, padding: "5px 12px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#34d399", letterSpacing: "0.05em" }}>Actively Onboarding</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#475569", marginBottom: 18 }}>Services</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {services.map((s, i) => (
                <div key={i} className="service-card" onMouseEnter={() => setHoveredService(i)} onMouseLeave={() => setHoveredService(null)} style={{ padding: "9px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.02)" }}>
                  <p style={{ fontSize: 13, fontWeight: 500, color: hoveredService === i ? "#bfdbfe" : "#cbd5e1", margin: 0, transition: "color 0.2s" }}>{s.name}</p>
                  <p style={{ fontSize: 11, color: "#475569", margin: "2px 0 0" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#475569", marginBottom: 18 }}>Company</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {links.map((l) => (
                <a key={l.name} href={l.href} className="footer-link" style={{ fontSize: 13.5, color: "#94a3b8", textDecoration: "none", display: "inline-flex", alignItems: "center", padding: "4px 0" }}>{l.name}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#475569", marginBottom: 18 }}>Connect</p>
            <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
              <div style={{ marginTop: 2, color: "#3b82f6", flexShrink: 0 }}><MapPinIcon /></div>
              <p style={{ fontSize: 12.5, color: "#64748b", lineHeight: 1.8, margin: 0 }}>
                30 N Gould St, Suite R<br />
                Sheridan, WY 82801<br />
                <span style={{ color: "#475569" }}>United States</span>
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 22, alignItems: "center" }}>
              <div style={{ color: "#3b82f6", flexShrink: 0 }}><MailIcon /></div>
              <a href="mailto:hr@brbdatainfotech.com" className="email-link" style={{ fontSize: 12.5, color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}>
                hr@brbdatainfotech.com
              </a>
            </div>
            <a href="https://www.linkedin.com/in/brb-data-infotech-a762183a3/" target="_blank" rel="noopener noreferrer" className="linkedin-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(10,102,194,0.15)", border: "1px solid rgba(10,102,194,0.30)", color: "#93c5fd", padding: "9px 16px", borderRadius: 8, fontSize: 12.5, fontWeight: 600, textDecoration: "none" }}>
              <LinkedInIcon />
              <span>LinkedIn</span>
              <ArrowUpRight />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "18px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontSize: 11.5, color: "#334155", margin: 0 }}>© {year} BRB Data InfoTech. All rights reserved.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Use"].map((t) => (
              <a key={t} href="#" className="bottom-link" style={{ fontSize: 11.5, color: "#334155", textDecoration: "none", transition: "color 0.2s" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}