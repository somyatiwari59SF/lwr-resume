import { LightningElement, api } from "lwc";
import "@lwc/synthetic-shadow";
export default class Experience extends LightningElement {
  BASEURL = "/public/assets/companylogo/";
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
  experiences = [
    {
      id: 1,
      title: "Technical Consultant",
      title2: "Technical Consultant at Salesforce India Pvt. Ltd.",
      company: "Salesforce India Pvt. Ltd.",
      location: "Pune, India",
      dates: "July 2022 - Current",
      companyLogoSrc : this.BASEURL + "Salesforce-logo.png",
      description: [
        "Implemented advanced Industry Cloud solutions using Apex, Visualforce, and Lightning.",
        "Streamlined customer processes with Data Raptors and Industries CPQ.",
        "Delivered bespoke solutions for clients such as AT&T, ANZ Bank, American Family, and currently working with PPG - Pinnacle Pet Group, ensuring timely user story delivery via Copado.",
        "Achieved high client satisfaction across Salesforce domains including Manufacturing Cloud and Communication CPQ.",
      ],
    },
    {
      id: 2,
      title: "Senior Salesforce Developer",
      title2: "Senior Salesforce Developer at 360 Degree Cloud Pvt. Ltd.",
      company: "360 Degree Cloud Pvt. Ltd.",
      location: "Delhi, India",
      dates: "August 2021 - July 2022",
      companyLogoSrc : this.BASEURL + "360 degree cloud.webp",
      description: [
        "Developed tailored Salesforce solutions aligning with business objectives.",
        "Ensured secure, holistic solutions through cross-functional team collaboration.",
        "Enhanced system performance and code quality; mentored junior developers.",
        "Delivered projects on time in Manufacturing Cloud and Sales Cloud domains.",
      ],
    },
    {
      id: 3,
      title: "Salesforce Developer",
      title2: "Salesforce Developer at MindRuby Technologies LLP",
      company: "MindRuby Technologies LLP",
      location: "Indore, India",
      dates: "September 2020 - August 2021",
      companyLogoSrc : this.BASEURL + "mr-logo.png",
      description: [
        "Developed scalable Salesforce solutions using Apex, Visualforce, and Lightning.",
        "Enhanced operational efficiency and customer experience.",
        "Contributed to Sales Cloud and system integration projects.",
        "Designed Asynchronous Apex solutions and parsed complex JSON for LWC displays.",
      ],
    },
    {
      id: 4,
      title: "Salesforce Developer",
      title2: "Salesforce Developer at Idevate Solutions Pvt. Ltd.",
      company: "Idevate Solutions Pvt. Ltd.",
      location: "Indore, India",
      dates: "June 2019 - September 2020",
      companyLogoSrc : this.BASEURL + "ideavate.png",
      description: [
        "Optimized business processes and enhanced user engagement with tailored Salesforce solutions.",
        "Focused on user-centric feature delivery and team collaboration.",
        "Troubleshot issues and maintained alignment with industry best practices.",
      ],
    },
  ];  
  selectedJob = {};
  openModal(event) {
    let id = event.target.dataset.id;
    console.log(id);
    let selectedExperience = this.experiences.find(exp => exp.id == id);
    if (selectedExperience) {
        this.selectedJob = selectedExperience;
        this.template.querySelector('.jobDescriptionModal').classList.remove('slds-hide');
        this.template.querySelector('.jobDescriptionModalBackdrop').classList.remove('slds-hide');
    } else {
        this.selectedJob = {};
    }
    
    console.log(this.selectedPositionDescription);
    // Display the modal and its backdrop
}

closeModal() {
    this.template.querySelector('.jobDescriptionModal').classList.add('slds-hide');
    this.template.querySelector('.jobDescriptionModalBackdrop').classList.add('slds-hide');
}

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
