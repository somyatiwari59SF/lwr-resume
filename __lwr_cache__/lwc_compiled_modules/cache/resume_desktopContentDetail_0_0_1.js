import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./desktopContentDetail.html";
class DesktopContent extends LightningElement {
  constructor(...args) {
    super(...args);
    this.candidateInfo = {
      name: "Somya Tiwari"
    };
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(DesktopContent, {
  track: {
    candidateInfo: 1
  }
});
export default _registerComponent(DesktopContent, {
  tmpl: _tmpl,
  sel: "resume-desktop-content-detail",
  apiVersion: 59
});