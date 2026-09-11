import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import "./Blog.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const blogs = [
  {
    id: "01",
    category: "WEB DEVELOPMENT",
    title: "Professional Website Development for Modern Businesses",
    description:
      "A professional website should do more than look attractive. It should help visitors understand your business, explore your services, build trust and take meaningful action.",
    date: "10 SEP 2026",
    readTime: "6 MIN READ",
    author: "ELVRIX TEAM",
    image: "/images/blog/professional-website.jpg",
  },

  {
    id: "02",
    category: "WEB STRATEGY",
    title: "Why Website Development Should Start With Strategy",
    description:
      "Before choosing a template or writing code, a successful website should begin with understanding your customers, business goals, services and the actions you want visitors to take.",
    date: "10 SEP 2026",
    readTime: "5 MIN READ",
    author: "ELVRIX TEAM",
    image: "/images/blog/website-strategy.jpg",
  },

  {
    id: "03",
    category: "RESPONSIVE DESIGN",
    title: "Why Responsive Web Development Is Essential",
    description:
      "Your customers may visit your website from smartphones, tablets or desktops. A responsive website adapts to different screen sizes while keeping content readable and easy to use.",
    date: "10 SEP 2026",
    readTime: "5 MIN READ",
    author: "ELVRIX TEAM",
    image: "/images/blog/responsive-web.jpg",
  },

  {
    id: "04",
    category: "SEO",
    title: "How to Build an SEO-Friendly Website",
    description:
      "SEO and web development should work together. Clear page structures, helpful headings, descriptive URLs, internal links and optimized images can create a better foundation for search visibility.",
    date: "10 SEP 2026",
    readTime: "7 MIN READ",
    author: "ELVRIX TEAM",
    image: "/images/blog/seo-website.jpg",
  },

  {
    id: "05",
    category: "PERFORMANCE & SECURITY",
    title: "Website Speed and Security: The Essentials",
    description:
      "A website needs to be fast, reliable and secure. Optimized images, efficient code, good hosting, HTTPS, secure authentication and regular updates all contribute to a better website.",
    date: "10 SEP 2026",
    readTime: "6 MIN READ",
    author: "ELVRIX TEAM",
    image: "/images/blog/speed-security.jpg",
  },

  {
    id: "06",
    category: "BUSINESS GROWTH",
    title: "Building Trust Through Your Website",
    description:
      "Visitors want to know who is behind a business before contacting them. Genuine testimonials, clear contact information, project examples, team details and transparent information can help build trust.",
    date: "10 SEP 2026",
    readTime: "5 MIN READ",
    author: "ELVRIX TEAM",
    image: "/images/blog/building-trust.jpg",
  },
];

function Blog() {
  return (
    <div className="blog-page">
      {/* ================= HERO ================= */}

      <section
        className="grid-bg section blog-hero"
        style={{
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              OUR INSIGHTS
            </div>
          </motion.div>

          <motion.div
            className="display-text blog-main-title"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            BLOGS
          </motion.div>

          <motion.p
            className="blog-hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            Ideas, insights and practical knowledge about websites, technology
            and digital growth.
          </motion.p>
        </div>
      </section>

      {/* ================= BLOG LIST ================= */}

      <section className="section blog-list-section">
        <div className="container">
          <div className="blog-list">
            {blogs.map((blog, index) => (
              <motion.article
                className="blog-card"
                key={blog.id}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
              >
                {/* ================= IMAGE ================= */}

                <div className="blog-image-wrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                    loading="lazy"
                  />

                  <div className="blog-number">{blog.id}</div>
                </div>

                {/* ================= CONTENT ================= */}

                <div className="blog-content">
                  <div className="blog-top-meta">
                    <span>VOL. I</span>

                    <span className="blog-dot">•</span>

                    <span>NO. {blog.id}</span>
                  </div>

                  <div className="blog-category">{blog.category}</div>

                  <h2>
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h2>

                  <p className="blog-description">{blog.description}</p>

                  <div className="blog-bottom-meta">
                    <span>{blog.date}</span>

                    <span className="blog-diamond">✦</span>

                    <span>{blog.readTime}</span>

                    <span className="blog-diamond">✦</span>

                    <span className="blog-author">BY {blog.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="blog-cta">
        <div className="container">
          <motion.div
            className="blog-cta-content"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="section-label">HAVE A PROJECT IN MIND?</div>

            <h2>
              LET'S BUILD
              <br />
              <span>Something Great.</span>
            </h2>

            <p>
              From strategy to development, create a digital experience that
              actually works for your business.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
