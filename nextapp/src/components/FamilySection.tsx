export default function FamilySection() {
  return (
    <section className="family-section" id="family">
      <div className="family-image-container">
        <img src="/assets/family_wellness.jpg" alt="Multigenerational Indian family enjoying golden sunlight outdoors" className="family-bg-img" />
        <div className="family-gradient-overlay" />
        <div className="family-content-box">
          <h2 className="family-title">Wellness that<br />belongs in every<br />generation.</h2>
          <p className="family-subtitle">One simple daily habit. Made for the people who matter most.</p>
          <a href="#why-bluefin" className="btn btn-frosted-light">
            OUR STORY
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
