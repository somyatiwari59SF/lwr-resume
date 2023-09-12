import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./skill.html";
class Skill extends LightningElement {
  constructor(...args) {
    super(...args);
    this.skills = ['Apex', 'Visualforce', 'Lightning Components', 'Data Raptors', 'Integration Procedures', 'Industries CPQ', 'Copado', 'Manufacturing Cloud', 'Communication CPQ', 'Service Cloud', 'Sales Cloud', 'Financial Services Cloud'
    // ... add more skills as needed
    ];
    this.format = "web";
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
_registerDecorators(Skill, {
  publicProps: {
    format: {
      config: 0
    }
  },
  fields: ["skills"]
});
export default _registerComponent(Skill, {
  tmpl: _tmpl,
  sel: "resume-skill",
  apiVersion: 59
});