import { LightningElement, api, track } from "lwc";
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
  @track projects = [
    {
      title: "B2B Industries CPQ",
      clouds: ["OmniStudio", "Sales Cloud", "Experience Cloud"],
      difficulties: [
        "Adapting to the nuanced requirements of various B2B industries during CPQ solution design",
        "Seamlessly integrating diverse Salesforce technologies to optimize the quotation process",
        "Ensuring the responsiveness and intuitiveness of user interfaces amidst complex data flows",
      ],
      majorFunctionalities: [
        "Dynamic Industries CPQ solutions tailored to the Communications Industry",
        "Enhanced user engagement via responsive Lightning Components and Community",
        "Streamlined navigation experience with OmniScripts",
      ],
      teamSize: "12 Developers, 4 QA, 2 TL, 6 Architects",
      role: "Developer",
      responsibilities: [
        "Developed guided flows using OmniScripts to customize client packages",
        "Integrated OmniStudio, Sales Cloud, and Experience Cloud for streamlined operations",
        "Enhanced user engagement with responsive Lightning Components",
      ],
      learnings:
        "Mastered CPQ solutions for diverse B2B sectors and integrated various Salesforce technologies.",
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
      printPermit : true
    },
    {
      title: "Finance Application",
      clouds: [
        "Sales Cloud",
        "Service Cloud",
        "Experience Cloud",
        "Financial Service Cloud",
      ],
      difficulties: [
        "Migrating a vast user base from Salesforce Classic to Lightning without disrupting daily operations",
        "Ensuring the precision of complex financial transaction processes",
        "Designing a scalable and efficient data archiving strategy amidst growing datasets",
      ],
      majorFunctionalities: [
        "User-friendly payment portals for a seamless transaction experience",
        "Custom dashboards tailored to financial teams for tracking and managing opportunities",
        "Dynamic decision-making tools adaptable to evolving business requirements",
      ],
      teamSize: "8 Developers, 2 QA, 1 TL",
      role: "Senior Developer",
      responsibilities: [
        "Led migration from Salesforce Classic to Lightning, redesigning page layouts for improved user experience",
        "Transferred VF Pages to Aura and LWC",
        "Devised data archiving strategy using AWS Redshift and S3",
      ],
      learnings:
        "Gained expertise in data management at scale and user experience in finance applications.",
      technologies: [
        "Salesforce Lightning",
        "Amazon Redshift",
        "Amazon S3",
        "Sales Cloud",
        "Service Cloud",
      ],
      printPermit : true
    },
    {
      title: "Event Management Application",
      clouds: ["Sales Cloud"],
      difficulties: [
        "Integrating diverse event management workflows into a unified system",
        "Achieving seamless interoperability with Current RMS",
        "Customizing client quote generation to cater to varied event types",
      ],
      majorFunctionalities: [
        "End-to-end event planning and execution workflow",
        "Real-time availability checks for event resources",
        "Automated client communication channels for event updates and notifications",
      ],
      teamSize: "1 Developer, 1 TL",
      role: "Developer",
      responsibilities: [
        "Automated event management workflows using Flows",
        "Integrated with Current RMS for real-time resource availability and task automation",
        "Created custom PDFs for client quotes and designed a 60-day task-based Opportunity journey",
      ],
      learnings:
        "Gained deep insights into event management dynamics and the importance of automation.",
      technologies: [
        "Sales Cloud",
        "Flows",
        "Process Builders",
        "Salesforce Triggers",
        "Current RMS Integration",
      ],
      printPermit : true
    },
    {
      title: "ANZ Bank Complaint Resolution",
      clouds: ["OmniStudio", "Apex", "LWC"],
      difficulties: [
        "Creating intuitive guided flows for effective customer care",
        "Developing custom functionalities for Complaint Entitlements and Milestones",
      ],
      majorFunctionalities: [
        "Guided flows for customer care executives using OmniScripts",
        "Custom functionalities for Complaint Entitlements and Milestones",
      ],
      teamSize: "Not specified",
      role: "Software Developer",
      responsibilities: [
        "Developed guided flows using OmniScripts to enhance customer care interactions",
        "Built custom functionalities for Complaint Entitlements and Milestones",
        "Collaborated with the backend team to streamline complaint resolution processes",
      ],
      learnings:
        "Enhanced skills in OmniStudio development and customer care processes.",
      technologies: ["OmniStudio", "Apex", "LWC"],
      printPermit : true
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
