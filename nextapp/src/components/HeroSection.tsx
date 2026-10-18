'use client';
import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 120;
const getFrameSrc = (i: number) =>
  `/hero_frames/frame_${String(i + 1).padStart(4, '0')}.jpg`;

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const scrollToStep = (stepIdx: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const maxScroll = section.offsetHeight - window.innerHeight;
    const targets = [0, maxScroll * 0.45, maxScroll * 0.88];
    const targetY = section.offsetTop + targets[stepIdx];
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1920;
    canvas.height = 1080;

    const images: HTMLImageElement[] = [];
    let loaded = 0;
    const startTime = Date.now();

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loaded++;
        setProgress(Math.round((loaded / FRAME_COUNT) * 100));
        if (loaded === 1) ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
        
        // Hide loader once all frames are loaded, ensuring at least a 3-second wait
        if (loaded === FRAME_COUNT) {
          const timeElapsed = Date.now() - startTime;
          const remainingTime = Math.max(0, 3000 - timeElapsed);
          
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = 'auto';
          }, remainingTime);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section || !canvas) return;
      const scrollTop = window.scrollY;
      const maxScroll = section.offsetHeight - window.innerHeight;
      let frac = Math.max(0, Math.min(1, scrollTop / maxScroll));
      const frameIdx = Math.min(FRAME_COUNT - 1, Math.floor(frac * FRAME_COUNT));

      requestAnimationFrame(() => {
        const img = imagesRef.current[frameIdx];
        if (img?.complete) ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 3-Part Split Text interpolation
        // Step 1: 0.00 to 0.30 (Origin)
        let s1Opacity = 0;
        let s1Y = 0;
        if (frac <= 0.22) {
          s1Opacity = 1;
          s1Y = 0;
        } else if (frac < 0.30) {
          const t = (frac - 0.22) / 0.08;
          s1Opacity = 1 - t;
          s1Y = -24 * t;
        } else {
          s1Opacity = 0;
          s1Y = -24;
        }

        // Step 2: 0.30 to 0.65 (Extraction & Purity)
        let s2Opacity = 0;
        let s2Y = 24;
        if (frac < 0.30) {
          s2Opacity = 0;
          s2Y = 24;
        } else if (frac < 0.38) {
          const t = (frac - 0.30) / 0.08;
          s2Opacity = t;
          s2Y = 24 * (1 - t);
        } else if (frac <= 0.57) {
          s2Opacity = 1;
          s2Y = 0;
        } else if (frac < 0.65) {
          const t = (frac - 0.57) / 0.08;
          s2Opacity = 1 - t;
          s2Y = -24 * t;
        } else {
          s2Opacity = 0;
          s2Y = -24;
        }

        // Step 3: 0.65 to 1.00 (Family Wellness & CTAs)
        let s3Opacity = 0;
        let s3Y = 28;
        if (frac < 0.65) {
          s3Opacity = 0;
          s3Y = 28;
        } else if (frac < 0.75) {
          const t = (frac - 0.65) / 0.10;
          s3Opacity = t;
          s3Y = 28 * (1 - t);
        } else {
          s3Opacity = 1;
          s3Y = 0;
        }

        const s1 = step1Ref.current;
        const s2 = step2Ref.current;
        const s3 = step3Ref.current;

        if (s1) {
          s1.style.opacity = String(s1Opacity);
          s1.style.transform = `translateY(${s1Y}px)`;
          s1.style.pointerEvents = s1Opacity > 0.5 ? 'auto' : 'none';
        }
        if (s2) {
          s2.style.opacity = String(s2Opacity);
          s2.style.transform = `translateY(${s2Y}px)`;
          s2.style.pointerEvents = s2Opacity > 0.5 ? 'auto' : 'none';
        }
        if (s3) {
          s3.style.opacity = String(s3Opacity);
          s3.style.transform = `translateY(${s3Y}px)`;
          s3.style.pointerEvents = s3Opacity > 0.5 ? 'auto' : 'none';
        }

        // Update active step
        if (frac < 0.30) {
          setActiveStep(1);
        } else if (frac < 0.65) {
          setActiveStep(2);
        } else {
          setActiveStep(3);
        }

        // Stepper thumb progress
        const bar1 = document.getElementById('stepper-fill-1');
        const bar2 = document.getElementById('stepper-fill-2');
        const bar3 = document.getElementById('stepper-fill-3');
        if (bar1) {
          const p1 = Math.min(100, Math.max(0, (frac / 0.30) * 100));
          bar1.style.width = `${p1}%`;
        }
        if (bar2) {
          const p2 = Math.min(100, Math.max(0, ((frac - 0.30) / 0.35) * 100));
          bar2.style.width = `${p2}%`;
        }
        if (bar3) {
          const p3 = Math.min(100, Math.max(0, ((frac - 0.65) / 0.35) * 100));
          bar3.style.width = `${p3}%`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <div 
        style={{
          position: 'fixed', inset: 0, zIndex: 99999, 
          backgroundColor: '#011221', display: 'flex', flexDirection: 'column', 
          alignItems: 'center', justifyContent: 'center', 
          opacity: loading ? 1 : 0, pointerEvents: loading ? 'all' : 'none',
          transition: 'opacity 0.6s ease-out'
        }}
      >
        <img src="/assets/logo.png" alt="BlueFin" style={{ width: '80px', marginBottom: '2rem', filter: 'brightness(0) invert(1)' }} />
        <div style={{ width: '200px', height: '2px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#38bdf8', transition: 'width 0.1s linear' }} />
        </div>
      </div>

      <section className="hero-section" id="hero" ref={sectionRef}>
        <div className="hero-sticky-wrap">
          {/* Background Canvas — Always crisp and luminous, no blackout */}
          <div className="hero-bg-media">
            <canvas ref={canvasRef} className="hero-canvas" />
            <div className="hero-bg-overlay" />
          </div>

          {/* Stepper Navigation Pills */}
          <div className="hero-stepper-nav" aria-label="Timeline navigation">
            <button 
              type="button"
              className={`hero-stepper-btn ${activeStep === 1 ? 'active' : ''}`}
              onClick={() => scrollToStep(0)}
              aria-label="Step 1: Pristine Origin"
            >
              <span className="stepper-idx">01</span>
              <span className="stepper-text">Origin</span>
              <span className="stepper-track"><span id="stepper-fill-1" className="stepper-thumb" /></span>
            </button>
            <button 
              type="button"
              className={`hero-stepper-btn ${activeStep === 2 ? 'active' : ''}`}
              onClick={() => scrollToStep(1)}
              aria-label="Step 2: Molecular Distillation"
            >
              <span className="stepper-idx">02</span>
              <span className="stepper-text">Purification</span>
              <span className="stepper-track"><span id="stepper-fill-2" className="stepper-thumb" /></span>
            </button>
            <button 
              type="button"
              className={`hero-stepper-btn ${activeStep === 3 ? 'active' : ''}`}
              onClick={() => scrollToStep(2)}
              aria-label="Step 3: Family Wellness"
            >
              <span className="stepper-idx">03</span>
              <span className="stepper-text">Wellness</span>
              <span className="stepper-track"><span id="stepper-fill-3" className="stepper-thumb" /></span>
            </button>
          </div>

          {/* 3-Part Dynamic Text Container — positioned on the left, never hindering the bottle */}
          <div className="hero-container">
            {/* PART 1: ORIGIN */}
            <div className="hero-step hero-step-1" ref={step1Ref} style={{ opacity: 1, transform: 'translateY(0)' }}>
              <div className="hero-eyebrow">
                <span className="eyebrow-dot" />
                <span className="eyebrow-label-text">PRISTINE DEEP WATERS</span>
              </div>
              <h2 className="hero-title">
                Untouched cold waters.<br />
                <span className="cyan-line">Pure by nature.</span>
              </h2>
              <p className="hero-subtitle">
                Responsibly harvested from clean sub-zero pelagic waters, naturally rich in potent Omega-3 fatty acids and shielded from coastal pollutants.
              </p>
              <div className="hero-step-tags">
                <span className="step-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                  Sub-Zero Pelagic Waters
                </span>
                <span className="step-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/></svg>
                  Wild-Caught Purity
                </span>
              </div>
            </div>

            {/* PART 2: PURIFICATION */}
            <div className="hero-step hero-step-2" ref={step2Ref} style={{ opacity: 0, transform: 'translateY(24px)', pointerEvents: 'none' }}>
              <div className="hero-eyebrow">
                <span className="eyebrow-dot" />
                <span className="eyebrow-label-text">MOLECULAR DISTILLATION</span>
              </div>
              <h2 className="hero-title">
                Triple-purified.<br />
                <span className="cyan-line">Zero fishy aftertaste.</span>
              </h2>
              <p className="hero-subtitle">
                Cold-distilled at the molecular level to remove heavy metals, mercury, and odors while locking in maximum bioavailable EPA &amp; DHA potency.
              </p>
              <div className="hero-step-tags">
                <span className="step-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Zero Fishy Burps
                </span>
                <span className="step-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Heavy Metals Tested
                </span>
              </div>
            </div>

            {/* PART 3: FAMILY WELLNESS & ACTION */}
            <div className="hero-step hero-step-3" ref={step3Ref} style={{ opacity: 0, transform: 'translateY(28px)', pointerEvents: 'none' }}>
              <div className="hero-eyebrow">
                <span className="eyebrow-dot" />
                <span className="eyebrow-label-text">PURE OMEGA-3</span>
              </div>
              <h1 className="hero-title">
                The foundation for your family&apos;s <span className="cyan-line">wellness.</span>
              </h1>
              <p className="hero-subtitle">
                Responsibly sourced from deep cold waters.<br />
                Expertly capsulated for maximum purity and daily vitality.
              </p>

              {/* CTAs */}
              <div className="hero-cta-group">
                <a href="#products" className="btn btn-white" id="heroShopBtn">
                  SHOP OMEGA-3
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
                <a href="#difference" className="btn btn-frosted" id="heroExploreBtn">EXPLORE BLUEFIN</a>
              </div>

              {/* Feature Icons */}
              <div className="hero-features-row">
                {[
                  { label: 'Responsibly\nSourced', icon1: <path d="M2 12c4-4 8 0 12-4 3-2 6-1 8 1-3 4-7 5-11 3-3 2-6 1-9 0"/>, icon2: <path d="M7 16c2 1 5 1 8-1"/> },
                  { label: 'Carefully\nProcessed', icon1: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>, icon2: <path d="M12 8a4 4 0 0 0-4 4"/> },
                  { label: 'Expertly\nCapsuled', icon1: <rect x="5" y="4" width="14" height="16" rx="7" transform="rotate(-30 12 12)"/>, icon2: <line x1="8" y1="8" x2="16" y2="16"/> },
                ].map((item, i) => (
                  <div key={`feature-${i}`} className="hero-feature-item">
                    <div className="feature-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon1}{item.icon2}
                      </svg>
                    </div>
                    <span className="feature-label">
                      {item.label.split('\n').map((l, j) => (
                        <span key={j} style={{ display: 'block' }}>{l}</span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

