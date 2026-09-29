const reasons = [
  { num: '01', title: 'Omega-3 Rich', desc: 'High-quality EPA & DHA for full body & heart support.', icon: <><path d="M2 16s9-15 20-4c-4 2-8 3-12 1-3 2-6 2-8 3z"/><circle cx="18" cy="13" r="1" fill="currentColor"/></> },
  { num: '02', title: 'Responsibly Sourced', desc: 'From clean, sustainable cold-water marine sources.', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4l3 3"/></> },
  { num: '03', title: 'Carefully Processed', desc: 'Every step ensures exceptional purity, freshness, and potency.', icon: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/> },
  { num: '04', title: 'Expertly Capsuled', desc: 'Designed for simple, odor-free, everyday family wellness.', icon: <><rect x="5" y="4" width="14" height="16" rx="7" transform="rotate(-30 12 12)"/><line x1="8" y1="8" x2="16" y2="16"/></> },
];

export default function ReasonsSection() {
  return (
    <section className="reasons-section" id="why-bluefin">
      <div className="reasons-container">
        <div className="section-header text-center">
          <div className="section-eyebrow">WHY CHOOSE BLUEFIN</div>
          <h2 className="section-title text-white">Four reasons. A healthier you.</h2>
        </div>
        <div className="reasons-grid">
          {reasons.map((r) => (
            <div key={r.num} className="reason-column">
              <div className="reason-top-row">
                <span className="reason-num">{r.num}</span>
                <div className="reason-icon-wrap">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {r.icon}
                  </svg>
                </div>
              </div>
              <h3 className="reason-title">{r.title}</h3>
              <p className="reason-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
