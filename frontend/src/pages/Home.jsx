import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RobotScene from '../components/RobotScene';

const ticker_items = [
  'Cloud Infrastructure', 'AI & Machine Learning', 'Web Development',
  'Mobile Apps', 'UI / UX Design', 'DevOps', 'Data Analytics', 'API Integration',
  'Cloud Infrastructure', 'AI & Machine Learning', 'Web Development',
  'Mobile Apps', 'UI / UX Design', 'DevOps', 'Data Analytics', 'API Integration',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Home() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>

      {/* ─── HERO ─── */}
      <section className="grid-bg" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', paddingTop: '100px' }}>

        {/* ── Row 1: Centered display title ── */}
        <div className="container hero-title-row" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            className="display-text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', marginBottom: '1rem' }}
          >
            ELVRIX 
           
          </motion.div>
           <p style={{textAlign:"center",fontSize:"2rem"}}>TECH SOLUTION</p>
          

          {/* Thin divider line */}
          <div style={{ width: '100%', height: '1px', background: 'var(--color-border)', marginBottom: '3rem' }} />
        </div>

        {/* ── Row 2: Left text | Right robot ── */}
        <div className="container hero-grid" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', alignItems: 'center', flex: 1, paddingBottom: '4rem' }}>

          {/* Left — Text content */}
          <motion.div
            className="hero-text"
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            style={{ paddingRight: '4rem' }}
          >
            <div className="section-label" style={{ marginBottom: '2rem' }}>
              Tech Solutions
            </div>
            <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.2, fontWeight: 400, marginBottom: '1.5rem', maxWidth: '480px' }}>
              Building the Digital Infrastructure of{' '}
              <span className="accent-text">Tomorrow</span>
            </h1>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '400px', fontSize: '1rem' }}>
              Elvrix delivers enterprise-grade software, cloud infrastructure, and AI-powered tools to scale your business into the next era.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Apply for a Project</Link>
              <Link to="/service" className="btn btn-outline">Our Services</Link>
            </div>
          </motion.div>

          {/* Right — 3D Robot pushed to far right */}
          <motion.div
            className="hero-robot"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: '520px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
          >
            <div style={{ width: '100%', maxWidth: '480px', height: '100%' }}>
              <RobotScene />
            </div>
          </motion.div>
        </div>

        {/* Corner decorations */}
        <div style={{ position: 'absolute', top: '88px', left: '1.5rem', width: '10px', height: '10px', background: 'var(--color-accent)', zIndex: 3 }} />
        <div style={{ position: 'absolute', top: '88px', right: '1.5rem', width: '10px', height: '10px', background: 'var(--color-accent)', zIndex: 3 }} />
      </section>



      {/* ─── TICKER ─── */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {ticker_items.map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>

    


      {/* ─── SERVICES PREVIEW ─── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="page-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>What We Do</div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 400, lineHeight: 1.15 }}>
                End-to-End Tech<br /><span className="accent-text">Services</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
              We take your idea from concept to deployment. Whether you need a scalable cloud setup, a beautiful web product, or an AI-powered automation system — Elvrix is your partner.
            </motion.p>
          </div>

          <div className="page-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', border: '1px solid var(--color-border)' }}>
            {[
              { title: 'Cloud Infrastructure', num: '01', desc: 'Design and deploy robust, scalable cloud environments on AWS, GCP, and Azure.' },
              { title: 'Digital Marketing', num: '02', desc: 'We accelerate business growth by connecting brands with their ideal customers.' },
              { title: 'Web App Development', num: '03', desc: 'Premium, high-performance web applications built with React, Next.js and more.' },
              { title: 'Mobile Development', num: '04', desc: 'Cross-platform mobile apps that feel native on iOS and Android.' },
              { title: 'UI / UX Design', num: '05', desc: 'Intuitive, beautiful interfaces that convert users into loyal customers.' },
              { title: 'API & Integrations', num: '06', desc: 'Seamlessly connect third-party services and build powerful API ecosystems.' },
            ].map((svc, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="bento-cell"
                style={{ padding: '2.5rem 2rem', borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--color-accent)', marginBottom: '1.25rem', display: 'block' }}>{svc.num}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: '1rem', letterSpacing: '0.02em' }}>{svc.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{svc.desc}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/service" className="btn btn-dark">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{ background: 'var(--color-surface-dark)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.04, fontSize: '18rem', fontFamily: 'var(--font-family-display)', fontWeight: 400, whiteSpace: 'nowrap', color: 'var(--color-on-dark)', pointerEvents: 'none', letterSpacing: '-0.05em' }}>
          ELVRIX
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-on-dark-muted)' }}>Ready to Start?</div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--color-on-dark)', marginBottom: '2rem', lineHeight: 1.1 }}>
              Let's Build Something<br />
              <span style={{ color: 'var(--color-accent)' }}>Remarkable Together</span>
            </h2>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '1rem 2.5rem' }}>
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
