import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import termsContent from "../data/termsContent";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function TermsAndConditions() {
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
              Legal
            </div>
          </motion.div>
          <motion.div
            className="display-text"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)", marginBottom: "2rem" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            TERMS &amp;
            <br />
            CONDITIONS
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.9rem",
              letterSpacing: "0.06em",
            }}
          >
            Last updated: {termsContent.lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* Intro paragraph */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.9,
                fontSize: "1rem",
                marginBottom: "4rem",
                padding: "2rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderLeft: "3px solid var(--color-accent)",
              }}
            >
              {termsContent.intro}
            </motion.p>

            {/* Sections */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
            >
              {termsContent.sections.map((section, index) => (
                <motion.div
                  key={index}
                  custom={index * 0.05}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  style={{
                    paddingBottom: "3rem",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {/* Section number badge */}
                  <div
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      color: "var(--color-accent)",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    SECTION {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Section title */}
                  <h2
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      color: "var(--color-heading)",
                      marginBottom: "1.25rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {section.title}
                  </h2>

                  {/* Section content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {section.content.map((block, bIndex) => {
                      // Bullet list block
                      if (
                        typeof block === "object" &&
                        block.type === "list"
                      ) {
                        return (
                          <ul
                            key={bIndex}
                            style={{
                              paddingLeft: "1.5rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.6rem",
                            }}
                          >
                            {block.items.map((item, iIndex) => (
                              <li
                                key={iIndex}
                                style={{
                                  color: "var(--color-text-muted)",
                                  lineHeight: 1.8,
                                  fontSize: "0.95rem",
                                  listStyleType: "none",
                                  paddingLeft: "1rem",
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    color: "var(--color-accent)",
                                    fontWeight: 700,
                                  }}
                                >
                                  ›
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      // Normal paragraph
                      return (
                        <p
                          key={bIndex}
                          style={{
                            color: "var(--color-text-muted)",
                            lineHeight: 1.9,
                            fontSize: "0.95rem",
                          }}
                        >
                          {block}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Back link */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ marginTop: "4rem", textAlign: "center" }}
            >
              <Link
                to="/"
                className="btn btn-primary"
                style={{ display: "inline-block", padding: "0.875rem 2.5rem" }}
              >
                ← Back to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
