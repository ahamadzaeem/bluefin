'use client';
import { useState } from 'react';

const pharmacyData: Record<string, { name: string; addr: string; phone: string; stock: string }[]> = {
  kochi: [
    { name: 'Aster Medcity Pharmacy', addr: 'Kuttisahib Road, Cheranalloor, Kochi', phone: '+91 484 669 9999', stock: 'In Stock (1000mg & 500mg)' },
    { name: 'Neethi Medical Store', addr: 'MG Road, Jos Junction, Kochi', phone: '+91 484 235 1421', stock: 'In Stock' },
    { name: 'Apollo Pharmacy — Edappally', addr: 'Toll Junction, Edappally, Kochi', phone: '+91 484 401 2288', stock: 'In Stock' },
  ],
  tvm: [
    { name: 'KIMSHEALTH Medical Store', addr: 'Anayara, Thiruvananthapuram', phone: '+91 471 294 1000', stock: 'In Stock' },
    { name: 'Apollo Pharmacy — Kowdiar', addr: 'Kowdiar Junction, Thiruvananthapuram', phone: '+91 471 231 8899', stock: 'In Stock' },
  ],
  kozhikode: [
    { name: 'MIMS Aster Pharmacy', addr: 'Mini Bypass Road, Kozhikode', phone: '+91 495 248 8000', stock: 'In Stock' },
    { name: 'Baby Memorial Hospital Pharmacy', addr: 'Arayidathupalam, Kozhikode', phone: '+91 495 277 7777', stock: 'In Stock' },
  ],
  thrissur: [
    { name: 'Jubilee Mission Medical Store', addr: 'East Fort, Thrissur', phone: '+91 487 243 2200', stock: 'In Stock' },
    { name: 'Amala Pharmacy', addr: 'Amala Nagar, Thrissur', phone: '+91 487 230 4000', stock: 'In Stock' },
  ],
  kottayam: [
    { name: 'Caritas Hospital Pharmacy', addr: 'Thellakom, Kottayam', phone: '+91 481 279 0025', stock: 'In Stock' },
    { name: 'Apollo Pharmacy — Baker Junction', addr: 'Baker Junction, Kottayam', phone: '+91 481 256 7812', stock: 'In Stock' },
  ],
};

export default function FindUsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [district, setDistrict] = useState('kochi');
  const [tooltipDistrict, setTooltipDistrict] = useState('');

  return (
    <section className="find-us-section" id="where-to-find">
      <div className="find-us-background">
        <img src="/assets/kerala_scenic.jpg" alt="Kerala backwaters" className="find-us-bg-img" />
        <div className="find-us-overlay" />
      </div>
      <div className="find-us-container">
        <div className="find-us-left">
          <div className="section-eyebrow text-blue">WHERE TO FIND US</div>
          <h2 className="find-us-title">BlueFin is closer<br />than you think.</h2>
          <p className="find-us-subtitle">Available at your neighbourhood pharmacies across Kerala and on Amazon.</p>
          <div className="find-us-cta-row">
            <button className="btn btn-white-pill" onClick={() => setModalOpen(true)}>
              FIND A PHARMACY
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="btn btn-navy-pill">
              SHOP ON AMAZON
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>
          <div className="find-us-badges-row">
            <div className="pharmacy-trust-badge">
              <div className="green-cross-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
                </svg>
              </div>
              <div className="pharmacy-text">
                <span className="badge-label">Pharmacies</span>
                <span className="badge-sub">Across Kerala</span>
              </div>
            </div>
            <div className="amazon-trust-badge">
              <span className="amazon-word">amazon</span>
              <svg className="amazon-smile" viewBox="0 0 70 20" fill="none">
                <path d="M5 10C20 18 50 18 65 8" stroke="#ff9900" strokeWidth="3" strokeLinecap="round"/>
                <path d="M62 4L67 9L59 11" fill="#ff9900"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Kerala Map */}
        <div className="find-us-right">
          <div className="kerala-map-stage">
            <div className="map-glow-underlay" />
            <svg className="kerala-map-svg" viewBox="0 0 260 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140 20 C145 35, 130 50, 115 70 C100 90, 85 110, 80 135 C75 160, 90 185, 100 205 C110 225, 130 245, 135 270 C140 295, 125 320, 140 350 C155 380, 175 410, 195 440 C205 455, 215 465, 210 470 C200 472, 190 455, 175 435 C150 400, 125 365, 110 330 C95 295, 90 260, 80 230 C70 200, 55 170, 60 135 C65 100, 80 70, 95 45 C110 25, 130 15, 140 20 Z"
                fill="url(#keralaFill)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" filter="drop-shadow(0 8px 24px rgba(7,33,54,0.15))"/>
              <defs>
                <linearGradient id="keralaFill" x1="60" y1="20" x2="210" y2="470" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ffffff" stopOpacity="0.85"/>
                  <stop offset="0.5" stopColor="#e0f2fe" stopOpacity="0.75"/>
                  <stop offset="1" stopColor="#bae6fd" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
              {[
                { cx: 90, cy: 110, label: 'Kozhikode', anchor: 'start', key: 'kozhikode' },
                { cx: 105, cy: 205, label: 'Thrissur', anchor: 'start', key: 'thrissur' },
                { cx: 125, cy: 270, label: 'Kochi', anchor: 'start', key: 'kochi', primary: true },
                { cx: 140, cy: 335, label: 'Kottayam', anchor: 'start', key: 'kottayam' },
                { cx: 185, cy: 430, label: 'Thiruvananthapuram', anchor: 'end', key: 'tvm' },
              ].map((pin) => (
                <g key={pin.key} className="map-pin-group"
                  onClick={() => { setDistrict(pin.key); setModalOpen(true); }}
                  onMouseEnter={() => setTooltipDistrict(pin.label)}
                  transform={`translate(${pin.cx}, ${pin.cy})`}>
                  <circle cx="0" cy="0" r={pin.primary ? 18 : 14} className={`pin-pulse ${pin.primary ? 'primary-pin' : ''}`}/>
                  <circle cx="0" cy="0" r={pin.primary ? 8 : 6} fill={pin.primary ? '#0369a1' : '#0284c7'}/>
                  <circle cx="0" cy="0" r={pin.primary ? 4 : 3} fill={pin.primary ? '#38bdf8' : '#ffffff'}/>
                  <text x={pin.anchor === 'end' ? -18 : 16} y="4" className={`map-city-label ${pin.primary ? 'main-city' : ''}`} textAnchor={pin.anchor === 'end' ? 'end' : 'start'}>
                    {pin.label}
                  </text>
                </g>
              ))}
            </svg>
            {tooltipDistrict && (
              <div className="map-info-tooltip visible">
                <strong>{tooltipDistrict} Hub</strong>
                <span>Available Partner Pharmacies</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pharmacy Modal */}
      {modalOpen && (
        <>
          <div className="modal-backdrop active" onClick={() => setModalOpen(false)} />
          <div className="pharmacy-modal active">
            <div className="modal-header">
              <h3 style={{fontFamily:'var(--font-serif)',fontSize:'1.4rem',color:'var(--color-navy-deep)'}}>Find a Pharmacy</h3>
              <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="pharmacy-modal-body">
              <div className="district-select-wrap">
                <label>Select District</label>
                <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                  <option value="kochi">Kochi / Ernakulam</option>
                  <option value="tvm">Thiruvananthapuram</option>
                  <option value="kozhikode">Kozhikode</option>
                  <option value="thrissur">Thrissur</option>
                  <option value="kottayam">Kottayam</option>
                </select>
              </div>
              <div className="pharmacies-list">
                {(pharmacyData[district] || []).map((p) => (
                  <div key={p.name} className="pharmacy-card">
                    <div className="pharm-store-name">{p.name}</div>
                    <div className="pharm-address">{p.addr}</div>
                    <div className="pharm-meta"><span>{p.phone}</span><span>● {p.stock}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
