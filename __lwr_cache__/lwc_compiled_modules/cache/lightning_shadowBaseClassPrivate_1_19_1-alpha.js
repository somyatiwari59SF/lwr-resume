import _tmpl from "./shadowBaseClassPrivate.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class LightningShadowBaseClass extends LightningElement {
  connectedCallback() {
    if (!this.template.synthetic) {
      this.setAttribute('data-render-mode', 'shadow');
    }
  }
  /*LWC compiler v3.0.0*/
}
LightningShadowBaseClass.shadowSupportMode = 'any';
export default _registerComponent(LightningShadowBaseClass, {
  tmpl: _tmpl,
  sel: "lightning-shadow-base-class-private",
  apiVersion: 59
});