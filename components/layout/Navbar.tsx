"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/compliance", label: "Compliance" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=DM+Sans:wght@400;500&display=swap');

        .nav-root {
          font-family: 'DM Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 100;
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }

        /* Top accent bar */
        .nav-accent-bar {
          background: linear-gradient(90deg, #0f3460 0%, #1a5fa8 50%, #e94d35 100%);
          height: 3px;
          width: 100%;
        }

        .nav-main {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #e8ecf2;
          transition: box-shadow 0.3s ease;
        }

        .nav-main.scrolled {
          box-shadow: 0 4px 24px rgba(15,52,96,0.10);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-img-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          overflow: hidden;
          background: #f0f5ff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #dce6f5;
        }

        .logo-text-block {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .logo-name {
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0f3460;
          letter-spacing: -0.3px;
          white-space: nowrap;
        }

        .logo-tagline {
          font-size: 10.5px;
          font-weight: 500;
          color: #e94d35;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Desktop nav */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          display: block;
          padding: 7px 14px;
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          text-decoration: none;
          border-radius: 8px;
          position: relative;
          transition: color 0.2s ease, background 0.2s ease;
          letter-spacing: 0.1px;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: #1a5fa8;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.22s ease;
          transform-origin: left;
        }

        .nav-links a:hover {
          color: #0f3460;
          background: #f0f5ff;
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
        }

        /* CTA Button */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #0f3460 0%, #1a5fa8 100%);
          color: #fff !important;
          font-family: 'Outfit', sans-serif;
          font-size: 13.5px !important;
          font-weight: 600 !important;
          padding: 9px 20px !important;
          border-radius: 8px !important;
          text-decoration: none;
          letter-spacing: 0.2px;
          box-shadow: 0 2px 12px rgba(15,52,96,0.18);
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease !important;
          white-space: nowrap;
          margin-left: 10px;
        }

        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(15,52,96,0.26) !important;
          background: linear-gradient(135deg, #0c2a50 0%, #1452a0 100%) !important;
          color: #fff !important;
        }

        .nav-cta::after {
          display: none !important;
        }

        .cta-arrow {
          font-size: 15px;
          transition: transform 0.18s ease;
        }

        .nav-cta:hover .cta-arrow {
          transform: translateX(3px);
        }

        /* Divider dot */
        .nav-divider {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #d1dce8;
          margin: 0 6px;
          flex-shrink: 0;
        }

        /* Hamburger (mobile) */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          border: none;
          background: transparent;
          transition: background 0.15s;
        }

        .hamburger:hover { background: #f0f5ff; }

        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #0f3460;
          border-radius: 2px;
          transition: all 0.25s ease;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          background: #fff;
          border-top: 1px solid #e8ecf2;
          padding: 12px 16px 20px;
          box-shadow: 0 8px 24px rgba(15,52,96,0.10);
        }

        .mobile-menu a {
          display: block;
          padding: 11px 16px;
          font-size: 15px;
          font-weight: 500;
          color: #334155;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }

        .mobile-menu a:hover { background: #f0f5ff; color: #0f3460; }

        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #0f3460, #1a5fa8);
          color: #fff !important;
          font-family: 'Outfit', sans-serif;
          font-weight: 600 !important;
          font-size: 14px !important;
          padding: 13px 16px !important;
          border-radius: 10px !important;
          margin-top: 8px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(15,52,96,0.18);
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: block; }
        }

        @media (min-width: 901px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <nav className="nav-root">
        <div className="nav-accent-bar" />

        <div className={`nav-main${scrolled ? " scrolled" : ""}`}>
          <div className="nav-inner">
            {/* Logo */}
            <Link href="/" className="logo-link">
              <div className="logo-img-wrap">
                <Image
                  src="/logo.png"
                  alt="BRB Data InfoTech"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="logo-text-block">
                <span className="logo-name">BRB Data InfoTech</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <ul className="nav-links">
              {navLinks.map((link, i) => (
                <li key={link.href} style={{ display: "flex", alignItems: "center" }}>
                  <Link href={link.href}>{link.label}</Link>
                  {i === navLinks.length - 2 && <span className="nav-divider" />}
                </li>
              ))}
              <li>
                <Link href="/contact" className="nav-cta">
                  Get Started <span className="cta-arrow">→</span>
                </Link>
              </li>
            </ul>

            {/* Mobile Hamburger */}
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
              Get Started →
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
