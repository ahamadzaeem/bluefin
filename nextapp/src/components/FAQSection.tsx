'use client';
import { useState } from 'react';

const faqs = [
  { q: 'What is the difference between 1000mg and 500mg?', a: 'The 1000mg formula offers higher EPA (180mg) and DHA (120mg) per softgel, ideal for adults seeking full heart and body support. The 500mg is a gentler option with EPA 90mg and DHA 60mg, suited for teenagers, elderly family members, or gentle daily maintenance.' },
  { q: 'Are there any fishy burps or odour?', a: 'No. BlueFin fish oil is molecularly distilled and enteric-coated to ensure zero fishy smell or aftertaste. Our softgels are odorless and easy to take with meals.' },
  { q: 'Where is BlueFin fish oil sourced from?', a: 'BlueFin Omega-3 is responsibly sourced from cold-water pelagic fish. Every batch is third-party tested for purity, potency, and the complete absence of heavy metals and environmental toxins.' },
  { q: 'How should I take BlueFin Omega-3?', a: 'Take one softgel daily after a meal. Consistent daily intake is key for maximum benefit. Consult your doctor if you are pregnant, nursing, or on medication.' },
  { q: 'Where can I buy BlueFin products?', a: 'BlueFin is available at select pharmacies across Kerala (Kochi, Kozhikode, Thrissur, Kottayam, Thiruvananthapuram) and on Amazon.in for pan-India delivery.' },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="section-header text-center">
          <div className="section-eyebrow">FREQUENTLY ASKED</div>
          <h2 className="section-title text-navy">Everything you need to know.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                {faq.q}
                <div className="faq-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              </button>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
