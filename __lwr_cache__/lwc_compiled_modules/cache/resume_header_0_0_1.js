import _tmpl from "./header.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
import '@lwc/synthetic-shadow';
class HelloWorldApp extends LightningElement {
  handleClick(event) {
    const button = event.currentTarget.dataset.button;
    console.log(button);
    if (button === "desktopView") {
      this.dispatchEvent(new CustomEvent("printviewtoggle"));
    }
  }
  /*LWC compiler v3.0.0*/
}
export default _registerComponent(HelloWorldApp, {
  tmpl: _tmpl,
  sel: "resume-header",
  apiVersion: 59
});