import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogs = [
  {
    id: "01",
    category: "WEB DEVELOPMENT",
    title: "Professional Website Development for Modern Businesses",
    description:
      "A professional website should do more than look attractive. It should help visitors understand your business, explore your services, build trust and take meaningful action.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFocu8GDqW2rhtkL5wklPEf2XWUQBffpEBTJ-iLbxycWD6SPhpvDL9PE&s=10",

    content: `
      A professional website is often the first interaction a customer
      has with a business. It should clearly communicate what the business
      offers and make it easy for visitors to understand the services.

      A good website combines professional design, clear information,
      responsive layouts and meaningful calls to action.

      The goal is not simply to create a visually attractive website.
      The website should support the actual business and help visitors
      take the next step.
    `,
  },

  {
    id: "02",
    category: "WEB STRATEGY",
    title: "Why Website Development Should Start With Strategy",
    description:
      "Before choosing a template or writing code, a successful website should begin with understanding your customers, business goals, services and the actions you want visitors to take.",
    image:
      "https://www.idslogic.co.uk/wp-content/uploads/2025/12/Steps-Involved-in-the-Website-Development-Process-1.webp",

    content: `
      Website development should begin with strategy rather than design
      or coding.

      Before development starts, it is important to understand who the
      customers are, what they are looking for and what problems the
      business solves.

      These decisions influence the website structure, content,
      navigation, design and calls to action.
    `,
  },

  {
    id: "03",
    category: "RESPONSIVE DESIGN",
    title: "Why Responsive Web Development Is Essential",
    description:
      "Your customers may visit your website from smartphones, tablets or desktops. A responsive website adapts to different screen sizes while keeping content readable and easy to use.",
    image:
      "https://www.uplers.com/wp-content/uploads/2024/11/5.Responsive-Web-Design_-Why-It-Matters-in-2024.png",

    content: `
      People access websites from many different devices.

      A responsive website adapts its layout to smartphones, tablets
      and desktop screens.

      Text should remain readable, menus should be easy to use,
      buttons should be easy to tap and images should fit properly
      within the screen.

      A responsive website should also avoid unnecessary horizontal
      scrolling and complicated forms.
    `,
  },

  {
    id: "04",
    category: "SEO",
    title: "How to Build an SEO-Friendly Website",
    description:
      "SEO and web development should work together. Clear page structures, helpful headings, descriptive URLs, internal links and optimized images can create a better foundation for search visibility.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_bKYTPpNuID1vJewGCUZgglI-gZusqN9V86OCM1db2-m_cYOThhcOLE&s=10",

    content: `
      SEO should be considered during website development rather than
      added as an afterthought.

      A logical page structure, descriptive URLs, useful headings and
      internal links can help search engines understand the website.

      Images should also be optimized and given descriptive alt text
      where appropriate.

      Good SEO starts with creating useful content and a clear website
      structure.
    `,
  },

  {
    id: "05",
    category: "PERFORMANCE & SECURITY",
    title: "Website Speed and Security: The Essentials",
    description:
      "A website needs to be fast, reliable and secure. Optimized images, efficient code, good hosting, HTTPS, secure authentication and regular updates all contribute to a better website.",
    image:
      "https://www.velocityconsultancy.com/wp-content/uploads/2018/08/post-32.jpg",

    content: `
      Website performance affects the experience visitors have on a
      website.

      Large images, unnecessary scripts, plugins and inefficient code
      can make a website slower.

      Security is equally important. HTTPS, secure authentication,
      regular updates, backups and secure forms are important parts
      of maintaining a reliable website.
    `,
  },

  {
    id: "06",
    category: "BUSINESS GROWTH",
    title: "Building Trust Through Your Website",
    description:
      "Visitors want to know who is behind a business before contacting them. Genuine testimonials, clear contact information, project examples, team details and transparent information can help build trust.",
    image:
      "https://www.pixelfish.com.au/wp-content/uploads/How-To-Build-Trust-Through-Your-Website.jpg",

    content: `
      A website should help visitors feel confident about the business.

      Clear contact information, genuine testimonials, project examples,
      team information and accurate business details can help establish
      credibility.

      Trust should come from real information and real customer
      experiences rather than exaggerated or misleading claims.
    `,
  },
];

export default function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h1>Blog Not Found</h1>

        <Link to="/blog">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <main className="blog-details-page">
      {/* HERO */}

      <section className="grid-bg section blog-details-hero">
        <div className="container">
          <Link to="/blog" className="blog-back-link">
            ← BACK TO BLOGS
          </Link>

          <div className="section-label">{blog.category}</div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {blog.title}
          </motion.h1>

          <p className="blog-details-description">{blog.description}</p>
        </div>
      </section>

      {/* IMAGE */}

      <section className="section">
        <div className="container">
          <motion.div
            className="blog-details-image"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src={blog.image} alt={blog.title} />
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="section blog-details-content-section">
        <div className="container">
          <div className="blog-details-content">
            {blog.content
              .trim()
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
