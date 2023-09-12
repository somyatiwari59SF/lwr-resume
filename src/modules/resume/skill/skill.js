import { LightningElement, api } from 'lwc';
export default class Skill extends LightningElement {
    skills = [
        'Apex', 
        'Visualforce', 
        'Lightning Components', 
        'Data Raptors', 
        'Integration Procedures', 
        'Industries CPQ', 
        'Copado',
        'Manufacturing Cloud', 
        'Communication CPQ', 
        'Service Cloud', 
        'Sales Cloud', 
        'Financial Services Cloud'
        // ... add more skills as needed
    ];

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
}
