import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/service', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/work', label: 'Work' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <Link to="/" className="logo">
            Elvrix<span className="logo-dot">.</span>Tech
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname === to ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link to="/contact" className="btn btn-primary nav-cta-btn" style={{ fontSize: '0.75rem', padding: '0.6rem 1.5rem' }}>
            Get in Touch
          </Link>

          {/* Hamburger button (mobile only) */}
          <button
            className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile fullscreen drawer ── */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        {/* Close X area — clicking outside links */}
        <div style={{ position: 'absolute', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1.5rem' }}>
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            Elvrix<span className="logo-dot">.</span>Tech
          </Link>
          <button
            className={`mobile-menu-btn open`}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`mobile-nav-link ${location.pathname === to ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}

        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', fontSize: '0.85rem' }} onClick={() => setMenuOpen(false)}>
          Get in Touch
        </Link>

        {/* Decorative dot */}
        <div style={{ position: 'absolute', bottom: '2rem', width: '8px', height: '8px', background: 'var(--color-accent)' }} />
      </div>
    </>
  );
}
