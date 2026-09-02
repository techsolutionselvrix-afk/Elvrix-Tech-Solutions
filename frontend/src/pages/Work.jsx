import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const projects = [
  { name: 'Project Alpha', category: 'AI Analytics Platform', year: '2024', tags: ['Python', 'TensorFlow', 'React'] },
  { name: 'Nexus Dashboard', category: 'Enterprise Web App', year: '2024', tags: ['Next.js', 'Supabase', 'PostgreSQL'] },
  { name: 'CloudSync Pro', category: 'Cloud Infrastructure', year: '2023', tags: ['AWS', 'Docker', 'Kubernetes'] },
  { name: 'OmniStore', category: 'E-Commerce Platform', year: '2023', tags: ['Shopify', 'React', 'Node.js'] },
  { name: 'FinTech Pro', category: 'Mobile Banking App', year: '2023', tags: ['React Native', 'Python', 'Stripe'] },
  { name: 'AeroSpace UI', category: 'Design System', year: '2022', tags: ['Figma', 'React', 'Storybook'] },
];

export default function Work() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>

      {/* ─── Hero ─── */}
      <section className="grid-bg section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Portfolio</div>
          </motion.div>
          <motion.div className="display-text" style={{ fontSize: 'clamp(4rem, 9vw, 9rem)', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            OUR WORK
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ maxWidth: '520px', color: 'var(--color-text-muted)', lineHeight: 1.8 }}
          >
            A selection of recent projects we've built, shipped, and grown with our clients worldwide.
          </motion.p>
        </div>
      </section>

      {/* ─── Project Grid ─── */}
      <section className="section">
        <div className="container">
          <div className="work-grid" style={{ border: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
                style={{
                  padding: '3rem 2.5rem',
                  borderRight: i % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                  borderBottom: i < projects.length - 2 ? '1px solid var(--color-border)' : 'none',
                  background: 'var(--color-bg)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.3s',
                }}
                whileHover={{ backgroundColor: 'var(--color-surface)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span className="tag">{proj.category}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>{proj.year}</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 400, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>{proj.name}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '1.5rem', color: 'var(--color-accent)', opacity: 0.6 }}>→</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Clients / Partners ─── */}
      <section className="section-sm" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-muted)', flexShrink: 0 }}>Trusted By</span>
            {['TechCorp Inc.', 'DataFlow AI', 'NexaCloud', 'BrightScale', 'Orion Labs'].map((name) => (
              <span key={name} style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', letterSpacing: '0.06em', fontWeight: 400 }}>{name}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
