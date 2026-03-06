"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Dot = { x: number; y: number; o: number; size: number };

const services = [
  { name: "IT Staffing", desc: "Enterprise placements nationwide", icon: "◈" },
  { name: "H-1B Sponsorship", desc: "Structured H-1B sponsorship support", icon: "◈" },
  { name: "OPT / STEM OPT", desc: "Work auth assistance", icon: "◈" },
  { name: "Workforce Deployment", desc: "Scalable consultant teams", icon: "◈" },
];

const links = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Compliance", href: "/compliance" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Footer() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [year] = useState<number>(new Date().getFullYear());
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const arr: Dot[] = Array.from({ length: 22 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      o: 0.025 + Math.random() * 0.055,
      size: i % 3 === 0 ? 4 : 2.5,
    }));
    setDots(arr);
  }, []);

  return (
    <footer style={{
      background: "linear-gradient(160deg, #060d1c 0%, #091426 50%, #0b1a35 100%)",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Outfit', 'DM Sans', system-ui, sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-nav-link {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          color: #94a3b8;
          text-decoration: none;
          padding: 5px 0;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .footer-nav-link::before {
          content: '';
          width: 0;
          height: 1px;
          background: #3b82f6;
          transition: width 0.2s ease;
          display: block;
        }
        .footer-nav-link:hover {
          color: #e2e8f0;
          gap: 10px;
        }
        .footer-nav-link:hover::before { width: 12px; }

        .service-pill {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.045);
          background: rgba(255,255,255,0.018);
          transition: all 0.25s ease;
          cursor: default;
        }
        .service-pill:hover {
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.22);
          transform: translateX(3px);
        }

        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .contact-row:last-of-type { border-bottom: none; }

        .contact-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: rgba(59,130,246,0.10);
          border: 1px solid rgba(59,130,246,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #60a5fa;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .linkedin-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(10,102,194,0.12);
          border: 1px solid rgba(10,102,194,0.28);
          color: #93c5fd;
          padding: 10px 18px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.22s ease;
          letter-spacing: 0.02em;
        }
        .linkedin-cta:hover {
          background: #0a66c2;
          border-color: #0a66c2;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(10,102,194,0.30);
        }

        .email-link {
          font-size: 13px;
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .email-link:hover { color: #93c5fd; }

        .bottom-legal-link {
          font-size: 11.5px;
          color: #2d3f55;
          text-decoration: none;
          transition: color 0.2s;
        }
        .bottom-legal-link:hover { color: #64748b; }

        @keyframes floatDot {
          0%, 100% { transform: translateY(0px); opacity: 1; }
          50% { transform: translateY(-10px); opacity: 0.6; }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }

        .status-dot {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .logo-glow {
          filter: drop-shadow(0 0 10px rgba(59,130,246,0.25));
          transition: filter 0.3s ease;
        }
        .logo-glow:hover {
          filter: drop-shadow(0 0 18px rgba(59,130,246,0.45));
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Atmospheric glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {dots.map((d, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            borderRadius: "50%",
            background: `rgba(147,197,253,${d.o})`,
            animation: `floatDot ${4 + (i % 5)}s ease-in-out ${i * 0.25}s infinite`
          }} />
        ))}
        {/* Large ambient glows */}
        <div style={{ position: "absolute", top: -120, left: "8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(29,78,216,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -60, right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "40%", left: "50%", width: 500, height: 200, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(15,52,96,0.12) 0%, transparent 70%)", transform: "translateX(-50%)" }} />
      </div>

      {/* Top gradient line */}
      <div style={{ height: 1.5, background: "linear-gradient(90deg, transparent 0%, rgba(29,78,216,0.6) 25%, rgba(59,130,246,0.8) 50%, rgba(29,78,216,0.6) 75%, transparent 100%)" }} />

      {/* Main content */}
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 36px 56px", position: "relative" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1.3fr 1fr 1.5fr", gap: 56 }}>

          {/* ── Brand Column ── */}
          <div className="footer-brand">
            {/* Logo */}
            <div style={{ marginBottom: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 14 }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  padding: 6,
                }}>
                  <Image
                    src="/logo.png"
                    alt="BRB Data InfoTech"
                    width={40}
                    height={40}
                    className="logo-glow"
                    style={{ objectFit: "contain", width: 40, height: 40 }}
                  />
                </div>
                <div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 700, color: "#f1f5f9", margin: 0, letterSpacing: "-0.3px" }}>
                    BRB Data InfoTech
                  </p>
                  
                </div>
              </div>
              {/* Subtle separator */}
              <div style={{ height: 1, background: "linear-gradient(90deg, rgba(59,130,246,0.3), transparent)", width: 200 }} />
            </div>

            <p style={{ fontSize: 13.5, color: "rgba(148,163,184,0.8)", lineHeight: 1.9, marginBottom: 28, maxWidth: 260, fontWeight: 400 }}>
              Enterprise IT staffing and direct H-1B sponsorship solutions across the United States — connecting top talent with leading organizations.
            </p>

            {/* Status badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)", borderRadius: 100, padding: "6px 14px", marginBottom: 28 }}>
              <span className="status-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 6px #10b981" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#34d399", letterSpacing: "0.06em" }}>Actively Onboarding</span>
            </div>

            {/* Stats strip */}
            <div style={{ display: "flex", gap: 24 }}>
              {[
                    ["Enterprise", "IT Staffing"],
                    ["H-1B", "Sponsorship"],
                    ["Nationwide", "Opportunities"]
                    ].map(([num, label]) => (
                  <div key={label}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, color: "#60a5fa", margin: 0, lineHeight: 1 }}>{num}</p>
                  <p style={{ fontSize: 10.5, color: "#475569", margin: "3px 0 0", letterSpacing: "0.04em" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Services Column ── */}
          <div>
            <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#334155", marginBottom: 18, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              Our Services
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {services.map((s, i) => (
                <div
                  key={i}
                  className="service-pill"
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <span style={{ fontSize: 10, color: "#3b82f6", marginTop: 3, flexShrink: 0 }}>{s.icon}</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: hoveredService === i ? "#bfdbfe" : "#cbd5e1", margin: 0, transition: "color 0.2s", lineHeight: 1.3 }}>{s.name}</p>
                    <p style={{ fontSize: 11, color: "#3d4f63", margin: "3px 0 0", lineHeight: 1.4 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Company Links ── */}
          <div>
            <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#334155", marginBottom: 18, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              Company
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {links.map((l) => (
                <a key={l.name} href={l.href} className="footer-nav-link">{l.name}</a>
              ))}
            </div>
          </div>

          {/* ── Contact Column ── */}
          <div>
            <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#334155", marginBottom: 18, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              Get In Touch
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 20 }}>
              {/* Address */}
              <div className="contact-row">
                <div className="contact-icon-wrap">
                  <MapPinIcon />
                </div>
                <p style={{ fontSize: 12.5, color: "#64748b", lineHeight: 1.85, margin: 0 }}>
                  30 N Gould St, Suite R<br />
                  Sheridan, WY 82801<br />
                  <span style={{ color: "#475569", fontSize: 11.5 }}>United States</span>
                </p>
              </div>

              {/* Email */}
              <div className="contact-row">
                <div className="contact-icon-wrap">
                  <MailIcon />
                </div>
                <div style={{ paddingTop: 5 }}>
                  <p style={{ fontSize: 10, color: "#334155", margin: "0 0 2px", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>Email</p>
                  <a href="mailto:hr@brbdatainfotech.com" className="email-link">
                    hr@brbdatainfotech.com
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn CTA */}
            <a
              href="https://www.linkedin.com/in/brb-data-infotech-a762183a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-cta"
            >
              <LinkedInIcon />
              <span>Follow on LinkedIn</span>
              <ArrowUpRight />
            </a>

            {/* US Flag badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginTop: 16 }}>
              <span style={{ fontSize: 16 }}>🇺🇸</span>
              <span style={{ fontSize: 11, color: "#2d3f55", fontWeight: 500, letterSpacing: "0.03em" }}>Registered in the United States</span>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.05) 80%, transparent)", margin: "0 36px" }} />

      {/* Bottom bar */}
      <div style={{ padding: "20px 36px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: 5, background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/logo.png" alt="" width={12} height={12} style={{ objectFit: "contain", opacity: 0.7 }} />
            </div>
            <p style={{ fontSize: 11.5, color: "#2d3f55", margin: 0 }}>
              © {year} BRB Data InfoTech LLC. All rights reserved.
            </p>
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((t, i) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <a href="#" className="bottom-legal-link">{t}</a>
                {i < 2 && <span style={{ color: "#1e2d3d", fontSize: 11 }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
