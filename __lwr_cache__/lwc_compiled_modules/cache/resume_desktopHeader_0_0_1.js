import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./desktopHeader.html";
class DesktopHeader extends LightningElement {
  constructor(...args) {
    super(...args);
    this.candidateInfo = {
      name: "Somya Tiwari"
    };
  }
  handleClick(event) {
    const button = event.currentTarget.dataset.button;
    if (button === "print") {
      this.dispatchEvent(new CustomEvent("printviewtoggle"));
    }
    if (button === "twitter") {
      this.openInNewTab("https://twitter.com/somyatiwari59");
    }
    if (button === "linkedin") {
      this.openInNewTab("https://linkedin.com/in/somyatiwari59");
    }
    if (button === "trailhead") {
      this.openInNewTab("https://trailblazer.me/id/somyatiwari59");
    }
    if (button === "call") {
      this.openInNewTab("tel:+919826010181");
    }
  }
  openInNewTab(url) {
    window.open(url, "_blank", "menubar=no,location=no,status=no,scrollbars=yes");
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(DesktopHeader, {
  track: {
    candidateInfo: 1
  }
});
export default _registerComponent(DesktopHeader, {
  tmpl: _tmpl,
  sel: "resume-desktop-header",
  apiVersion: 59
});