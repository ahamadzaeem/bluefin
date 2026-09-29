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

          {/* 1. TOP-LEFT LINE (1000mg FISH OIL) */}
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

          {/* 2. BOTTOM-LEFT LINE (450mg DHA) */}
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

          {/* 3. TOP-RIGHT LINE (650mg EPA) */}
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

          {/* BL Circle (Brain) */}
          <circle cx="211" cy="572" r="28" stroke="#d4af50" strokeWidth="1.5" fill="rgba(4, 15, 28, 0.4)" />
          <g transform="translate(196, 557)">
            {/* Brain Icon */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4.5a4.5 4.5 0 0 0-4.5 4.5c0 1.5.7 2.8 1.8 3.7A4.5 4.5 0 0 0 7.5 17a4.5 4.5 0 0 0 4.5 4.5M12 4.5a4.5 4.5 0 0 1 4.5 4.5c0 1.5-.7 2.8-1.8 3.7a4.5 4.5 0 0 1 1.8 4.3 4.5 4.5 0 0 1-4.5 4.5M12 4.5v17"/>
            </svg>
          </g>

          {/* TR Circle (Heart) */}
          <circle cx="1446" cy="299" r="28" stroke="#d4af50" strokeWidth="1.5" fill="rgba(4, 15, 28, 0.4)" />
          <g transform="translate(1431, 284)">
            {/* Heart Icon */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </g>

          {/* BR Circle (Joint) */}
          <circle cx="1446" cy="593" r="28" stroke="#d4af50" strokeWidth="1.5" fill="rgba(4, 15, 28, 0.4)" />
          <g transform="translate(1431, 578)">
            {/* Joint / Body Wellness Icon */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#d4af50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="2.5"/>
              <path d="M12 7.5v6M9 10.5h6M9.5 13.5l-2 7M14.5 13.5l2 7"/>
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
            <div className="card-ttl">FISH OIL</div>
            <p className="card-desc">A rich source of essential Omega-3 fatty acids.</p>
          </div>

          {/* Bottom Left Text */}
          <div className="capsule-card-text bl-card">
            <div className="card-val">450mg</div>
            <div className="card-ttl">DHA</div>
            <p className="card-desc">Supports brain function and cognitive health.</p>
          </div>

          {/* Top Right Text */}
          <div className="capsule-card-text tr-card">
            <div className="card-val">650mg</div>
            <div className="card-ttl">EPA</div>
            <p className="card-desc">Supports heart health and healthy inflammation response.</p>
          </div>

          {/* Bottom Right Text */}
          <div className="capsule-card-text br-card">
            <div className="card-val">Daily</div>
            <div className="card-ttl">WELLNESS</div>
            <p className="card-desc">Helps support joint, eye and overall well-being.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
