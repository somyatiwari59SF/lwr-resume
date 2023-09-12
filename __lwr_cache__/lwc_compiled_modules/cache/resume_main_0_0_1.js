import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./main.html";
import "@lwc/synthetic-shadow";
class Main extends LightningElement {
  constructor(...args) {
    super(...args);
    this.format = "web";
  }
  // default to web format

  get printFormat() {
    return this.format === "print";
  }
  get webFormat() {
    return this.format === "web";
  }
  get paperClass() {
    return `a4-paper ${this.format}-format`;
  }
  toggleFormat() {
    console.log("in toggle Format");
    this.format = this.format === "print" ? "web" : "print";
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "/" + mm + "/" + yyyy;
    if (this.printFormat) {
      document.title = "Somya Tiwari Resume " + formattedToday;
      var delayInMilliseconds = 1000; //1 second
      setTimeout(() => {
        window.print();
        document.title = "Somya Tiwari Resume";
        this.toggleFormat();
      }, 0);
    }
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