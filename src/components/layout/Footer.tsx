import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__top">
      <div className="footer__brand">
        <Link to="/" className="footer__logo">
          <svg viewBox="0 0 40 40" fill="none" width="30" height="30">
            <path d="M20 3L5 9V21C5 29.4 11.6 37.2 20 39C28.4 37.2 35 29.4 35 21V9L20 3Z" fill="#00A99D"/>
            <path d="M14 20L18 24L26 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="footer__logo-text">Citizen<strong>Hub</strong></span>
        </Link>
        <p className="footer__tagline">
          Verified People. Trusted Hiring.<br />
          <span>Kenya's credential verification platform.</span>
        </p>
      </div>

      <div className="footer__cols">
        <div className="footer__col">
          <h4>Platform</h4>
          <Link to="/for-candidates">For Candidates</Link>
          <Link to="/for-employers">For Employers</Link>
          <Link to="/for-institutions">For Institutions</Link>
          <Link to="/how-it-works">How It Works</Link>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <Link to="/about">About Citizen Hub</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer__col">
          <h4>Account</h4>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Register as Candidate</Link>
          <Link to="/register">Register as Employer</Link>
          <Link to="/register">Register as Institution</Link>
        </div>
        <div className="footer__col">
          <h4>Legal</h4>
          <Link to="/about">Terms & Conditions</Link>
          <Link to="/about">Privacy Policy</Link>
          <Link to="/about">Data Protection</Link>
        </div>
      </div>
    </div>

    <div className="footer__bottom">
      <div className="footer__bottom-inner">
        <span>© {new Date().getFullYear()} Citizen Hub. All rights reserved.</span>
        <nav className="footer__bottom-links">
          <Link to="/">Home</Link>
          <Link to="/for-candidates">Candidates</Link>
          <Link to="/for-employers">Employers</Link>
          <Link to="/for-institutions">Institutions</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about">Terms & Conditions</Link>
          <Link to="/about">Privacy Policy</Link>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
