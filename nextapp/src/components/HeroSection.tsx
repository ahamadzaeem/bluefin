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

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1280;
    canvas.height = 720;

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

        // Overlay & content fade in after 90% of scroll
        const opacity = frameIdx > 90 ? Math.min(1, (frameIdx - 90) / 15) : 0;
        const overlay = document.querySelector<HTMLElement>('.hero-bg-overlay');
        const glare = document.querySelector<HTMLElement>('.hero-sun-glare');
        const content = document.querySelector<HTMLElement>('.hero-container');
        if (overlay) overlay.style.opacity = String(opacity);
        if (glare) glare.style.opacity = String(opacity);
        if (content) {
          content.style.opacity = String(opacity);
          content.style.transform = `translateY(${(1 - opacity) * 30}px)`;
          content.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
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
        {/* Background Canvas */}
        <div className="hero-bg-media">
          <canvas ref={canvasRef} className="hero-canvas" />
          <div className="hero-bg-overlay" style={{ opacity: 0 }} />
        </div>

        <div className="hero-container" style={{ opacity: 0, transform: 'translateY(30px)' }}>
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            PURE OMEGA-3. BRIGHTER TOMORROWS.
          </div>

          {/* Title — "family wellness." is cyan */}
          <h1 className="hero-title">
            The foundation for your family&apos;s <span className="cyan-line">wellness.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Responsibly sourced from deep cold waters.<br />
            Expertly capsulated for maximum purity and absorption.
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

          {/* Feature Icons — vertical stack, evenly spaced */}
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
    </section>
    </>
  );
}

