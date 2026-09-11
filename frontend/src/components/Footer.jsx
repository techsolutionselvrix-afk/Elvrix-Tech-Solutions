import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            <div className="footer-logo">
              Elvrix<span style={{ color: 'var(--color-accent)' }}>.</span>Tech
            </div>
            <p className="footer-desc">
              Empowering businesses through premium technology solutions. From AI to cloud infrastructure — we build what matters.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                 {
                   icon: <FaInstagram />,
                   url: 'https://www.instagram.com/elvrix_techsolutions?igsi=MTRwZ3pkMTAyMjZycA==',
                   label: 'Twitter'
                   },
                   {
                     icon: <FaLinkedinIn />,
                     url: 'https://linkedin.com/company/elvrix-techsolutions',
                     label: 'LinkedIn'
                   },
                   {
                     icon: <FaGithub />,
                     url: 'https://github.com/elvrixtechsolutions',
                     label: 'GitHub' 
                    } ].map(({icon,url,label}) => (
                <a key={label}
                   href={url}
                   target='_blank'
                   rel='noopner noreferrer'
                   aria-label={label}
                   style={{
                  width: '36px', height: '36px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(247,244,237,0.15)',
                  borderRadius: '2px', fontSize: '0.95rem',
                  letterSpacing: '0.1em', color: 'rgba(247,244,237,0.5)',
                  transition: 'all 0.2s ease'
                }}>{icon}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h5>Pages</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#">Cloud Setup</a></li>
              <li><a href="#">AI & ML</a></li>
              <li><a href="#">Web Apps</a></li>
              <li><a href="#">Mobile Dev</a></li>
              <li><a href="#">UI / UX</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
             <li><a href="mailto:elvrixtechsolution@gmail.com"> elvrixtechsolution@gmail.com </a></li>
              <li><a href="#">+91 90962 87077</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elvrix TechSolutions. All rights reserved.</p>
          <p style={{ letterSpacing: '0.08em' }}>BUILT WITH PRECISION</p>
        </div>
      </div>
    </footer>
  );
}
