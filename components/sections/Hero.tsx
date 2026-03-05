"use client";
import React, { useState, useEffect } from "react";

type Service = { title: string; desc: string; icon: React.ReactElement };



const services: Service[] = [
  {
    title: "IT Staffing & Consulting",
    desc: "End-to-end placement of qualified IT professionals across enterprise and mid-market organizations.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    title: "H-1B Visa Sponsorship",
    desc: "Direct employer-of-record sponsorship with full USCIS processing and legal support — zero third parties.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    title: "Workforce Solutions",
    desc: "Scalable contract, contract-to-hire, and direct placement models tailored to your project needs.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
];

const checks = [
  "Direct H-1B Sponsorship — No Third-Party Vendors",
  "OPT, STEM OPT & CPT Candidates Supported",
  "Nationwide Placements Across 30+ U.S. States",
  "100% E-Verify Compliant & USCIS Authorized",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", background: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,700;1,9..144,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideRight { from{opacity:0;transform:translateX(32px)} to{opacity:1;transform:translateX(0)} }
        .a1{animation:${mounted?"fadeUp .6s ease .05s both":"none"}}
        .a2{animation:${mounted?"fadeUp .6s ease .15s both":"none"}}
        .a3{animation:${mounted?"fadeUp .6s ease .25s both":"none"}}
        .a4{animation:${mounted?"fadeUp .6s ease .35s both":"none"}}
        .a5{animation:${mounted?"fadeUp .6s ease .44s both":"none"}}
        .ai{animation:${mounted?"slideRight .7s ease .2s both":"none"}}
        .btn-p {
          display:inline-flex;align-items:center;gap:9px;
          background:#0f172a;color:#fff;padding:15px 32px;border-radius:7px;
          font-weight:700;font-size:14px;text-decoration:none;border:none;cursor:pointer;font-family:inherit;
          transition:background .2s,transform .2s,box-shadow .2s;
        }
        .btn-p:hover{background:#1e293b;transform:translateY(-2px);box-shadow:0 14px 32px rgba(15,23,42,.22)}
        .btn-o {
          display:inline-flex;align-items:center;gap:9px;
          background:transparent;color:#0f172a;padding:14px 28px;border-radius:7px;
          font-weight:600;font-size:14px;text-decoration:none;border:1.5px solid #cbd5e1;cursor:pointer;font-family:inherit;
          transition:all .2s;
        }
        .btn-o:hover{border-color:#0f172a;transform:translateY(-2px)}
        .svc {
          background:#fff;border:1.5px solid #e8edf3;border-radius:14px;padding:28px 24px;
          transition:all .22s;cursor:default;position:relative;overflow:hidden;
        }
        .svc:hover{border-color:#c7d9f5;box-shadow:0 16px 40px rgba(15,23,42,.08);transform:translateY(-4px)}
        .svc::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#1a56db,#3b82f6);opacity:0;transition:opacity .22s}
        .svc:hover::before{opacity:1}
      `}</style>

      {/* Accent bar */}
      <div style={{height:3,background:"linear-gradient(90deg,#1a56db 0%,#3b82f6 50%,#06b6d4 100%)"}}/>

      {/* ── HERO ── */}
      <section style={{background:"#fff",position:"relative",overflow:"hidden",minHeight:"90vh",display:"flex",alignItems:"center"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(#e2e8f0 1px, transparent 1px)",backgroundSize:"32px 32px",opacity:0.55}}/>
        <div style={{position:"absolute",top:0,right:0,bottom:0,width:"52%",background:"linear-gradient(105deg, transparent 0%, #f0f6ff 60%, #e8f2ff 100%)",pointerEvents:"none"}}/>

        <div style={{maxWidth:1200,margin:"0 auto",padding:"80px 40px",width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center",position:"relative"}}>

          {/* LEFT */}
          <div>
            <div className="a1" style={{display:"inline-flex",alignItems:"center",gap:8,background:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"1px solid #bfdbfe",borderRadius:24,padding:"6px 16px",marginBottom:28}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:"#1a56db",flexShrink:0}}/>
              <span style={{fontSize:11.5,fontWeight:700,color:"#1a56db",letterSpacing:"0.08em",textTransform:"uppercase"}}>U.S.-Based IT Staffing & H-1B Sponsorship</span>
            </div>

            <h1 className="a2" style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(36px,4.2vw,56px)",fontWeight:700,color:"#0f172a",margin:"0 0 6px",lineHeight:1.08,letterSpacing:"-0.028em"}}>
              Enterprise IT Talent,
            </h1>
            <h1 className="a2" style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(36px,4.2vw,56px)",fontWeight:700,margin:"0 0 24px",lineHeight:1.08,letterSpacing:"-0.028em",background:"linear-gradient(135deg,#1a56db 0%,#3b82f6 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontStyle:"italic"}}>
              Placed With Precision.
            </h1>

            <p className="a3" style={{fontSize:16,color:"#64748b",lineHeight:1.8,marginBottom:34,maxWidth:500}}>
              BRB Data InfoTech is a U.S.-based IT staffing firm specializing in direct H-1B sponsorship, immigration-compliant hiring, and enterprise workforce deployment — with zero third-party involvement.
            </p>

            <div className="a4" style={{display:"flex",flexDirection:"column",gap:10,marginBottom:38}}>
              {checks.map(item => (
                <div key={item} style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{width:20,height:20,borderRadius:"50%",background:"#0f172a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{fontSize:14,color:"#334155",fontWeight:500}}>{item}</span>
                </div>
              ))}
            </div>

            <div className="a5" style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <a href="/contact" className="btn-p">
                Partner With Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="/careers" className="btn-o">
                Submit Your Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ai" style={{position:"relative"}}>
            <div style={{borderRadius:24,overflow:"hidden",boxShadow:"0 32px 80px rgba(15,23,42,0.18),0 8px 24px rgba(15,23,42,0.1)",position:"relative"}}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=820&q=90&auto=format&fit=crop&crop=center"
                alt="Modern enterprise office building"
                style={{width:"100%",height:420,objectFit:"cover",display:"block"}}
              />
              <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 60%,rgba(5,10,25,0.45) 100%)"}}/>
            </div>


            {/* Floating: compliance */}
            <div style={{position:"absolute",bottom:-20,right:-24,background:"#0f172a",borderRadius:14,padding:"16px 20px",boxShadow:"0 12px 36px rgba(15,23,42,0.3)",display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:36,height:36,borderRadius:8,background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:18}}>🛡️</div>
              <div>
                <p style={{fontSize:13,fontWeight:700,color:"#fff",margin:0}}>E-Verify Certified</p>
                <p style={{fontSize:11,color:"rgba(255,255,255,0.45)",margin:"2px 0 0",fontWeight:500}}>USCIS Authorized Sponsor</p>
              </div>
            </div>

            {/* Floating: H-1B */}
            <div style={{position:"absolute",top:"38%",right:-22,background:"linear-gradient(135deg,#7c3aed,#a78bfa)",borderRadius:12,padding:"12px 16px",boxShadow:"0 8px 24px rgba(124,58,237,0.35)",textAlign:"center"}}>
              <p style={{fontSize:15,fontWeight:800,color:"#fff",margin:0,letterSpacing:"-0.02em"}}>H-1B</p>
              <p style={{fontSize:9.5,color:"rgba(255,255,255,0.8)",margin:"2px 0 0",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em"}}>Direct Sponsor</p>
            </div>
          </div>
        </div>
      </section>


      {/* ── SERVICES ── */}
      <section style={{background:"#f8fafc",padding:"84px 40px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:52}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:14}}>
              <div style={{width:26,height:1.5,background:"#cbd5e1",borderRadius:2}}/>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#1a56db"}}>What We Do</span>
              <div style={{width:26,height:1.5,background:"#cbd5e1",borderRadius:2}}/>
            </div>
            <h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(28px,3vw,40px)",fontWeight:700,color:"#0f172a",margin:0,letterSpacing:"-0.022em"}}>Our Core Service Lines</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22}}>
            {services.map((svc,i)=>(
              <div key={i} className="svc">
                <div style={{width:50,height:50,borderRadius:12,background:"#0f172a",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,color:"#fff"}}>
                  {svc.icon}
                </div>
                <h3 style={{fontSize:16.5,fontWeight:700,color:"#0f172a",margin:"0 0 10px",letterSpacing:"-0.01em"}}>{svc.title}</h3>
                <p style={{fontSize:14,color:"#64748b",lineHeight:1.75,margin:0}}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
