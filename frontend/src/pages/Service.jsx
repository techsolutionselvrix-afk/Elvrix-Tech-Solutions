import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const services = [
  {
    num: '01',
    title: 'Custom Software Development',
    desc: 'Tailored applications built for scale and performance. We architect software that grows with your business.',
    tags: ['React', 'Python', 'Node.js', 'PostgreSQL'],
  },
  {
    num: '02',
    title: 'Cloud Infrastructure & DevOps',
    desc: 'Robust, highly-available cloud environments with automated CI/CD pipelines and monitoring.',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
  },
  {
    num: '03',
    title: 'Digital Marketing',
    desc: 'Embed intelligence into your product — predictive analytics, NLP, computer vision, and generative AI.',
    tags: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
  },
  {
    num: '04',
    title: 'Web & Mobile App Development',
    desc: 'Premium cross-platform applications that feel native, perform fast, and look world-class.',
    tags: ['React Native', 'Next.js', 'Swift', 'Kotlin'],
  },
  {
    num: '05',
    title: 'UI / UX Design',
    desc: 'Human-centered design systems that convert visitors into loyal users. From wireframe to final pixel.',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'A/B Testing'],
  },
  {
    num: '06',
    title: 'API & Third-Party Integrations',
    desc: 'Connect your ecosystem seamlessly — payments, analytics, communication platforms and more.',
    tags: ['REST', 'GraphQL', 'Stripe', 'Webhooks'],
  },
];

export default function Service() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>

      {/* ─── Hero ─── */}
      <section className="grid-bg section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>What We Offer</div>
          </motion.div>
          <motion.div className="display-text" style={{ fontSize: 'clamp(4rem, 9vw, 9rem)', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            OUR SERVICES
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ maxWidth: '560px', color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}
          >
            We offer a comprehensive suite of technology services to accelerate your digital transformation — from strategy to shipping.
          </motion.p>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="svc-grid" style={{ border: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
            {services.map((svc, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08}
                style={{
                  padding: '3rem 2.5rem',
                  borderRight: i % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                  borderBottom: i < services.length - 2 ? '1px solid var(--color-border)' : 'none',
                  transition: 'background 0.3s ease',
                  cursor: 'pointer',
                  background: 'var(--color-bg)',
                }}
                whileHover={{ backgroundColor: 'var(--color-surface)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--color-accent)' }}>{svc.num}</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--color-border)', transform: 'rotate(-45deg)', display: 'inline-block' }}>→</span>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 400, marginBottom: '1rem', letterSpacing: '0.01em', lineHeight: 1.3 }}>{svc.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: '1.5rem' }}>{svc.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {svc.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section" style={{ borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 400, marginBottom: '1.5rem' }}>Ready to get <span className="accent-text">started?</span></h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '440px', margin: '0 auto 2.5rem' }}>Tell us about your project and we'll put together a custom proposal.</p>
            <Link to="/contact" className="btn btn-primary">Start a Project</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
