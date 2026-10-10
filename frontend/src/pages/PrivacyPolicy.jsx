
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const privacyContent = {
  lastUpdated: "10-10-2026",

  intro:
    "Elvrix TechSolutions respects your privacy and is committed to protecting the personal information you provide when you visit or use our website, services, or communicate with us. This Privacy Policy explains what information we may collect, how we use it, when we may share it, how we protect it, and the choices and rights available to you. By using our website or voluntarily providing your personal information to us, you acknowledge that you have read and understood this Privacy Policy.",

  sections: [
    {
      title: "Information We Collect",
      content: [
        "Depending on how you interact with our website and services, we may collect the following categories of information.",

        {
          type: "list",
          items: [
            "Information You Provide Directly: Full name, business or company name, email address, mobile or telephone number, postal or business address, project requirements, service enquiries, quotation requests, billing and transaction-related information, and information submitted through contact or enquiry forms.",
            "Project Materials: Documents, content, images, logos, files, software, business information, databases, trademarks, credentials, and other materials you provide for a project or service.",
            "Other Information: Any additional information you voluntarily choose to provide when communicating with us.",
            "Cookies and Similar Technologies: We may use cookies or similar technologies to operate, secure, analyse, and improve our website.",
          ],
        },
      ],
    },

    {
      title: "How We Use Your Information",
      content: [
        "We may process your information for the following purposes, as applicable:",
        {
          type: "list",
          items: [
            "Responding to enquiries, questions, and service requests.",
            "Preparing quotations, estimates, and proposals.",
            "Providing website development, software development, web application development, technology, and other agreed services.",
            "Communicating with clients regarding projects, deliverables, and services.",
            "Preparing invoices and maintaining business and financial records.",
            "Carrying out any other purpose specifically communicated to you when your information is collected.",
          ],
        },
        "We aim to collect and process only information that is reasonably necessary for the relevant purpose.",
      ],
    },

    {
      title: "Legal Basis and Consent",
      content: [
        "Where applicable, we may process personal data based on your consent, to provide requested goods or services, to comply with applicable law, or for other lawful purposes permitted under applicable law.",
        "The Digital Personal Data Protection (DPDP) Act, 2023 provides a framework for the processing of digital personal data in India. Where applicable, consent must satisfy the requirements of the law, including being free, specific, informed, unconditional, and unambiguous, with a clear affirmative action.",
      ],
    },

    {
      title: "Sharing and Disclosure of Personal Information",
      content: [
        "We do not sell your personal information as a commercial product. However, we may share information where reasonably necessary for our business operations, to provide our services, or to comply with applicable law.",
        {
          type: "list",
          items: [
            "Employees and Authorised Personnel: Individuals who need access to information to perform their responsibilities.",
            "Contractors and Service Providers: Parties working on our behalf to support our services and business operations.",
            "Technology Providers: Hosting, cloud storage, email, communication, analytics, payment, and other technology providers.",
            "Professional Advisers: Accountants, auditors, legal advisers, and other professional consultants where necessary.",
            "Government and Law Enforcement: Authorities or agencies where disclosure is required or permitted by applicable law.",
          ],
        },
        
      ],
    },

    {
      title: "Client and Project Information",
      content: [
        "If you engage Elvrix TechSolutions for development or technology services, you may provide project-related information, including content, documents, images, software, credentials, business information, databases, logos, trademarks, and other materials.",
        "We will use such information for the agreed project or service and for related legitimate business purposes.",
        "Clients are responsible for ensuring that they have the necessary rights, permissions, licences, and authorisations to provide such materials to Elvrix TechSolutions.",
      ],
    },

    {
      title: "Data Retention",
      content: [
        {
          type: "list",
          items: [
            "The nature of the information.",
            "The purpose for which the information was collected.",
            "The nature of our relationship with you.",
            "Applicable contractual requirements.",
            "Applicable legal or regulatory requirements.",
          ],
        },
        "When personal information is no longer required, we may securely delete, destroy, anonymise, or otherwise dispose of it in accordance with applicable requirements.",
      ],
    },

    {
      title: "Data Security",
      content: [
        "We take reasonable security measures designed to protect personal information against unauthorised access, disclosure, alteration, misuse, loss, or destruction.",
        "Depending on the nature of the information and services involved, safeguards may include access controls, authentication, secure hosting, restricted access, backups, and other appropriate technical and organisational measures.",
        "However, no method of transmission over the Internet or method of electronic storage can be guaranteed to be completely secure. We therefore cannot guarantee absolute security.",
      ],
    },

    {
      title: "Third-Party Websites and Services",
      content: [
        "Our website or communications may contain links to third-party websites, applications, platforms, or services.",
        "We are not responsible for the privacy practices, content, security, or policies of third-party websites or services. Your interactions with those services may be governed by their own terms and privacy policies.",
        "We encourage you to review the applicable privacy policies before providing personal information to third-party websites, applications, or service providers.",
      ],
    },

    {
      title: "Payments",
      content: [
        "Where online or other payment arrangements are offered, payment transactions may be processed through the applicable payment providers or financial institutions.",
        "Elvrix TechSolutions may not directly receive or store complete payment-card information where such information is processed by a third-party payment provider. The relevant provider may process your information in accordance with its own privacy policy and terms.",
        "Elvrix TechSolutions accepts payments through the following methods, as applicable:",
        {
          type: "list",
          items: [
            "Cheques.",
            "NetBanking.",
            "UPI (Unified Payments Interface).",
          ],
        },
        "Payment-related information may be used to verify transactions, maintain financial records, issue invoices, resolve payment disputes, and meet applicable legal or accounting requirements.",
      ],
    },

    {
      title: "Your Privacy Rights",
      content: [
        "Subject to applicable law, you may have certain rights relating to your personal data, including the following:",
        {
          type: "list",
          items: [
            "Access: Request applicable information about the processing of your personal data.",
            "Correction: Request correction of inaccurate or incomplete personal information, where applicable.",
            "Erasure: Request deletion or erasure of personal data where permitted by applicable law.",
            "Withdrawal of Consent: Withdraw consent where processing is based on consent.",
            "Grievance Redressal: Raise a privacy-related concern or exercise applicable complaint and grievance rights.",
            "Nomination: Nominate another individual to exercise applicable rights in accordance with the law.",
          ],
        },
        "The DPDP Act, 2023 provides specified rights to Data Principals, including rights relating to information, correction, erasure, grievance redressal, and nomination, subject to the Act and applicable rules.",
        "To exercise an applicable right, please contact us using the details provided in the Contact Us section below. We may need to verify your identity and assess your request in accordance with applicable law.",
      ],
    },

    {
      title: "Withdrawal of Consent",
      content: [
        "Where we process your personal data based on consent, you may request withdrawal of that consent through the contact details provided in this policy or through an applicable consent-management mechanism, where available.",
        "Withdrawal of consent will not affect the lawfulness of processing carried out before the withdrawal.",
        "Depending on the circumstances, withdrawing consent may affect our ability to provide certain services or features that require the relevant information. We will handle such requests in accordance with applicable law.",
      ],
    },

    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our services, website, technology, legal requirements, or privacy practices.",
        "The updated version will be published on this page with a revised Last Updated date.",
        "You are encouraged to review this Privacy Policy periodically to remain informed about how we handle personal information.",
      ],
    },

    {
      title: "Contact Us",
      content: [
        "If you have questions, concerns, requests, or complaints regarding this Privacy Policy or our handling of personal information, you may contact us using the details below.",

        {
          type: "list",
          items: [
            "Business Name: Elvrix TechSolutions.",
            "Website: https://elvrixtechsolutions.com/",
            "Email: techsolutionselvrix@gmail.com",
            "Phone: 9096287077",
            "Business Address: 6/7 Tarangshrung Sai Nagar, Zingabai Takli, Nagpur - 440030.",
          ],
        },

        "If you have any questions about this Privacy Policy or data protection queries relating to our services, please contact us using the email address or other contact details provided above.",
      ],
    },
  ],
};



export default function PrivacyPolicy() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      {/* Hero */}
      <section
        className="grid-bg section"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="section-label" style={{ marginBottom: "1.5rem" }}>
              Legal
            </div>
          </motion.div>

          <motion.div
            className="display-text"
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              marginBottom: "2rem",
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            PRIVACY
            <br />
            POLICY
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
            Last updated: {privacyContent.lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section">
        <div className="container">
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* Introduction */}
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
              {privacyContent.intro}
            </motion.p>

            {/* Policy Sections */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
              }}
            >
              {privacyContent.sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  style={{
                    paddingBottom: "3rem",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {/* Section Number */}
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

                  {/* Section Title */}
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

                  {/* Section Content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {section.content.map((block, blockIndex) => {
                      if (
                        typeof block === "object" &&
                        block.type === "list"
                      ) {
                        return (
                          <ul
                            key={blockIndex}
                            style={{
                              paddingLeft: "1.5rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.6rem",
                              margin: 0,
                            }}
                          >
                            {block.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
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
                                  aria-hidden="true"
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

                      return (
                        <p
                          key={blockIndex}
                          style={{
                            color: "var(--color-text-muted)",
                            lineHeight: 1.9,
                            fontSize: "0.95rem",
                            margin: 0,
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

            {/* Back to Home */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                marginTop: "4rem",
                textAlign: "center",
              }}
            >
              <Link
                to="/"
                className="btn btn-primary"
                style={{
                  display: "inline-block",
                  padding: "0.875rem 2.5rem",
                }}
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

