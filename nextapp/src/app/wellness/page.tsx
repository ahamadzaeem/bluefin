'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoutineSection from '@/components/RoutineSection';

export default function WellnessPage() {
  const healthBenefits = [
    {
      icon: '🫀',
      title: 'Cardiovascular Vitality',
      subtitle: 'EPA 180mg + DHA 120mg',
      desc: 'Helps maintain healthy serum triglyceride levels, supports endothelial flexibility, and preserves smooth arterial circulation for lasting stamina.'
    },
    {
      icon: '🧠',
      title: 'Cognitive Sharpness & Memory',
      subtitle: 'DHA Retinal & Brain Matrix',
      desc: 'DHA constitutes over 20% of cerebral cortex lipids. Daily supplementation supports neuroplasticity, sustained work focus, and memory recall across adulthood.'
    },
    {
      icon: '🏃',
      title: 'Joint Flexibility & Comfort',
      subtitle: 'Inflammatory Response Modulation',
      desc: 'Omega-3 fatty acids compete with pro-inflammatory arachidonic acid pathways, significantly easing joint stiffness and enhancing morning flexibility.'
    },
    {
      icon: '👁️',
      title: 'Retinal & Digital Eye Comfort',
      subtitle: 'Tears Lipid Layer Support',
      desc: 'Soothes digital screen fatigue and eye dryness by replenishing the meibomian lipid layer of your tear film, keeping eyes naturally lubricated.'
    },
    {
      icon: '✨',
      title: 'Skin Barrier & Hydration',
      subtitle: 'Cell Membrane Reinforcement',
      desc: 'Reinforces the epidermal stratum corneum to seal in moisture from within, counteracting dryness and environmental oxidative stress.'
    },
    {
      icon: '🌿',
      title: 'Immune Cellular Resilience',
      subtitle: 'Specialized Pro-Resolving Mediators',
      desc: 'EPA and DHA are precursors to protectins and resolvins, compounds that actively orchestrate the resolution phase of immune balance.'
    }
  ];

  const dosageGuides = [
    {
      group: 'Active Adults & Professionals',
      rec: 'BlueFin 1000 MG',
      dosage: '1 Softgel Daily',
      timing: 'Immediately after a nutrient-rich breakfast',
      desc: 'Ideal for combating long screen hours, high workplace cognitive demands, and maintaining heart health.'
    },
    {
      group: 'Seniors & Elderly Parents',
      rec: 'BlueFin 1000 MG or 500 MG',
      dosage: '1 Softgel Daily',
      timing: 'With lunch or first warm meal',
      desc: 'Targeted for joint ease, arterial elasticity, and gentle, non-irritating digestive absorption.'
    },
    {
      group: 'Teenagers & First-Time Users',
      rec: 'BlueFin 500 MG',
      dosage: '1 Mini Softgel Daily',
      timing: 'With breakfast or evening milk',
      desc: 'Compact, ultra-easy to swallow capsule providing foundational DHA for growing minds and academic stamina.'
    }
  ];

  return (
    <>
      <Header />

      <main>
        {/* HERO BANNER */}
        <section className="subpage-hero-wrapper" style={{ minHeight: '520px', textAlign: 'center' }}>
          <img
            src="/assets/hero_wellness.jpg"
            alt="Crystal clear wave crest in morning sunlight symbolizing health and vitality"
            className="subpage-hero-bg"
          />
          <div className="subpage-hero-overlay overlay-wellness" />

          <div className="subpage-hero-content" style={{ maxWidth: '960px' }}>
            <h1 className="subpage-title">
              The Foundation of Every Living Cell.
            </h1>

            <p className="subpage-subtitle" style={{ margin: '0 auto 2.5rem', color: '#e2e8f0' }}>
              Your body cannot synthesize essential Omega-3 fatty acids on its own. Discover how daily marine EPA and DHA fortify cardiovascular stamina, mental focus, and lifelong joint mobility.
            </p>

            {/* 5 Vitality Pillars Quick Links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                justifyContent: 'center',
                maxWidth: '750px',
                margin: '0 auto'
              }}
            >
              {[
                { icon: '🫀', label: 'Heart & Arteries' },
                { icon: '🧠', label: 'Brain & Memory' },
                { icon: '🏃', label: 'Joint Mobility' },
                { icon: '👁️', label: 'Retinal Comfort' },
                { icon: '✨', label: 'Cellular Hydration' }
              ].map((pill, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(7, 33, 54, 0.72)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '999px',
                    padding: '0.6rem 1.25rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <span>{pill.icon}</span>
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 HEALTH BENEFITS */}
        <section className="subpage-content" style={{ background: '#ffffff', padding: '6rem 1.5rem' }}>
          <div className="subpage-container">
            <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
              <div className="section-eyebrow">TARGETED VITALITY</div>
              <h2 className="section-title">How Omega-3 empowers whole-body health</h2>
              <p className="section-subtitle">Scientifically validated benefits of daily marine essential fatty acids.</p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem'
              }}
            >
              {healthBenefits.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    borderRadius: '20px',
                    padding: '2.5rem 2rem',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{item.icon}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                    {item.subtitle}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#072136', marginBottom: '0.85rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMBEDDED ROUTINE SECTION */}
        <RoutineSection />

        {/* DOSAGE GUIDE ACCORDING TO LIFE STAGES */}
        <section className="subpage-content" style={{ background: '#f8fafc', padding: '6rem 1.5rem' }}>
          <div className="subpage-container">
            <div className="section-header text-center" style={{ marginBottom: '3.5rem' }}>
              <div className="section-eyebrow">CUSTOMIZED FOR YOU</div>
              <h2 className="section-title">Dosage guidance for every life stage</h2>
              <p className="section-subtitle">How to match your family members with the right BlueFin formulation.</p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}
            >
              {dosageGuides.map((guide, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    padding: '2.5rem',
                    borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 8px 25px rgba(0, 30, 60, 0.05)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#072136', marginBottom: '1rem' }}>
                    {guide.group}
                  </h3>

                  <div
                    style={{
                      background: '#e0f2fe',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      color: '#0369a1',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      marginBottom: '1rem'
                    }}
                  >
                    Recommended: {guide.rec}
                  </div>

                  <div style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '0.5rem' }}>
                    <strong>Daily Dose:</strong> {guide.dosage}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '1.25rem' }}>
                    <strong>Optimal Timing:</strong> {guide.timing}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginTop: 'auto' }}>
                    {guide.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link href="/shop" className="btn btn-navy-pill" style={{ padding: '1rem 2.5rem', fontSize: '0.9rem' }}>
                START YOUR WELLNESS ROUTINE →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
