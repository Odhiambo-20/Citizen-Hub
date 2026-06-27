import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',           href: '/'                },
  { label: 'For Candidates', href: '/for-candidates'  },
  { label: 'For Employers',  href: '/for-employers'   },
  { label: 'For Institutions', href: '/for-institutions' },
  { label: 'How It Works',   href: '/how-it-works'    },
  { label: 'Help & Support', href: '/faq'             },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 40 40" fill="none" width="34" height="34">
            <path d="M20 3L5 9V21C5 29.4 11.6 37.2 20 39C28.4 37.2 35 29.4 35 21V9L20 3Z" fill="#00A99D"/>
            <path d="M14 20L18 24L26 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="navbar__logo-wordmark">
            Citizen<strong>Hub</strong>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`navbar__link${location.pathname === link.href ? ' navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Right actions ── */}
        <div className="navbar__actions">
          <button className="navbar__icon-btn" aria-label="Search">
            <Search size={18} />
          </button>
          <Link to="/login"    className="navbar__signin">Sign in</Link>
          <Link to="/register" className="navbar__register">Register</Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="navbar__hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <nav className="navbar__drawer" aria-label="Mobile navigation">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className="navbar__drawer-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="navbar__drawer-actions">
            <Link to="/login"    className="navbar__signin"   onClick={() => setOpen(false)}>Sign in</Link>
            <Link to="/register" className="navbar__register" onClick={() => setOpen(false)}>Register</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
