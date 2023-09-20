import { LightningElement, api } from "lwc";
import "@lwc/synthetic-shadow";
export default class Project extends LightningElement {
  @api
  format = "web"; // default to web format

  get printFormat() {
    return this.format === "print";
  }

  get webFormat() {
    return this.format === "web";
  }
  projects = [
    {
      title: "B2B INDUSTRIES CPQ",
      clouds: ["OMNISTUDIO", "SALES CLOUD", "EXPERIENCE CLOUD"],
      difficulties: [
        "Adapting to the nuanced requirements of various B2B industries during CPQ solution design",
        "Seamlessly integrating diverse Salesforce technologies to optimize the quotation process",
        "Ensuring the responsiveness and intuitiveness of user interfaces amidst complex data flows"
      ],
      majorFunctionalities: [
        "Dynamic Industries CPQ solutions tailored to the Communications Industry",
        "Enhanced user engagement via responsive Lightning Components and Community",
        "Streamlined navigation experience with OmniScripts"
      ],
      teamSize : "12 Developers, 4 QA, 2 TL, 6 Architects",
      role : "Developer",
      learnings: "Mastered the intricacies of CPQ solutions for diverse B2B sectors, honed skills in integrating varied Salesforce technologies, and affirmed the significance of preliminary POCs in ensuring project clarity and success.",
      printPermit : true,
      objective:
        "Design and implement a robust B2B Industries CPQ solution leveraging key Salesforce technologies to optimize and streamline the quotation process for B2B industries.",
      responsibilities: [
        "Championed the design and deployment of B2B Industries CPQ, leveraging OmniStudio, Sales Cloud, and Experience Cloud.",
        "Developed responsive Lightning Components to uplift user engagement and designed OmniScripts for intuitive navigation.",
        "Handled comprehensive data management with Integration Procedures and Data Raptors, and ensured smooth deployments with tools like Copado and Git.",
      ],
      technologies: [
        "OmniStudio",
        "Sales Cloud",
        "Experience Cloud",
        "Lightning Components",
        "OmniScripts",
        "Integration Procedures",
        "Data Raptors",
        "Apex",
        "Copado",
        "Git",
      ],
    },
    {
      title: "KETCHUP BRAND",
      clouds: ["MANUFACTURING CLOUD", "EXPERIENCE CLOUD"],
      difficulties: [
        "Transforming traditional production tracking and inventory management systems",
        "Merging legacy interfaces with Salesforce Experience Cloud for an upgraded order placement experience",
        "Ensuring seamless integration while preserving data integrity across systems"
      ],
      majorFunctionalities: [
        "Real-time production tracking and advanced inventory management",
        "Unified and intuitive order placement interface through Experience Cloud",
        "Cross-functional collaboration tools for integrated solution development"
      ],
      teamSize : "1 Developer, 1 Architect",
      role : "Senior Developer",
      learnings: "Grasped the complexities of manufacturing logistics in the food industry, realized the transformative power of digitized production systems, and deepened understanding of Salesforce's potential in enhancing B2C interactions.",
      printPermit : true,
      objective:
        "Implement Manufacturing Cloud and Experience Cloud to enhance production tracking and elevate the customer ordering experience for a renowned Ketchup Brand.",
      responsibilities: [
        "Piloted the integration of Manufacturing Cloud, bringing transformational changes to production tracking and inventory management.",
        "Reimagined the user interface with Experience Cloud, facilitating seamless order placements for customers.",
        "Collaborated cross-functionally and used a blend of Salesforce technologies for an optimized and tailored solution.",
      ],
      technologies: [
        "Manufacturing Cloud",
        "Sales Cloud",
        "Experience Cloud",
        "Lightning Components",
        "Apex",
        "Visualforce Pages",
        "JavaScript",
      ],
    },
    {
      title: "E-COMMERCE COMPLAINT MANAGEMENT",
      clouds: ["SALES CLOUD", "SERVICE CLOUD"],
      difficulties :  [
        "Automating the multifaceted complaint management backend operations",
        "Streamlining Salesforce administrative tasks for a diverse user base"
      ],
      majorFunctionalities :  [
        "An automated backend complaint resolution process",
        "Customized Salesforce permissions and record visibility for tailored user experiences"
      ],
      teamSize : "2 Developers",
      role : "Developer",
      learnings : "Prioritize proof-of-concept (POC) development for uncharted areas to ensure clarity and success.",
      printPermit : true,
      objective:
        "Establish a robust complaint management system for an e-commerce platform by integrating the capabilities of Sales Cloud and Service Cloud to streamline backend complaint processing and enhance user experience.",
      responsibilities: [
        "Directed a dedicated team focused on automating complaint management backend operations.",
        "Introduced state-of-the-art Lightning Web Components to enhance parcel status visibility.",
        "Oversaw user permissions, record visibility, and other Salesforce administrative tasks to ensure a seamless user experience.",
      ],
      technologies: [
        "Sales Cloud",
        "Service Cloud",
        "Lightning Web Components (LWC)",
        "Salesforce Flows",
        "Salesforce permissions and sharing.",
      ],
    },
    {
      title: "FINANCE APPLICATION",
      clouds: ["SALES CLOUD", "SERVICE CLOUD", "EXPERIENCE CLOUD"],
      difficulties : [
        "Migrating a vast user base from Salesforce Classic to Lightning without disrupting daily operations",
        "Ensuring the precision of complex financial transaction processes",
        "Designing a scalable and efficient data archiving strategy amidst growing datasets"
      ],
      majorFunctionalities : [
        "User-friendly payment portals for a seamless transaction experience",
        "Custom dashboards tailored to financial teams for tracking and managing opportunities",
        "Dynamic decision-making tools adaptable to evolving business requirements"
      ],
      teamSize : "8 Developers, 2 QA, 1 TL",
      role : "Senior Developer",
      learnings : "Deepened understanding of financial systems intricacies, mastered the art of data management at scale, and appreciated the significance of user experience in finance applications.",
      printPermit : true,
      objective:
        "Elevate the capabilities of the existing Finance Application by focusing on the augmentation of payment processes, refining user experience through Salesforce Lightning, and bolstering data archiving and management solutions.",
      responsibilities: [
        "Payment Infrastructure Overhaul: Championed the integration of pioneering payment solutions, enabling seamless transactions on the public site and methodically organizing backend disbursements.",
        "Salesforce Lightning Migration: Led the migration of users from Classic to Lightning, further enriching user interaction through the introduction of a custom dashboard concentrated on Opportunity details.",
        "Advanced Data Management: Devised an astute data archiving strategy, seamlessly shifting older data sets to Amazon Redshift while transitioning attachments to Amazon S3, thus safeguarding data integrity and accessibility.",
        "Precision User Access Control: Deftly maneuvered data sharing and visibility constraints, adapting user access based on defined regional determinants and related factors.",
        "Integrative Decision Logic Framework: Instituted a dynamic decision-making matrix, fortified by its adaptability via decision records, catering to fluid business requirements.",
      ],
      technologies: [
        "Salesforce Lightning",
        "Amazon Redshift",
        "Amazon S3",
        "Sales Cloud",
        "Service Cloud",
      ],
    },
    {
      title: "EVENT MANAGEMENT APPLICATION",
      clouds: ["SALES CLOUD"],
      difficulties : [
        "Integrating diverse event management workflows into a unified system",
        "Achieving seamless interoperability with Current RMS",
        "Customizing client quote generation to cater to varied event types"
      ],
      majorFunctionalities : [
        "End-to-end event planning and execution workflow",
        "Real-time availability checks for event resources",
        "Automated client communication channels for event updates and notifications"
      ],
      teamSize : "1 Developers, 1 TL",
      role : "Developer",
      learnings : "Gained deep insights into event management dynamics and the importance of automation in ensuring streamlined operations.",
      printPermit : true,
      objective:
        "Develop a comprehensive Event Management Application within Sales Cloud to seamlessly manage events, from integrations with rental management systems to generating client quotes.",
      responsibilities: [
        "Drove flow and process automation for an integrated event management experience.",
        "Achieved successful integration with Current RMS through Flows and Process Builders.",
        "Initiated the creation of custom PDFs for streamlined client quotes and designed an exhaustive 60-day task-based Opportunity journey.",
      ],
      technologies: [
        "Sales Cloud",
        "Flows",
        "Process Builders",
        "Salesforce Triggers",
        "Current RMS Integration.",
      ],
    },
    {
      title: "FACEBOOK MARKETING APP EXCHANGE APP",
      clouds: ["OMNISTUDIO", "SALES CLOUD", "EXPERIENCE CLOUD"],
      difficulties: [
        "Navigating Facebook's evolving API standards",
        "Ensuring GDPR compliance for user data",
        "Achieving a balance between functionality and AppExchange compliance."
      ],
      majorFunctionalities : [
        "Facebook Ad Campaign creation and management",
        "Performance analytics dashboard",
        "Real-time sync of Ad engagement metrics"
      ],
      teamSize : "5 Developers, 2 QA, 1 TL, 2 Architects",
      role : "Senior Developer",
      learnings: "Gained proficiency in integrating third-party APIs with Salesforce, and understanding the nuances of publishing on the AppExchange.",
      printPermit : true,
      objective:
        "Create a sophisticated Facebook Marketing application on Salesforce AppExchange that seamlessly integrates with Facebook's core APIs while delivering an intuitive user experience and adhering to AppExchange standards.",
      responsibilities: [
        "Oversaw the design and modeling of the application architecture, setting the foundation for seamless functionality.",
        "Mastered integration with Facebook's Graph APIs using REST Apex, ensuring efficient data exchange.",
        "Enhanced the app's user experience through custom Lightning Web Components and ensured AppExchange standards compliance through rigorous testing protocols.",
      ],
      technologies: [
        "Salesforce AppExchange",
        "Facebook Graph API",
        "REST Apex",
        "Lightning Web Components (LWC)",
        "Salesforce Custom Objects.",
      ],
    },
  ];
  renderedCallback() {
    const cardComponents = this.template.querySelectorAll("lightning-card");
    console.log(cardComponents);
    cardComponents.forEach((cardComponent) => {
      console.log(cardComponent);
      // Try to access the shadow root
      const shadow = cardComponent.shadowRoot;
      console.log(shadow);
      if (shadow) {
        const articleElement = shadow.querySelector("article.slds-card");
        if (articleElement) {
          articleElement.classList.add("slds-card_boundary");
        }
      }
    });
  }
}
