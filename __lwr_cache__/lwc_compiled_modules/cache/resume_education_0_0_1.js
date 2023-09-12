import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./education.html";
import '@lwc/synthetic-shadow';
class Education extends LightningElement {
  constructor(...args) {
    super(...args);
    this.format = "web";
    this.education = [{
      institute: "BITS, Pilani",
      degree: "Masters of Technology",
      duration: "January 2023 - December 2025",
      achievements: []
    }, {
      institute: "Lakshmi Narain College of Technology, Indore",
      degree: "Bachelor of Technology",
      duration: "June 2015 - June 2019",
      hasAchievement: false,
      achievements: ['Published 2 Research Papers:', '- "Student Management System and How to Manage Growing Database & Performance"', '- "Auto Reconsiling Finance Management System"', 'Volunteered as the Lead of the Student Photography Team for multiple events.', 'Handled the Final Year Tech Fest:', '- Served as the Lead student team member.', '- Led a diverse team of over 20 students across various departments.']
    }, {
      institute: "Laurels School International",
      degree: "12th ISC",
      duration: "June 2013 - June 2015",
      achievements: []
    }, {
      institute: "Laurels School International",
      degree: "10th ICSE",
      duration: "June 2010 - June 2013",
      achievements: []
    }];
  }
  // default to web format

  get printFormat() {
    return this.format === "print";
  }
  get webFormat() {
    return this.format === "web";
  }
  get tableFormat() {
    return this.format === "table";
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(Education, {
  publicProps: {
    format: {
      config: 0
    }
  },
  fields: ["education"]
});
export default _registerComponent(Education, {
  tmpl: _tmpl,
  sel: "resume-education",
  apiVersion: 59
});