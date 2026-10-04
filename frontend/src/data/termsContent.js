// ============================================================
// TERMS & CONDITIONS CONTENT
// ============================================================
// HOW TO USE:
//   - Edit the `lastUpdated` date whenever you update these terms.
//   - Each object in the `sections` array becomes one section on the page.
//   - `title`   → the section heading (e.g. "1. Acceptance of Terms")
//   - `content` → an array of paragraphs. Each string = one paragraph.
//              → To add a bullet list, use an object:
//                 { type: "list", items: ["Item one", "Item two", ...] }
// ============================================================

const termsContent = {
  lastUpdated: "October 2026",

  intro:
    "Welcome to Elvrix TechSolutions. These Terms & Conditions (\"Terms\") govern your access to and use of our website, https://elvrixtechsolutions.com/ (\"Website\"), and the technology, development, consulting, and other services provided by Elvrix TechSolutions (\"Services\"). By accessing our Website, submitting an enquiry, requesting a quotation, placing an order, entering into a project agreement, or using our Services, you acknowledge that you have read, understood, and agreed to these Terms. If you do not agree with these Terms, please do not use our Website or Services.",

  sections: [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using the services provided by Elvrix TechSolutions, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy.",
        "If you do not agree to these terms, please do not use our services.",
      ],
    },
    {
      title: "2. Services",
      content: [
        "Elvrix TechSolutions provides technology services including but not limited to web development, mobile application development, UI/UX design, cloud infrastructure, and digital consulting.",
        "Elvrix TechSolutions may provide technology-related services including, but not limited to:",
        {
          type: "list",
          items: [
            "Website design and development;",
            "Web application development;",
            "Software development;",
            "UI/UX design;",
            "Website maintenance and support;",
            "Software maintenance and technical support;",
            "Digital and technology consulting;",
            "Custom software solutions;",
            "Domain, hosting, deployment, or related technical services where specifically agreed;",
            "Other technology services agreed between Elvrix TechSolutions and the Client.",
          ],
        },
        "The exact Services, deliverables, timelines, fees, revisions, technical requirements, and other project-specific terms may be specified in a separate quotation, proposal, work order, invoice, Statement of Work (\"SOW\"), or Project Agreement. In case of a conflict between these Terms and a separately executed written agreement, the specific written agreement shall prevail to the extent of the conflict.",
      ],
    },
    {
      title: "3. Client Responsibilities",
      content: [
        "As a client, you are responsible for:",
        {
          type: "list",
          items: [
            "Providing accurate and complete information required for project delivery.",
            "Timely review and approval of deliverables.",
            "Payment of agreed fees within the specified timeframes.",
            "Ensuring you have the legal right to any content or materials you provide to us.",
          ],
        },
      ],
    },
    {
      title: "4. Intellectual Property",
      content: [
        "Upon full payment of all agreed fees, the client receives ownership of the final deliverables specifically created for their project, unless otherwise agreed in writing.",
        "Elvrix TechSolutions retains ownership of all pre-existing tools, frameworks, libraries, and methodologies used in delivering the services.",
        "We reserve the right to showcase completed work in our portfolio unless the client requests confidentiality in writing prior to project commencement.",
      ],
    },
    {
      title: "5. Payment Terms",
      content: [
        "Payment terms are as specified in the individual project agreement or invoice. Standard terms require a deposit before work begins, with the remaining balance due upon project completion.",
        "Late payments may result in suspension of services. We reserve the right to charge interest on overdue amounts.",
      ],
    },
    {
      title: "6. Confidentiality",
      content: [
        "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement and not to disclose such information to third parties without prior written consent.",
      ],
    },
    {
      title: "7. Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, Elvrix TechSolutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
        "Our total liability to you for any claim shall not exceed the total fees paid by you to us in the three months preceding the claim.",
      ],
    },
    {
      title: "8. Warranty Disclaimer",
      content: [
        "Our services are provided on an \"as is\" and \"as available\" basis without any warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      ],
    },
    {
      title: "9. Governing Law",
      content: [
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in India.",
      ],
    },
    {
      title: "10. Changes to Terms",
      content: [
        "We reserve the right to update these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes your acceptance of the new terms.",
      ],
    },
    {
      title: "11. Contact Us",
      content: [
        "If you have any questions about these Terms and Conditions, please contact us at:",
        {
          type: "list",
          items: [
            "Email: Business@elvrixtechsolutions.com",
            "Phone: +91 90962 87077",
            "Website: elvrixtechsolutions.com",
          ],
        },
      ],
    },
  ],
};

export default termsContent;
