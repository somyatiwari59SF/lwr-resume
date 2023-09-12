import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./main.html";
import '@lwc/synthetic-shadow';
class Main extends LightningElement {
  constructor(...args) {
    super(...args);
    this.format = 'web';
  }
  // default to web format

  get printFormat() {
    return this.format === 'print';
  }
  get webFormat() {
    return this.format === 'web';
  }
  get paperClass() {
    return `a4-paper ${this.format}-format`;
  }
  toggleFormat() {
    console.log('in toggle Format');
    this.format = this.format === 'print' ? 'web' : 'print';
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(Main, {
  fields: ["format"]
});
export default _registerComponent(Main, {
  tmpl: _tmpl,
  sel: "resume-main",
  apiVersion: 59
});