"use client";

import { useState } from "react";

/* ---------- ICONS ---------- */

const MapPin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Phone = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const Mail = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const Clock = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const Send = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const ArrowUpRight = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>
);

const ChevronDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const Shield = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

/* ---------- COMPONENT ---------- */

export default function ContactPage() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [focused, setFocused] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", interest: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Input style — changes on focus via state
  const inp = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "11px 14px",
    fontSize: 14,
    borderRadius: 8,
    border: `1px solid ${focused === name ? "#1e3a5f" : "#e2e8f0"}`,
    boxShadow: focused === name ? "0 0 0 3px rgba(30,58,95,0.08)" : "none",
    outline: "none",
    background: "#fff",
    color: "#0f172a",
    fontFamily: "inherit",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

  const contactCards = [
    {
      icon: MapPin,
      label: "Office Address",
      lines: ["30 N Gould St, Suite R", "Sheridan, WY 82801"],
      href: undefined,
    },
    {
      icon: Phone,
      label: "Phone",
      lines: ["+1 (512) 737-7073"],
      href: "tel:5127377073",
    },
    {
      icon: Mail,
      label: "Email",
      lines: ["hr@brbdatainfotech.com"],
      href: "mailto:hr@brbdatainfotech.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      lines: ["Monday – Friday", "9:00 AM – 5:00 PM CST"],
      href: undefined,
    },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh" }}>

      {/* ── HERO (unchanged) ─────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#0f172a", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h1 style={{ fontSize: 44, fontWeight: 700, color: "#fff" }}>
            Get In Touch
          </h1>
          <p style={{ marginTop: 16, color: "#94a3b8" }}>
            Connect with our team to discuss enterprise staffing needs or visa-sponsored opportunities.
          </p>
        </div>
      </section>

      {/* ── MAIN (unchanged grid) ────────────────────── */}
      <section style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 30 }}>

            {/* ── FORM (upgraded) ──────────────────────── */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>

              {/* Form header */}
              <div style={{ padding: "24px 32px 20px", borderBottom: "1px solid #f1f5f9" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", margin: 0 }}>Send a Message</h3>
                <p style={{ fontSize: 13, color: "#94a3b8", margin: "4px 0 0" }}>We&apos;ll get back to you within one business day.</p>
              </div>

              {/* Navy accent line */}
              <div style={{ height: 3, background: "linear-gradient(90deg, #1e3a5f, #2d6a9f 60%, transparent)" }} />

              <form onSubmit={handleSubmit} style={{ padding: "26px 32px 30px", display: "flex", flexDirection: "column", gap: 18 }}>

                {/* Name row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>
                      First Name <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      required
                      style={inp("firstName")}
                      value={form.firstName}
                      onFocus={() => setFocused("firstName")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>
                      Last Name <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      required
                      style={inp("lastName")}
                      value={form.lastName}
                      onFocus={() => setFocused("lastName")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email + Phone row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>
                      Email <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      required
                      style={inp("email")}
                      value={form.email}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>
                      Phone <span style={{ color: "#f87171" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                      required
                      style={inp("phone")}
                      value={form.phone}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Interest */}
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>
                    Area of Interest <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      required
                      style={{ ...inp("interest"), appearance: "none", paddingRight: "2.5rem", cursor: "pointer" }}
                      value={form.interest}
                      onFocus={() => setFocused("interest")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    >
                      <option value="">Select a topic...</option>
                      <option>IT Staffing &amp; Consulting</option>
                      <option>Visa Sponsorship</option>
                      <option>Career Opportunities</option>
                      <option>Green Card Processing</option>
                      <option>H-1B Transfer</option>
                      <option>Other</option>
                    </select>
                    <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#94a3b8" }}>
                      <ChevronDown />
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>
                    Message <span style={{ color: "#f87171" }}>*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your requirements..."
                    style={{ ...inp("message"), resize: "none" }}
                    value={form.message}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "13px",
                    background: loading ? "#94a3b8" : "linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 100%)",
                    color: "#fff",
                    borderRadius: 8,
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    fontFamily: "inherit",
                    boxShadow: loading ? "none" : "0 4px 14px rgba(30,58,95,0.30)",
                    transition: "all 0.2s",
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{ display: "inline-block", width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.7s linear infinite" }} />
                      Sending...
                    </>
                  ) : (
                    <><Send /> Submit Message</>
                  )}
                </button>

                {/* Success */}
                {status === "success" && (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "12px 14px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <p style={{ fontSize: 13, color: "#15803d", margin: 0 }}>Message sent! We&apos;ll get back to you within one business day.</p>
                  </div>
                )}

                {/* Error */}
                {status === "error" && (
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "12px 14px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <p style={{ fontSize: 13, color: "#dc2626", margin: 0 }}>Something went wrong. Please try again.</p>
                  </div>
                )}

                <p style={{ fontSize: 12, color: "#cbd5e1", textAlign: "center", margin: 0 }}>
                  By submitting you agree to our privacy policy.
                </p>

              </form>
            </div>

            {/* ── RIGHT CARDS (upgraded) ────────────────── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

              {/* Intro card */}
              <div style={{ borderRadius: 14, padding: "22px 20px", background: "linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 100%)", position: "relative", overflow: "hidden", marginBottom: 2 }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)", pointerEvents: "none" }} />
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(191,219,254,0.85)", margin: "0 0 8px" }}>Contact Information</p>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: "0 0 10px" }}>
                  We&apos;re ready to answer<br />your questions
                </h3>
                <p style={{ fontSize: 13, color: "rgba(191,219,254,0.75)", lineHeight: 1.65, margin: "0 0 16px" }}>
                  Reach out through any channel below. We respond within one business day.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                  <span style={{ fontSize: 12, color: "rgba(191,219,254,0.65)", fontWeight: 500 }}>Available Mon–Fri, 9AM–5PM CST</span>
                </div>
              </div>

              {/* Contact cards */}
              {contactCards.map(({ icon: Icon, label, lines, href }) => (
                <div
                  key={label}
                  onClick={() => href && window.open(href)}
                  onMouseEnter={() => href && setHoveredCard(label)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "14px 16px",
                    background: "#fff",
                    borderRadius: 12,
                    border: hoveredCard === label ? "1px solid rgba(30,58,95,0.25)" : "1px solid #e2e8f0",
                    cursor: href ? "pointer" : "default",
                    boxShadow: hoveredCard === label ? "0 6px 18px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
                    transform: hoveredCard === label ? "translateY(-2px)" : "translateY(0)",
                    transition: "all 0.2s",
                  }}
                >
                  {/* Icon badge */}
                  <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: "rgba(30,58,95,0.07)", border: "1px solid rgba(30,58,95,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e3a5f" }}>
                    <Icon size={18} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", margin: "0 0 3px" }}>{label}</p>
                    {lines.map((line, i) => (
                      <p key={i} style={{ fontSize: 13, color: "#0f172a", fontWeight: i === 0 ? 600 : 400, margin: 0, lineHeight: 1.5 }}>{line}</p>
                    ))}
                  </div>

                  {href && (
                    <span style={{ alignSelf: "center", color: "#2d6a9f", flexShrink: 0 }}>
                      <ArrowUpRight />
                    </span>
                  )}
                </div>
              ))}

              {/* Trust badge */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, flexShrink: 0, background: "rgba(30,58,95,0.07)", border: "1px solid rgba(30,58,95,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1e3a5f" }}>
                  <Shield />
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", margin: "0 0 2px" }}>Your data is secure</p>
                  <p style={{ fontSize: 12, color: "#94a3b8", margin: 0, lineHeight: 1.5 }}>We never share your information with third parties.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
