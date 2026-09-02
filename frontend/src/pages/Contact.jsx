import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', service: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
  };

  return (
    <div style={{ background: 'var(--color-bg)' }}>

      {/* ─── Hero ─── */}
      <section className="grid-bg section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Let's Talk</div>
          </motion.div>
          <motion.div className="display-text" style={{ fontSize: 'clamp(4rem, 9vw, 9rem)', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            CONTACT
          </motion.div>
        </div>
      </section>

      {/* ─── Contact grid ─── */}
      <section className="section">
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>

            {/* Left — Info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Start a project or<br /><span className="accent-text">say hello</span>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '3rem' }}>
                Tell us about your project, your team, and your timeline. We'll put together a custom proposal within 48 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { label: 'Email', value: 'hello@elvrix.tech' },
                  { label: 'Phone', value: '+1 (555) 000-0000' },
                  { label: 'Response Time', value: 'Within 24 hours' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--color-border)' }}>
                    <div className="section-label" style={{ marginBottom: '0.4rem' }}>{label}</div>
                    <div style={{ fontSize: '1rem', fontWeight: 400 }}>{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '5rem 3rem', border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✓</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    Thanks for reaching out. We'll review your request and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Your Name *</label>
                      <input id="name" name="name" type="text" required className="form-input" placeholder="John Smith" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required className="form-input" placeholder="john@company.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company / Organization</label>
                    <input id="company" name="company" type="text" className="form-input" placeholder="Acme Corp" value={form.company} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Service of Interest</label>
                    <select id="service" name="service" className="form-input" value={form.service} onChange={handleChange} style={{ cursor: 'pointer' }}>
                      <option value="">Select a service…</option>
                      <option>Custom Software Development</option>
                      <option>Cloud Infrastructure</option>
                      <option>AI & Machine Learning</option>
                      <option>Web & Mobile App Development</option>
                      <option>UI / UX Design</option>
                      <option>API & Integrations</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Project Details *</label>
                    <textarea id="message" name="message" required rows={6} className="form-input" placeholder="Tell us about your project, goals, and timeline…" value={form.message} onChange={handleChange} style={{ resize: 'vertical', fontFamily: 'inherit' }} />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ alignSelf: 'flex-start', padding: '0.875rem 2.5rem', fontSize: '0.85rem' }}>
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
