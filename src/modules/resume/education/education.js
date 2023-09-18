import { LightningElement, api } from "lwc";
import "@lwc/synthetic-shadow";
export default class Education extends LightningElement {
  @api format = "web"; // default to web format

  get printFormat() {
    return this.format === "print";
  }

  get webFormat() {
    return this.format === "web";
  }
  get tableFormat() {
    return this.format === "table";
  }
  education = [
    {
      institute: "BITS, Pilani",
      degree: "Masters of Technology - Software Engineering ",
      duration: "January 2023 - December 2025",
      achievements: [],
    },
    {
      institute: "LNCT (RGPV), Indore",
      degree: "Bachelor of Technology - Computer Science",
      duration: "June 2015 - June 2019",
      hasAchievement: true,
      achievements: [
        "Published 2 Research Papers:",
        '- "Student Management System and How to Manage Growing Database & Performance"',
        '- "Auto Reconsiling Finance Management System"',

        "Volunteered as the Lead of the Student Photography Team for multiple events.",

        "Handled the Final Year Tech Fest:",
        "- Served as the Lead student team member.",
        "- Led a diverse team of over 20 students across various departments.",
      ],
    },
    {
      institute: "Laurels School International",
      degree: "12th ISC (Indian School Certificate)",
      duration: "June 2013 - June 2015",
      hasAchievement: true,
      achievements: [
        "Worked with the Graphics team of the Anual Fest and helped them create the visuals for the Stage.",
        "Developed one of the best Computer Science Project based on Java and Concepts of OOPs",
      ],
    },
    {
      institute: "Laurels School International",
      degree: "10th ICSE (Indian Certificate of Secondary Education)",
      duration: "June 2010 - June 2013",
      hasAchievement: true,
      achievements: [
        "Achieved A Grade in German Language",
        "Worked with the Anual Fest team of students and managed the dances & shows from the backend.",
      ],
    },
  ];
  timeline = [
    {
      institute: "Laurels School International",
      duration: "June 2010 - June 2013",
      degree: "10th ICSE (Indian Certificate of Secondary Education)",
    },
    {
      institute: "Laurels School International",
      duration: "June 2013 - June 2015",
      degree: "12th ISC (Indian School Certificate)",
    },
    {
      institute: "Lakshmi Narain College of Technology, Indore",
      duration: "June 2015 - June 2019",
      degree: "Bachelor of Technology - Computer Science",
    },
    {
      institute: "BITS, Pilani",
      duration: "January 2023 - December 2025",
      degree: "Masters of Technology - Software Engineering ",
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
