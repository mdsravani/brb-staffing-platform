"use client";

import { useState } from "react";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
);

export default function CareersPage() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [hoveredDomain, setHoveredDomain] = useState<number | null>(null);

  // Resume form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFile = (f: File) => {
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(f.type)) {
      alert("Please upload a PDF or Word document.");
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      alert("File size must be under 5MB.");
      return;
    }
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { alert("Please attach your resume."); return; }
    setLoading(true);
    setStatus("idle");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("domain", domain);
      formData.append("resume", file);

      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setPhone(""); setDomain(""); setFile(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      title: "Structured Resume Marketing",
      desc: "Professional profile presentation to our network of vendor partners and enterprise clients across the US.",
      detail: "We craft your profile to highlight the right skills for the right roles.",
      accent: "#1d4ed8", bg: "#eff6ff", border: "#bfdbfe",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    },
    {
      title: "Enterprise Client Network",
      desc: "Access to our established partnerships with Fortune 500 clients and top-tier enterprises spanning multiple industries nationwide.",
      detail: "Direct connections to enterprise clients — no extra middlemen.",
      accent: "#0369a1", bg: "#f0f9ff", border: "#bae6fd",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/></svg>,
    },
    {
      title: "Visa Sponsorship",
      desc: "Full H-1B sponsorship, OPT/STEM OPT support, and Green Card processing for eligible IT professionals.",
      detail: "We handle all immigration paperwork so you can focus on your career.",
      accent: "#065f46", bg: "#f0fdf4", border: "#bbf7d0",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
    {
      title: "Ongoing Engagement Support",
      desc: "Dedicated communication and coordination throughout your placement — from onboarding to project completion.",
      detail: "A real person available to support you at every stage.",
      accent: "#7c3aed", bg: "#faf5ff", border: "#ddd6fe",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
    {
      title: "Competitive Compensation",
      desc: "Market-aligned pay rates, benefits, and transparent payroll processes for all engaged consultants.",
      detail: "W2 employment with full benefits eligibility for long-term placements.",
      accent: "#b45309", bg: "#fffbeb", border: "#fde68a",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    },
    {
      title: "Long-Term Career Growth",
      desc: "We focus on long-term placements and career advancement — not just filling seats for short-term contracts.",
      detail: "Many of our consultants grow into multi-year enterprise engagements.",
      accent: "#0f766e", bg: "#f0fdfa", border: "#99f6e4",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    },
  ];

  const domains = [
    { title: "Software Development", tags: ["Java", "Python", ".NET", "React", "Node.js"] },
    { title: "Data & Analytics", tags: ["SQL", "Power BI", "Tableau", "Spark", "ETL"] },
    { title: "Cloud & DevOps", tags: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"] },
    { title: "QA & Testing", tags: ["Selenium", "JIRA", "TestNG", "API Testing", "Agile"] },
    { title: "Business Analysis", tags: ["Requirements", "UAT", "Agile", "Scrum", "BPMN"] },
    { title: "Project Management", tags: ["PMP", "Scrum Master", "JIRA", "Waterfall", "PMO"] },
  ];

  const inp = (focused: boolean): React.CSSProperties => ({
    width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 8,
    border: `1px solid ${focused ? "#1e3a5f" : "#e2e8f0"}`,
    boxShadow: focused ? "0 0 0 3px rgba(30,58,95,0.08)" : "none",
    outline: "none", background: "#fff", color: "#0f172a",
    fontFamily: "inherit", boxSizing: "border-box" as const,
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

  return (
    <main className="w-full">

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ padding: "88px 24px 80px", background: "linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #1a4b8c 100%)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -80, right: "10%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 100, padding: "5px 16px", marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#bfdbfe" }}>Now Onboarding IT Consultants</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#f8fafc", margin: "0 0 20px", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
            Career Opportunities
          </h1>
          <p style={{ fontSize: 17, color: "#93c5fd", lineHeight: 1.75, maxWidth: 520, margin: "0 auto 36px" }}>
            Partner with us to explore IT consulting opportunities across the United States — with visa sponsorship and long-term career support.
          </p>
          <a href="#apply" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#fff", color: "#1e3a5f", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            Submit Your Resume <ArrowRight />
          </a>
        </div>
      </section>

      {/* ── WHY WORK WITH US ─────────────────────────── */}
      <section style={{ padding: "88px 24px", background: "#f8fafc", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #1e3a5f 0%, #2d6a9f 50%, transparent 100%)" }} />
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1e3a5f" }}>Why Choose Us</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "end" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.15 }}>Why Work With BRB Data InfoTech</h2>
              <p style={{ fontSize: 15, color: "#64748b", margin: 0, lineHeight: 1.75 }}>We go beyond job placement — we invest in your long-term career success in the United States.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {benefits.map((item, i) => (
              <div key={i} onMouseEnter={() => setHoveredBenefit(i)} onMouseLeave={() => setHoveredBenefit(null)}
                style={{ borderRadius: 14, padding: "26px 24px", background: "#fff", border: hoveredBenefit === i ? `1.5px solid ${item.accent}` : "1.5px solid #e2e8f0", boxShadow: hoveredBenefit === i ? "0 10px 32px rgba(0,0,0,0.10)" : "0 1px 6px rgba(0,0,0,0.04)", transition: "all 0.22s ease", transform: hoveredBenefit === i ? "translateY(-3px)" : "translateY(0)", position: "relative", overflow: "hidden", cursor: "default" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: hoveredBenefit === i ? item.accent : "transparent", transition: "all 0.22s", borderRadius: "14px 14px 0 0" }} />
                <div style={{ width: 44, height: 44, borderRadius: 12, background: hoveredBenefit === i ? item.bg : "#f8fafc", border: `1px solid ${hoveredBenefit === i ? item.border : "#f1f5f9"}`, display: "flex", alignItems: "center", justifyContent: "center", color: hoveredBenefit === i ? item.accent : "#94a3b8", transition: "all 0.22s", marginBottom: 16 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: hoveredBenefit === i ? "#0f172a" : "#1e293b", margin: "0 0 8px", transition: "color 0.22s" }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 12px", lineHeight: 1.7 }}>{item.desc}</p>
                <div style={{ height: 1, background: "#f1f5f9", margin: "0 0 12px" }} />
                <p style={{ fontSize: 12, color: hoveredBenefit === i ? "#475569" : "#94a3b8", margin: 0, lineHeight: 1.65, transition: "color 0.22s" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY DOMAINS ───────────────────────── */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1e3a5f" }}>Open Domains</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "end" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.15 }}>Technology Domains We Hire In</h2>
              <p style={{ fontSize: 15, color: "#64748b", margin: 0, lineHeight: 1.75 }}>We continuously onboard consultants across these domains for enterprise client placements nationwide.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {domains.map((d, i) => (
              <div key={i} onMouseEnter={() => setHoveredDomain(i)} onMouseLeave={() => setHoveredDomain(null)}
                style={{ borderRadius: 14, padding: "24px 22px", background: "#fff", border: hoveredDomain === i ? "1.5px solid #1e3a5f" : "1.5px solid #e2e8f0", boxShadow: hoveredDomain === i ? "0 8px 28px rgba(0,0,0,0.10)" : "0 1px 6px rgba(0,0,0,0.04)", transition: "all 0.22s ease", transform: hoveredDomain === i ? "translateY(-2px)" : "translateY(0)", cursor: "default" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: hoveredDomain === i ? "#1e3a5f" : "#0f172a", margin: "0 0 14px", transition: "color 0.22s" }}>{d.title}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {d.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 600, color: hoveredDomain === i ? "#1d4ed8" : "#64748b", background: hoveredDomain === i ? "#dbeafe" : "#f1f5f9", padding: "3px 10px", borderRadius: 20, transition: "all 0.22s" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME SUBMISSION FORM ───────────────────── */}
      <section id="apply" style={{ padding: "88px 24px", background: "#f8fafc", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #1e3a5f 0%, #2d6a9f 50%, transparent 100%)" }} />
        <div style={{ maxWidth: 760, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1e3a5f" }}>Apply Now</span>
              <div style={{ width: 28, height: 2, background: "#1e3a5f", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0f172a", margin: "0 0 12px", letterSpacing: "-0.02em" }}>Submit Your Resume</h2>
            <p style={{ fontSize: 15, color: "#64748b", margin: 0, lineHeight: 1.75 }}>
              We review every submission and respond within 2 business days.
            </p>
          </div>

          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
            <div style={{ padding: "24px 32px 20px", borderBottom: "1px solid #f1f5f9" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", margin: 0 }}>Career Application</h3>
              <p style={{ fontSize: 13, color: "#94a3b8", margin: "4px 0 0" }}>Fill in your details and attach your resume below.</p>
            </div>
            <div style={{ height: 3, background: "linear-gradient(90deg, #1e3a5f, #2d6a9f 60%, transparent)" }} />

            <form onSubmit={handleSubmit} style={{ padding: "26px 32px 30px", display: "flex", flexDirection: "column", gap: 18 }}>

              {/* Name + Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>Full Name <span style={{ color: "#f87171" }}>*</span></label>
                  <input type="text" required placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} style={inp(false)} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>Email <span style={{ color: "#f87171" }}>*</span></label>
                  <input type="email" required placeholder="john@email.com" value={email} onChange={e => setEmail(e.target.value)} style={inp(false)} />
                </div>
              </div>

              {/* Phone + Domain */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>Phone <span style={{ color: "#f87171" }}>*</span></label>
                  <input type="tel" required placeholder="+1 (000) 000-0000" value={phone} onChange={e => setPhone(e.target.value)} style={inp(false)} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>Technology Domain <span style={{ color: "#f87171" }}>*</span></label>
                  <select required value={domain} onChange={e => setDomain(e.target.value)} style={{ ...inp(false), appearance: "none", cursor: "pointer" }}>
                    <option value="">Select domain...</option>
                    <option>Software Development</option>
                    <option>Data &amp; Analytics</option>
                    <option>Cloud &amp; DevOps</option>
                    <option>QA &amp; Testing</option>
                    <option>Business Analysis</option>
                    <option>Project Management</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 6 }}>Resume <span style={{ color: "#f87171" }}>*</span></label>

                <div
                  onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
                  onClick={() => document.getElementById("resumeInput")?.click()}
                  style={{
                    border: `2px dashed ${dragOver ? "#1e3a5f" : file ? "#10b981" : "#e2e8f0"}`,
                    borderRadius: 10, padding: "28px 20px", textAlign: "center",
                    background: dragOver ? "#eff6ff" : file ? "#f0fdf4" : "#f8fafc",
                    cursor: "pointer", transition: "all 0.22s",
                  }}
                >
                  <input
                    id="resumeInput"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    style={{ display: "none" }}
                    onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: file ? "#d1fae5" : "#e0e7ff", display: "flex", alignItems: "center", justifyContent: "center", color: file ? "#065f46" : "#1d4ed8" }}>
                      {file ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      ) : (
                        <UploadIcon />
                      )}
                    </div>
                    {file ? (
                      <>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#065f46", margin: 0 }}>{file.name}</p>
                        <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>Click to change file</p>
                      </>
                    ) : (
                      <>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", margin: 0 }}>Click to upload or drag &amp; drop</p>
                        <p style={{ fontSize: 12, color: "#94a3b8", margin: 0 }}>PDF, DOC, DOCX — max 5MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "13px", background: loading ? "#94a3b8" : "linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 100%)",
                  color: "#fff", borderRadius: 8, border: "none", cursor: loading ? "not-allowed" : "pointer",
                  fontSize: 14, fontWeight: 600, fontFamily: "inherit",
                  boxShadow: loading ? "none" : "0 4px 14px rgba(30,58,95,0.30)", transition: "all 0.2s",
                }}
              >
                {loading ? (
                  <>
                    <span style={{ display: "inline-block", width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "spin 0.7s linear infinite" }} />
                    Submitting...
                  </>
                ) : (
                  <>Submit Application <ArrowRight /></>
                )}
              </button>

              {status === "success" && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "12px 14px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <p style={{ fontSize: 13, color: "#15803d", margin: 0 }}>Resume submitted! We&apos;ll review and respond within 2 business days.</p>
                </div>
              )}

              {status === "error" && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "12px 14px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <p style={{ fontSize: 13, color: "#dc2626", margin: 0 }}>Something went wrong. Please try again or email us directly.</p>
                </div>
              )}

            </form>
          </div>
        </div>
      </section>

      {/* ── WHAT WE LOOK FOR ─────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #2d6a9f 100%)", padding: "56px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent)", pointerEvents: "none" }} />
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(96,165,250,0.15)", border: "1px solid rgba(96,165,250,0.25)", borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#93c5fd" }}>Ideal Candidates</span>
              </div>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#f8fafc", margin: "0 0 14px", letterSpacing: "-0.02em" }}>What We Look For</h2>
              <p style={{ fontSize: 14, color: "rgba(191,219,254,0.80)", lineHeight: 1.8, margin: 0 }}>
                We work with IT professionals at all experience levels — from recent graduates on OPT to senior consultants seeking H-1B sponsorship or transfer.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Bachelor&apos;s degree in IT, CS, or related field", "1+ years of relevant project experience", "Valid work authorization or visa sponsorship eligibility", "Strong communication and client-facing skills", "Willingness to work on-site or hybrid in the US"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: 5, background: "rgba(96,165,250,0.20)", border: "1px solid rgba(96,165,250,0.30)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", flexShrink: 0, marginTop: 1 }}>
                    <CheckIcon />
                  </div>
                  <span style={{ fontSize: 13.5, color: "rgba(241,245,249,0.85)", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  );
}
