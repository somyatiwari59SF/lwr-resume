import { LightningElement, api } from "lwc";
import "@lwc/synthetic-shadow";
export default class Experience extends LightningElement {
  BASEURL = "/public/assets/certificationlogo/";
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
  certifications = [
    {
      certName: "PLC Accredited Process Automation",
      certNumber: "000000",
      hascertNumber: false,
      hasissueDate: true,
      issueDate: "July 2021",
      certImgSrc: this.BASEURL + "Process-Automation.png",
    },
    {
      certName: "PLC Accredited Financial Service Cloud",
      certNumber: "000000",
      hascertNumber: false,
      hasissueDate: true,
      issueDate: "August 2023",
      certImgSrc: this.BASEURL + "Financial-Services-Cloud.png",
    },
    {
      certName: "Salesforce Certified Platform Developer I",
      certNumber: "21827907",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "January 2021",
      certImgSrc: this.BASEURL + "PD1.png",
    },
    {
      certName: "Salesforce Certified Platform Developer II",
      certNumber: "3919318",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "December 2023",
      certImgSrc: this.BASEURL + "PD2.png",
    },
    {
      certName: "Salesforce Certified Administrator",
      certNumber: "21912616",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "March 2021",
      certImgSrc: this.BASEURL + "Admin.png",
    },
    {
      certName: "Salesforce Certified Platform App Builder",
      certNumber: "22623381",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "November 2021",
      certImgSrc: this.BASEURL + "App-Builder.png",
    },
    {
      certName: "Salesforce Certified JavaScript Developer 1",
      certNumber: "22646989",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "November 2021",
      certImgSrc: this.BASEURL + "JD1.png",
    },
    {
      certName: "Salesforce Certified OmniStudio Developer",
      certNumber: "2449548",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "July 2022",
      certImgSrc: this.BASEURL + "OmniStudio-Developer.png",
    },
    {
      certName: "Salesforce Certified Industries CPQ Developer",
      certNumber: "2461066",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "July 2022",
      certImgSrc: this.BASEURL + "Industries-CPQ-Developer.png",
    },
    {
      certName: "Salesforce Certified CPQ Specialist",
      certNumber: "4641701",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "July 2024",
      certImgSrc: this.BASEURL + "cpq-specialist.png",
    },
    {
      certName: "Vlocity Certified Order Management Developer I",
      certNumber: "23492926",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "August 2022",
      certImgSrc: this.BASEURL + "vlocity.png",
    },
    {
      certName: "Salesforce Certified Associate",
      certNumber: "2592833",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "September 2022",
      certImgSrc: this.BASEURL + "Associate.png",
    },
    {
      certName: "Salesforce Certified Sharing and Visibility Architect",
      certNumber: "2645683",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "October 2022",
      certImgSrc: this.BASEURL + "Sharing-and-Visibility-Architect.png",
    },
    {
      certName: "Salesforce Certified Integration Architecture Designer",
      certNumber: "4568050",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "June 2022",
      certImgSrc: this.BASEURL + "integration-architect.png",
    },
    {
      certName: "Salesforce Certified Data Architect",
      certNumber: "2819517",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "December 2022",
      certImgSrc: this.BASEURL + "Data-Architect.png",
    },
    {
      certName: "Salesforce Certified Application Architect",
      certNumber: "2819518",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "December 2022",
      certImgSrc: this.BASEURL + "Application-Architect.png",
    },
    {
      certName: "Salesforce Certified Sales Cloud Consultant",
      certNumber: "3442727",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "May 2023",
      certImgSrc: this.BASEURL + "Sales-Cloud.png",
    },
    {
      certName: "Salesforce Certified Service Cloud Consultant",
      certNumber: "4372735",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "April 2024",
      certImgSrc: this.BASEURL + "service-cloud.png",
    },
    {
      certName: "Salesforce Certified Experiance Cloud Consultant",
      certNumber: "4567981",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "June 2024",
      certImgSrc: this.BASEURL + "experiance-cloud.png",
    },
    {
      certName:
        "Salesforce Certified Tableau CRM and Einstein Discovery Consultant",
      certNumber: "3557354",
      hascertNumber: true,
      hasissueDate: true,
      issueDate: "July 2023",
      certImgSrc: this.BASEURL + "Tableau-CRM.png",
    },
    {
      certName: "Copado Certified Fundamentals II",
      certNumber: "015631",
      hascertNumber: true,
      hasissueDate: false,
      certImgSrc: this.BASEURL + "Copado-F2.png",
    },
    {
      certName: "Copado Certified Fundamentals I",
      certNumber: "015246",
      hascertNumber: true,
      hasissueDate: false,
      certImgSrc: this.BASEURL + "Copado-F1.png",
    },
  ];
  connectedCallback() {
    console.log(this.certifications.length);
  }
}
