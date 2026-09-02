import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const team = [
  { name: 'Aria Vance', role: 'CEO & Co-Founder', spec: 'Strategy & Product' },
  { name: 'Marcus Lee', role: 'CTO & Co-Founder', spec: 'Cloud & Infrastructure' },
  { name: 'Sofia Reyes', role: 'Head of Design', spec: 'UI / UX Systems' },
  { name: 'Dev Patel', role: 'Lead Engineer', spec: 'AI & ML' },
];

const values = [
  { label: 'Precision', desc: 'We craft every line of code and pixel of design with intention and discipline.' },
  { label: 'Transparency', desc: 'Clear communication and honest timelines — always.' },
  { label: 'Innovation', desc: 'We stay at the bleeding edge so you can lead your market.' },
  { label: 'Partnership', desc: 'We treat every client as a long-term partner, not a transaction.' },
];

export default function About() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>

      {/* ─── Hero ─── */}
      <section className="grid-bg section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Who We Are</div>
          </motion.div>
          <motion.div className="display-text" style={{ fontSize: 'clamp(4rem, 9vw, 9rem)', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            ABOUT US
          </motion.div>
        </div>
      </section>

      {/* ─── Mission ─── */}
      <section className="section">
        <div className="container">
          <div className="page-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Our Mission</div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 400, marginBottom: '2rem', lineHeight: 1.2 }}>
                Innovation Meets<br /><span className="accent-text">Execution</span>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Founded with a singular vision — to redefine what tech services look and feel like. Elvrix TechSolutions was built for founders, product leaders, and enterprises who refuse to settle for average.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                We combine engineering rigor with aesthetic sensibility to deliver products that don't just work — they inspire. Our team of industry veterans brings deep expertise from startups to Fortune 500 environments.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '3rem', position: 'relative' }}>
                <div style={{ fontSize: '5rem', lineHeight: 1, color: 'var(--color-accent)', marginBottom: '1.5rem', opacity: 0.4 }}>"</div>
                <p style={{ fontSize: '1.15rem', lineHeight: 1.7, fontWeight: 400, color: 'var(--color-text)', marginBottom: '2rem' }}>
                  We don't just build software. We build the foundation on which your next decade of growth is built.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-surface-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-bg)', fontSize: '1rem' }}>AV</div>
                  <div>
                    <div style={{ fontWeight: 400, fontSize: '0.9rem' }}>Aria Vance</div>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>CEO & Co-Founder</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '8px', height: '8px', background: 'var(--color-accent)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Our Values</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 400 }}>What Drives Us</h2>
          </motion.div>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px', border: '1px solid var(--color-border)' }}>
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="bento-cell" style={{ padding: '2.5rem 2rem', borderRight: i < values.length - 1 ? '1px solid var(--color-border)' : 'none' }}
              >
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>0{i + 1}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.75rem' }}>{v.label}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="section">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Our People</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 400 }}>Meet the Team</h2>
          </motion.div>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {team.map((member, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                style={{ textAlign: 'center' }}
              >
                <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.2rem', color: 'var(--color-surface-dark)' }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 style={{ fontWeight: 400, fontSize: '1rem', marginBottom: '0.25rem' }}>{member.name}</h4>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.4rem' }}>{member.role}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{member.spec}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
