const steps = [
  { label: 'START', desc: 'Your day begins.', img: '/assets/lifestyle_morning.jpg', alt: 'Morning coffee on balcony' },
  { label: 'SUPPORT', desc: 'Make wellness part of your routine.', img: '/assets/lifestyle_support.jpg', alt: 'Taking daily supplement' },
  { label: 'REPEAT', desc: 'Simple, everyday consistency.', img: '/assets/lifestyle_repeat.jpg', alt: 'Tranquil sunset' },
];

export default function RoutineSection() {
  return (
    <section className="routine-section" id="routine">
      <div className="routine-container">
        <div className="section-header text-center">
          <div className="section-eyebrow text-blue">MAKE IT PART OF YOUR DAY</div>
          <h2 className="section-title text-navy">A simple habit. A brighter tomorrow.</h2>
        </div>
        <div className="routine-steps-row">
          {steps.map((step, i) => (
            <div key={step.label} style={{ display: 'contents' }}>
              {i > 0 && (
                <div className="routine-arrow-connector">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/>
                  </svg>
                </div>
              )}
              <div className="routine-step-card">
                <div className="routine-circle-img-wrap">
                  <img src={step.img} alt={step.alt} className="routine-circle-img" />
                </div>
                <div className="step-meta">
                  <h3 className="step-label">{step.label}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
