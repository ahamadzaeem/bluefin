export default function CapsuleSection() {
  return (
    <section className="capsule-section" id="difference">
      <div className="capsule-container">
        {/* Full-bleed background image */}
        <img 
          src="/assets/section2_bg.png" 
          alt="BlueFin Capsule Background" 
          className="capsule-bg-img"
        />

        {/* SVG Overlay for exact vector lines, dots, and gold icon circles */}
        <svg 
          viewBox="0 0 1672 941" 
          className="capsule-svg-overlay"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Glow filters for lines and dots */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. TOP-LEFT LINE (1000mg PURE FISH OIL) */}
          <polyline 
            points="239,308 319,308 608,475" 
            stroke="#d4af50" 
            strokeWidth="1.5" 
            fill="none"
            filter="url(#goldGlow)"
          />
          {/* Glowing dot at capsule */}
          <circle cx="608" cy="475" r="3" fill="#ffffff" />
          <circle cx="608" cy="475" r="7" stroke="#d4af50" strokeWidth="1" fill="none" opacity="0.8" />

          {/* 2. BOTTOM-LEFT LINE (120mg DHA) */}
          <polyline 
            points="239,572 549,572 531,623" 
            stroke="#d4af50" 
            strokeWidth="1.5" 
            fill="none"
            filter="url(#goldGlow)"
          />
          {/* Glowing dot at rock/capsule */}
          <circle cx="531" cy="623" r="3" fill="#ffffff" />
          <circle cx="531" cy="623" r="7" stroke="#d4af50" strokeWidth="1" fill="none" opacity="0.8" />

          {/* 3. TOP-RIGHT LINE (180mg EPA) */}
          <polyline 
            points="1418,299 1340,299 1024,491" 
            stroke="#d4af50" 
            strokeWidth="1.5" 
            fill="none"
            filter="url(#goldGlow)"
          />
          {/* Glowing dot at capsule */}
          <circle cx="1024" cy="491" r="3" fill="#ffffff" />
          <circle cx="1024" cy="491" r="7" stroke="#d4af50" strokeWidth="1" fill="none" opacity="0.8" />

          {/* 4. BOTTOM-RIGHT LINE (Daily WELLNESS) */}
          <polyline 
            points="1418,593 1328,593 1111,637" 
            stroke="#d4af50" 
            strokeWidth="1.5" 
            fill="none"
            filter="url(#goldGlow)"
          />
          {/* Glowing dot at rock */}
          <circle cx="1111" cy="637" r="3" fill="#ffffff" />
          <circle cx="1111" cy="637" r="7" stroke="#d4af50" strokeWidth="1" fill="none" opacity="0.8" />

          {/* ICON CIRCLES */}

          {/* TL Circle (Fish) */}
          <circle cx="211" cy="308" r="28" stroke="#d4af50" strokeWidth="1.5" fill="rgba(4, 15, 28, 0.4)" />
          <g transform="translate(196, 293)">
            {/* Fish Icon */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c4-4 8 0 12-4 3-2 6-1 8 1-3 4-7 5-11 3-3 2-6 1-9 0"/>
              <circle cx="17" cy="11" r="1" fill="#d4af50"/>
            </svg>
          </g>

          {/* BL Circle (Brain with Synaptic Lobes) */}
          <circle cx="211" cy="572" r="28" stroke="#d4af50" strokeWidth="1.5" fill="rgba(4, 15, 28, 0.4)" />
          <g transform="translate(196, 557)">
            {/* Redesigned Clinical Brain Vector */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
              <circle cx="8" cy="12" r="1" fill="#d4af50" />
              <circle cx="16" cy="12" r="1" fill="#d4af50" />
            </svg>
          </g>

          {/* TR Circle (Heart with ECG Pulse Wave) */}
          <circle cx="1446" cy="299" r="28" stroke="#d4af50" strokeWidth="1.5" fill="rgba(4, 15, 28, 0.4)" />
          <g transform="translate(1431, 284)">
            {/* Heart + ECG Pulse Waveform Vector */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M3.2 12h3.5l1.8-3 2.5 6 1.8-3h4.5" />
            </svg>
          </g>

          {/* BR Circle (Human Figure with Coiled Vitality Ribbon) */}
          <circle cx="1446" cy="593" r="28" stroke="#d4af50" strokeWidth="1.5" fill="rgba(4, 15, 28, 0.4)" />
          <g transform="translate(1431, 578)">
            {/* Coiled Vitality Ribbon around Human Figure */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="4.5" r="2" />
              <path d="M12 7v10" />
              <path d="M9 10.5h6" />
              <path d="M10 21l2-4 2 4" />
              {/* Coiled helical ribbon surrounding body */}
              <path d="M5 11c1.5-2 4.5-2 7 0s5.5 2 7 0" opacity="0.85" strokeDasharray="1 1" />
              <path d="M5 15c1.5-2 4.5-2 7 0s5.5 2 7 0" opacity="0.85" />
            </svg>
          </g>
        </svg>

        {/* HTML Text Overlay Layer */}
        <div className="capsule-text-layer">
          {/* Header */}
          <div className="capsule-header-center">
            <span className="capsule-eyebrow-text">T H E &nbsp; G O O D N E S S &nbsp; W I T H I N</span>
            <h2 className="capsule-title-text">
              What goes inside<br />every BlueFin capsule.
            </h2>
          </div>

          {/* Top Left Text */}
          <div className="capsule-card-text tl-card">
            <div className="card-val">1000mg</div>
            <div className="card-ttl">PURE FISH OIL</div>
            <p className="card-desc">Sustainably sourced from Indian pelagic catch (18/12 gold ratio).</p>
          </div>

          {/* Bottom Left Text */}
          <div className="capsule-card-text bl-card">
            <div className="card-val">120mg</div>
            <div className="card-ttl">DHA</div>
            <p className="card-desc">Supports brain neuroplasticity, memory recall and cognitive sharpness.</p>
          </div>

          {/* Top Right Text */}
          <div className="capsule-card-text tr-card">
            <div className="card-val">180mg</div>
            <div className="card-ttl">EPA</div>
            <p className="card-desc">Supports cardiovascular arterial elasticity and healthy cellular response.</p>
          </div>

          {/* Bottom Right Text */}
          <div className="capsule-card-text br-card">
            <div className="card-val">Daily</div>
            <div className="card-ttl">WELLNESS</div>
            <p className="card-desc">Advanced enteric-coated softgel for full-body vitality with zero fishy burps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
