import { LightningElement, api } from "lwc";
import "@lwc/synthetic-shadow";
export default class Experience extends LightningElement {
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
      title: "Technical Consultant",
      title2: "Technical Consultant at Salesforce India Pvt. Ltd.",
      company: "Salesforce India Pvt. Ltd.",
      location: "Pune, India",
      dates: "July 2022 - Current",
      description: [
        "Drove advanced Industry Cloud solutions using Apex, Visualforce, and Lightning.",
        "Enhanced customer processes using specialized tools such as Data Raptors and Industries CPQ.",
        "Collaborated with AT&T for bespoke solution delivery, and ensured efficient and on-time user story delivery using Copado.",
        "Achieved consistent client satisfaction across various Salesforce domains like Manufacturing Cloud and Communication CPQ.",
      ],
    },
    {
      title: "Senior Salesforce Developer",
      title2: "Senior Salesforce Developer at 360 Degree Cloud Pvt. Ltd.",
      company: "360 Degree Cloud Pvt. Ltd.",
      location: "Delhi, India",
      dates: "August 2021 - July 2022",
      description: [
        "Designed and executed tailored Salesforce solutions aligning with business objectives.",
        "Collaborated with cross-functional teams for holistic solution delivery and ensured high data security standards.",
        "Enhanced system performance and code quality, and mentored junior developers.",
        "Delivered on-time projects across domains like Manufacturing Cloud and Sales Cloud.",
      ],
    },
    {
      title: "Salesforce Developer",
      title2: "Salesforce Developer at MindRuby Technologies LLP",
      company: "MindRuby Technologies LLP",
      location: "Indore, India",
      dates: "September 2020  - August 2021",
      description: [
        "Developed scalable Salesforce solutions using Apex, Visualforce, and Lightning, leading to enhanced operational efficiency and customer experience.",
        "Contributed to diverse projects, with a significant focus on Sales Cloud and system integrations.",
        "Designed Asynchronous Apex solutions and parsed complex JSON for intuitive displays within Lightning Web Components (LWC).",
      ],
    },
    {
      title: "Salesforce Developer",
      title2: "Salesforce Developer at Idevate Solutions Pvt. Ltd.",
      company: "Idevate Solutions Pvt. Ltd.",
      location: "Indore, India",
      dates: "June 2019 - September 2020",
      description: [
        "Optimized business processes and enhanced user engagement through tailored Salesforce solutions.",
        "Adopted a user-focused approach for feature delivery and collaborated with teams for integrated solutions.",
        "Troubleshot issues and maintained alignment with industry best practices.",
      ],
    },
    // More experiences here...
  ];
  openModal(event) {
    // Here, you can set the job description based on the clicked position
    this.selectedPositionDescription = 'The description of the job...'; // Replace this with the actual description
console.log('hel');
    // Display the modal and its backdrop
    this.template.querySelector('.jobDescriptionModal').classList.remove('slds-hide');
    this.template.querySelector('.jobDescriptionModalBackdrop').classList.remove('slds-hide');
}

closeModal() {
    this.template.querySelector('.jobDescriptionModal').classList.add('slds-hide');
    this.template.querySelector('.jobDescriptionModalBackdrop').classList.add('slds-hide');
}
}
