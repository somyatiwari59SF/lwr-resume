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
      institute: "LNCT (RGPV), Indore",
      degree: "B.Tech in Computer Science",
      duration: "June 2015 - June 2019",
      hasAchievement: true,
      achievements: [
        "Published 2 research papers on database management and finance reconciliation.",
        "Led the Student Photography Team for multiple events.",
        "Organized and led a team of 20+ students for the Final Year Tech Fest.",
      ],
    },
    {
      institute: "Laurels School International",
      degree: "12th ISC",
      duration: "June 2013 - June 2015",
      hasAchievement: true,
      achievements: [
        "Collaborated with the graphics team for the annual fest stage visuals.",
        "Developed an advanced Java-based Computer Science project.",
      ],
    },
    {
      institute: "Laurels School International",
      degree: "10th ICSE",
      duration: "June 2010 - June 2013",
      hasAchievement: true,
      achievements: [
        "Achieved A Grade in German Language.",
        "Managed backend operations for dances and shows during the annual fest.",
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
