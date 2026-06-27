import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, UserPlus, ShieldCheck, Upload, Share2,
  Briefcase, GraduationCap, ExternalLink,
  Lock, Monitor, Clock, CheckCircle
} from 'lucide-react';
import './Home.css';

/* ─────────────────────────────────────────────────────────
   QUICK SERVICES — CitizenHub-specific shortcuts
───────────────────────────────────────────────────────── */
const quickServices = [
  { icon: <UserPlus size={34} strokeWidth={1.7} />, line1: 'Register as', line2: 'a Candidate', href: '/register' },
  { icon: <Upload size={34} strokeWidth={1.7} />, line1: 'Upload Your', line2: 'Documents', href: '/register' },
  { icon: <ShieldCheck size={34} strokeWidth={1.7} />, line1: 'Check Your', line2: 'Verification', href: '/login' },
  { icon: <Briefcase size={34} strokeWidth={1.7} />, line1: 'Register as', line2: 'an Employer', href: '/register' },
  { icon: <Search size={34} strokeWidth={1.7} />, line1: 'Search', line2: 'Candidates', href: '/register' },
  { icon: <GraduationCap size={34} strokeWidth={1.7} />, line1: 'Register as', line2: 'an Institution', href: '/register' },
  { icon: <Share2 size={34} strokeWidth={1.7} />, line1: 'Share Your', line2: 'Profile', href: '/login' },
  { icon: <CheckCircle size={34} strokeWidth={1.7} />, line1: 'Track', line2: 'Verification Status', href: '/login' },
];

/* ─────────────────────────────────────────────────────────
   FEATURED EMPLOYERS — real Kenyan companies that would use CitizenHub
───────────────────────────────────────────────────────── */
const featuredEmployers = [
  {
    initials: 'SF', color: '#007F3D',
    name: 'Safaricom PLC',
    desc: 'Kenya\'s leading telecommunications company uses CitizenHub to verify candidate credentials before onboarding.',
  },
  {
    initials: 'KCB', color: '#006B3F',
    name: 'KCB Group',
    desc: 'KCB Bank verifies academic and professional qualifications of all prospective employees through our platform.',
  },
  {
    initials: 'EA', color: '#00529B',
    name: 'East African Breweries',
    desc: 'EABL uses CitizenHub to streamline background checks and credential verification for new hires.',
  },
  {
    initials: 'NBO', color: '#8B1A1A',
    name: 'Nation Media Group',
    desc: 'Nation Media verifies journalist credentials, academic certificates and professional licenses via CitizenHub.',
  },
  {
    initials: 'CBA', color: '#1A237E',
    name: 'NCBA Bank',
    desc: 'NCBA integrates CitizenHub verification into its HR onboarding workflow for all new staff.',
  },
  {
    initials: 'KP', color: '#4A235A',
    name: 'Kenya Power',
    desc: 'Kenya Power verifies engineering licences and academic qualifications through CitizenHub before hiring.',
  },
];

/* ─────────────────────────────────────────────────────────
   FEATURED INSTITUTIONS — universities, TVETs, bodies
───────────────────────────────────────────────────────── */
const featuredInstitutions = [
  {
    initials: 'UoN', color: '#003366',
    name: 'University of Nairobi',
    desc: 'UoN confirms academic transcripts and degree certificates for all alumni through the CitizenHub verification portal.',
  },
  {
    initials: 'KU', color: '#8B0000',
    name: 'Kenyatta University',
    desc: 'Kenyatta University processes verification requests for certificates, diplomas and professional attachments.',
  },
  {
    initials: 'KNEC', color: '#006400',
    name: 'Kenya National Examinations Council',
    desc: 'KNEC verifies KCSE, KCPE and TVET examination results and certificates on the CitizenHub platform.',
  },
  {
    initials: 'ICT', color: '#0055A4',
    name: 'ICT Authority of Kenya',
    desc: 'ICT Authority validates professional IT certifications and licences for technology professionals in Kenya.',
  },
  {
    initials: 'LSK', color: '#5C3317',
    name: 'Law Society of Kenya',
    desc: 'LSK confirms advocate enrolment, good standing certificates and professional practice licences.',
  },
  {
    initials: 'EBK', color: '#2C5F2E',
    name: 'Engineers Board of Kenya',
    desc: 'EBK verifies engineering professional licences and graduate engineer registrations for all members.',
  },
];

/* ─────────────────────────────────────────────────────────
   HOW IT WORKS — 4 steps
───────────────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'Candidate Registers & Uploads',
    body: 'A candidate creates an account, completes their professional profile and uploads supporting documents — National ID, academic certificates, professional licences and more.',
  },
  {
    num: '02',
    title: 'Employer Requests Verification',
    body: 'An employer finds the candidate and submits a formal verification request through CitizenHub. The request is routed to the relevant institution.',
  },
  {
    num: '03',
    title: 'Institution Confirms Credentials',
    body: 'The issuing university, TVET, professional body or certification authority reviews the request and updates the verification status — Verified, Rejected or Pending.',
  },
  {
    num: '04',
    title: 'Employer Hires with Confidence',
    body: 'The employer receives the verified result with a reference number, date and verifying institution. Trusted hiring, done.',
  },
];

/* ─────────────────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────────────────── */
const features = [
  {
    icon: <Lock size={36} strokeWidth={1.4} />,
    title: 'One account, all verification services',
    body: 'All you need is one account. Candidates register with their National ID. Employers and institutions use their registration numbers.',
  },
  {
    icon: <Monitor size={36} strokeWidth={1.4} />,
    title: 'A single unified professional profile',
    body: 'Your credentials, qualifications and work experience from across institutions are accessible through a single verified profile.',
  },
  {
    icon: <Clock size={36} strokeWidth={1.4} />,
    title: 'Convenient verification access',
    body: 'Upload documents once. Track verification status in real time. Share your verified profile with any employer, any time.',
  },
];

/* ═════════════════════════════════════════════════════════
   COMPONENT
═════════════════════════════════════════════════════════ */
const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [headlineRevealed, setHeadlineRevealed] = useState(false);

  return (
    <div className="home">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className={`hero${headlineRevealed ? ' hero--headline-revealed' : ''}`}
        onMouseEnter={() => setHeadlineRevealed(true)}
        onFocus={() => setHeadlineRevealed(true)}
      >
        <img
          className="hero__bg"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1800&q=85&auto=format&fit=crop&crop=center"
          alt="Professionals reviewing credentials"
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="hero__text-block">
            <h1 className="hero__headline" aria-label="Verify credentials. Hire with confidence.">
              <span>Verify credentials.</span>
              <strong>Hire with confidence.</strong>
            </h1>
          </div>
        </div>
      </section>

      <section className="service-showcase" aria-label="Popular services">
        <div className="service-panel">
          <div className="service-panel__top">
            <div className="hero__search-box">
              <Search size={22} color="#91a0b8" />
              <input
                type="text"
                className="hero__search-input"
                placeholder="Search for candidates, employers, institutions, credentials..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            <div className="quick-services__inner">
              {quickServices.map((s, i) => (
                <Link to={s.href} key={i} className="qs-item">
                  <div className="qs-item__icon">{s.icon}</div>
                  <span className="qs-item__label">{s.line1}<br />{s.line2}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="info-banner">
            <img
              className="info-banner__bg"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80&auto=format&fit=crop&crop=faces,top"
              alt="Verified professional"
            />
            <div className="info-banner__shade" />
            <div className="info-banner__text">
              <p className="info-banner__headline">
                Over <strong>50,000</strong> verified professionals trusted by<br />
                <strong>200+</strong> Employers, Universities, TVETs,<br />
                Colleges and Certification Bodies.
              </p>
            </div>
          </div>

          <div className="service-panel__footer">
            <p className="service-panel__cta-label">Get started on CitizenHub today</p>
            <div className="service-panel__btns">
              <Link to="/login" className="service-panel__btn service-panel__btn--ghost">Sign in</Link>
              <Link to="/register" className="service-panel__btn service-panel__btn--solid">Register</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED EMPLOYERS ─────────────────────────── */}
      <section className="cards-section">
        <div className="cards-section__inner">
          <div className="section-title-row">
            <h2>Featured Employers</h2>
            <Link to="/for-employers" className="view-all">
              View all employers <ExternalLink size={13} />
            </Link>
          </div>
          <p className="section-subtitle">
            Leading Kenyan organisations that trust CitizenHub to verify candidate credentials before hiring.
          </p>
          <div className="cards-grid">
            {featuredEmployers.map((e, i) => (
              <Link to="/for-employers" key={i} className="entity-card">
                <div className="entity-card__top">
                  <div className="entity-card__avatar" style={{ background: e.color }}>
                    {e.initials}
                  </div>
                  <ExternalLink size={14} className="entity-card__ext" />
                </div>
                <h3 className="entity-card__name">{e.name}</h3>
                <p className="entity-card__desc">{e.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED INSTITUTIONS ──────────────────────── */}
      <section className="cards-section cards-section--grey">
        <div className="cards-section__inner">
          <div className="section-title-row">
            <h2>Verification Institutions</h2>
            <Link to="/for-institutions" className="view-all">
              View all institutions <ExternalLink size={13} />
            </Link>
          </div>
          <p className="section-subtitle">
            Universities, TVETs, professional bodies and certification authorities that confirm credentials on CitizenHub.
          </p>
          <div className="cards-grid">
            {featuredInstitutions.map((inst, i) => (
              <Link to="/for-institutions" key={i} className="entity-card">
                <div className="entity-card__top">
                  <div className="entity-card__avatar" style={{ background: inst.color }}>
                    {inst.initials}
                  </div>
                  <ExternalLink size={14} className="entity-card__ext" />
                </div>
                <h3 className="entity-card__name">{inst.name}</h3>
                <p className="entity-card__desc">{inst.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────── */}
      <section className="how-section">
        <div className="how-section__inner">
          <div className="section-title-row">
            <h2>How Citizen Hub Works</h2>
            <Link to="/how-it-works" className="view-all">
              Learn more <ExternalLink size={13} />
            </Link>
          </div>
          <p className="section-subtitle">
            A transparent four-step verification workflow connecting candidates, employers and institutions.
          </p>
          <div className="how-steps">
            {steps.map((s, i) => (
              <div key={i} className="how-step">
                <div className="how-step__num">{s.num}</div>
                <h3 className="how-step__title">{s.title}</h3>
                <p className="how-step__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────── */}
      <section className="features-section">
        <div className="features-section__inner">
          <h2 className="features-section__title">
            The single point of access for all credential verification
          </h2>
          <p className="features-section__sub">
            Enjoy the convenience. Verify credentials, share professional records
            and build trust between talent and employers — quickly and easily.
          </p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-item">
                <div className="feature-item__icon">{f.icon}</div>
                <h3 className="feature-item__title">{f.title}</h3>
                <p className="feature-item__body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENT TYPES SUPPORTED ───────────────────── */}
      <section className="docs-section">
        <div className="docs-section__inner">
          <div className="section-title-row">
            <h2>Documents Supported</h2>
          </div>
          <p className="section-subtitle">
            Candidates can upload and get any of the following documents verified on Citizen Hub.
          </p>
          <div className="docs-grid">
            {[
              'National ID',
              'Curriculum Vitae (CV)',
              'Academic Certificates',
              'Professional Licences',
              'Recommendation Letters',
              'Attachment Letters',
              'Internship Letters',
              'Volunteer Records',
            ].map((d, i) => (
              <div key={i} className="doc-chip">
                <CheckCircle size={15} color="#00A99D" />
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ──────────────────────────────────── */}
      <section className="cta-strip">
        <div className="cta-strip__inner">
          <div className="cta-strip__text">
            <h2>Verified People. Trusted Hiring.</h2>
            <p>
              Join thousands of Kenyan professionals and employers building a more
              trustworthy hiring ecosystem through Citizen Hub.
            </p>
          </div>
          <div className="cta-strip__actions">
            <Link to="/register" className="cta-strip__btn cta-strip__btn--white">
              Register as Candidate
            </Link>
            <Link to="/register" className="cta-strip__btn cta-strip__btn--outline">
              Register as Employer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
