import { LightningElement, api } from 'lwc';
export default class Skill extends LightningElement {
  skills = [
    'Apex',
    'Visualforce',
    'Lightning Components',
    'Lightning Web Components (LWC)',
    'OmniStudio',
    'OmniScripts',
    'Data Raptors',
    'Integration Procedures',
    'Industries CPQ',
    'Copado',
    'Git',
    'Manufacturing Cloud',
    'Experience Cloud',
    'Service Cloud',
    'Sales Cloud',
    'Salesforce Flows',
    'Salesforce permissions and sharing',
    'Amazon Redshift',
    'Amazon S3',
    'Flows',
    'Process Builders',
    'Salesforce Triggers',
    'Current RMS Integration',
    'Salesforce AppExchange',
    'Facebook Graph API',
    'REST Apex',
    'JavaScript'
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
