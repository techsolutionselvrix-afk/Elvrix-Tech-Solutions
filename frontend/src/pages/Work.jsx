import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const projects = [
  {
    name: "Cafe Website",
    category: "Restaurant",
    year: "2024",
    tags: ["React", "Web Design"],
    url: "https://cafe-website-two-theta.vercel.app/",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Lawyer Website",
    category: "Professional Services",
    year: "2024",
    tags: ["Frontend", "UI/UX"],
    url: "https://lawyerwebsite-alpha.vercel.app",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Clinic Website",
    category: "Healthcare",
    year: "2024",
    tags: ["React", "Responsive"],
    url: "https://demo-clinic-website-pearl.vercel.app/",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Shivaji Maharaj Pathak",
    category: "Community/Event",
    year: "2024",
    tags: ["Web App", "Design"],
    url: "https://jagdamb-nagpur.vercel.app",
    image: "https://m.media-amazon.com/images/I/51JA2e2fSLL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Portfolio Website",
    category: "Personal Portfolio",
    year: "2024",
    tags: ["Portfolio", "Frontend"],
    url: "https://elvrix-portfolio.vercel.app",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
];

const cardVariants = {
  hidden: fadeUp.hidden,
  visible: (i) => fadeUp.visible(i),
  hover: {
    backgroundColor: "var(--color-surface)",
    transition: { duration: 0.3 },
  },
};

const imageVariants = {
  hidden: { scale: 1 },
  visible: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Work() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      {/* ─── Hero ─── */}
      <section
        className="grid-bg section"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              Portfolio
            </div>
          </motion.div>
          <motion.div
            className="display-text"
            style={{ fontSize: "clamp(4rem, 9vw, 9rem)", marginBottom: "2rem" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            OUR WORK
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              maxWidth: "520px",
              color: "var(--color-text-muted)",
              lineHeight: 1.8,
            }}
          >
            A selection of recent projects we've built, shipped, and grown with
            our clients worldwide.
          </motion.p>
        </div>
      </section>

      {/* ─── Project Grid ─── */}
      <section className="section">
        <div className="container">
          <div
            className="work-grid"
            style={{
              border: "1px solid var(--color-border)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
            }}
          >
            {projects.map((proj, i) => (
              <motion.a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                custom={i * 0.08}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  padding: "3rem 2.5rem",
                  borderRight:
                    i % 2 === 0 ? "1px solid var(--color-border)" : "none",
                  borderBottom:
                    i < projects.length - 2
                      ? "1px solid var(--color-border)"
                      : "none",
                  background: "var(--color-bg)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span className="tag">{proj.category}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {proj.year}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {proj.name}
                </h3>
                <div style={{ overflow: "hidden", borderRadius: "8px", marginBottom: "1.5rem", height: "220px", background: "var(--color-surface)" }}>
                  <motion.img
                    src={proj.image}
                    alt={proj.name}
                    variants={imageVariants}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div
                  variants={{
                    hidden: { x: 0, y: 0 },
                    visible: { x: 0, y: 0 },
                    hover: { x: 5, y: -5, transition: { duration: 0.3 } }
                  }}
                  style={{
                    position: "absolute",
                    bottom: "2rem",
                    right: "2rem",
                    fontSize: "1.5rem",
                    color: "var(--color-accent)",
                    opacity: 0.6,
                  }}
                >
                  ↗
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Clients / Partners ─── */}
      <section
        className="section-sm"
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                flexShrink: 0,
              }}
            >
              Trusted By
            </span>
            {[
              "TechCorp Inc.",
              "DataFlow AI",
              "NexaCloud",
              "BrightScale",
              "Orion Labs",
            ].map((name) => (
              <span
                key={name}
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.06em",
                  fontWeight: 400,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
