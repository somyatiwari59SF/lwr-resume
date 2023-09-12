import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./desktopContentDetail.css";

import _implicitScopedStylesheets from "./desktopContentDetail.scoped.css?scoped=true";

import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-form-element__label${0}"${2}><abbr class="slds-required${0}" title="required"${2}>* </abbr>Name</span>`;
const $fragment2 = parseFragment`<span class="slds-form-element__label${0}"${2}>Current Role</span>`;
const $fragment3 = parseFragment`<div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>Date of Birth</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>26/11/1997</div></div></div></div>`;
const $fragment4 = parseFragment`<span class="slds-form-element__label${0}"${2}>Current Company</span>`;
const $fragment5 = parseFragment`<div class="slds-form__row${0}"${2}><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>Primary Skills</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>Asyncronous Apex, Triggers, LWC, VF Pages, Aura</div></div></div></div><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>Mobile Phone</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>+91 98260 10481</div></div></div></div></div>`;
const $fragment6 = parseFragment`<div class="slds-form__row${0}"${2}><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>Apex (Ratings out of 5)</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>5</div></div></div></div><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>LWC (Ratings out of 5)</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>5</div></div></div></div></div>`;
const $fragment7 = parseFragment`<div class="slds-form__row${0}"${2}><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>VF Pages (Ratings out of 5)</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>3</div></div></div></div><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>Aura (Ratings out of 5)</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>3</div></div></div></div></div>`;
const $fragment8 = parseFragment`<div class="slds-form__row${0}"${2}><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>Data Modeling (Ratings out of 5)</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>4</div></div></div></div><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>Security Settings (Ratings out of 5)</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>3.5</div></div></div></div></div>`;
const $fragment9 = parseFragment`<div class="slds-form__row${0}"${2}><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>Architecture (Ratings out of 5)</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>3.5</div></div></div></div><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent${0}"${2}><span class="slds-form-element__label${0}"${2}>Heroku / AWS / Other Clouds (Ratings out of 5)</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static${0}"${2}>4</div></div></div></div></div>`;
const $fragment10 = parseFragment`<span class="slds-form-element__label${0}"${2}><abbr class="slds-required${0}" title="required"${2}>* </abbr>Current Address</span>`;
const $fragment11 = parseFragment`<span class="slds-assistive-text${0}"${2}>Help</span>`;
const $fragment12 = parseFragment`<br${3}>`;
const $fragment13 = parseFragment`<br${3}>`;
const $fragment14 = parseFragment`<br${3}>`;
const $fragment15 = parseFragment`<span class="slds-form-element__label${0}"${2}>Permanent Address</span>`;
const $fragment16 = parseFragment`<br${3}>`;
const $fragment17 = parseFragment`<br${3}>`;
const $fragment18 = parseFragment`<br${3}>`;
const $fragment19 = parseFragment`<span class="slds-assistive-text${0}"${2}>Edit: Shipping Address</span>`;
const $fragment20 = parseFragment`<div class="slds-form__row${0}"${2}><div class="slds-form__item${0}" role="listitem"${2}><div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent slds-form-element_1-col${0}"${2}><span class="slds-form-element__label${0}"${2}>Description</span><div class="slds-form-element__control${0}"${2}><div class="slds-form-element__static slds-text-longform${0}"${2}>With a proven track record spanning multiple years in the Salesforce ecosystem, I have had the privilege of delving deep into the nuances of crafting intricate Salesforce solutions as a Salesforce Developer and, most recently, as a Technical Consultant. My journey through companies like Salesforce India Pvt. Ltd, 360 Degree Cloud Technologies, and MindRuby Technologies has not only provided me with hands-on experience in a myriad of Salesforce clouds, such as Sales, Service, Experience, and Manufacturing, but has also allowed me to lead challenging projects, ranging from integrating major industry players like AT&amp;T with Salesforce to building intuitive AppExchange applications.<br${3}><br${3}>My expertise is diverse: from integrating with platforms like AWS and implementing large-scale solutions for e-commerce complaint management to leading the development and optimization of applications tailored for renowned brands. My foundation in Apex, Visualforce, Lightning Web Components, and various integrations, coupled with my deep knowledge of Salesforce Flows, Process Builders, and custom object modeling, positions me uniquely as a problem solver who understands both the breadth and depth of the Salesforce platform.<br${3}><br${3}>Today, as I aspire to elevate to the role of a Technical Architect, I am driven by the desire to not only design and oversee the development of robust Salesforce solutions but to strategically lead initiatives that harness the full potential of the Salesforce platform. My vision is to create systems that are not just efficient but are scalable, sustainable, and forward-looking, ensuring that businesses not only meet their current objectives but are poised for future growth. As I continue my journey, I am keen to leverage my accumulated experience, combined with an unwavering commitment to innovation and excellence, to make a significant impact in the realm of Salesforce architecture.<br${3}></div></div></div></div></div>`;
const stc0 = {
  classMap: {
    "slds-form": true
  },
  attrs: {
    "role": "list"
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-form__row": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-form__item": true
  },
  attrs: {
    "role": "listitem"
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-form-element": true,
    "slds-form-element_edit": true,
    "slds-form-element_readonly": true,
    "slds-form-element_stacked": true,
    "slds-hint-parent": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 6
};
const stc5 = {
  classMap: {
    "slds-form-element__static": true
  },
  key: 7
};
const stc6 = {
  attrs: {
    "href": "#"
  },
  key: 8
};
const stc7 = {
  classMap: {
    "slds-form__item": true
  },
  attrs: {
    "role": "listitem"
  },
  key: 9
};
const stc8 = {
  classMap: {
    "slds-form-element": true,
    "slds-form-element_edit": true,
    "slds-form-element_readonly": true,
    "slds-form-element_stacked": true,
    "slds-hint-parent": true
  },
  key: 10
};
const stc9 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 13
};
const stc10 = {
  classMap: {
    "slds-form-element__static": true
  },
  key: 14
};
const stc11 = {
  attrs: {
    "href": "#"
  },
  key: 15
};
const stc12 = {
  classMap: {
    "slds-form__row": true
  },
  key: 16
};
const stc13 = {
  classMap: {
    "slds-form__item": true
  },
  attrs: {
    "role": "listitem"
  },
  key: 19
};
const stc14 = {
  classMap: {
    "slds-form-element": true,
    "slds-form-element_edit": true,
    "slds-form-element_readonly": true,
    "slds-form-element_stacked": true,
    "slds-hint-parent": true
  },
  key: 20
};
const stc15 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 23
};
const stc16 = {
  classMap: {
    "slds-form-element__static": true
  },
  key: 24
};
const stc17 = {
  attrs: {
    "href": "#"
  },
  key: 25
};
const stc18 = {
  classMap: {
    "slds-form__row": true
  },
  key: 36
};
const stc19 = {
  classMap: {
    "slds-form__item": true
  },
  attrs: {
    "role": "listitem"
  },
  key: 37
};
const stc20 = {
  classMap: {
    "slds-form-element": true,
    "slds-form-element_edit": true,
    "slds-form-element_readonly": true,
    "slds-form-element_stacked": true,
    "slds-hint-parent": true
  },
  key: 38
};
const stc21 = {
  classMap: {
    "slds-form-element__icon": true
  },
  key: 41
};
const stc22 = {
  classMap: {
    "slds-button": true,
    "slds-button_icon": true
  },
  key: 42
};
const stc23 = {
  classMap: {
    "slds-button__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 43,
  svg: true
};
const stc24 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 47
};
const stc25 = {
  classMap: {
    "slds-form-element__static": true
  },
  key: 48
};
const stc26 = {
  attrs: {
    "href": "#"
  },
  key: 49
};
const stc27 = {
  classMap: {
    "slds-form__item": true
  },
  attrs: {
    "role": "listitem"
  },
  key: 56
};
const stc28 = {
  classMap: {
    "slds-form-element": true,
    "slds-form-element_edit": true,
    "slds-form-element_readonly": true,
    "slds-form-element_stacked": true,
    "slds-hint-parent": true
  },
  key: 57
};
const stc29 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 60
};
const stc30 = {
  classMap: {
    "slds-form-element__static": true
  },
  key: 61
};
const stc31 = {
  attrs: {
    "href": "#"
  },
  key: 62
};
const stc32 = {
  classMap: {
    "slds-button": true,
    "slds-button_icon": true
  },
  attrs: {
    "title": "Edit: Shipping Address"
  },
  key: 69
};
const stc33 = {
  classMap: {
    "slds-button__icon": true,
    "slds-button__icon_hint": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 70,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, t: api_text, h: api_element} = $api;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_static_fragment($fragment1(), 5), api_element("div", stc4, [api_element("div", stc5, [api_element("a", stc6, [api_text("Somya Tiwari")])])])])]), api_element("div", stc7, [api_element("div", stc8, [api_static_fragment($fragment2(), 12), api_element("div", stc9, [api_element("div", stc10, [api_element("a", stc11, [api_text("Technical Consultant")])])])])])]), api_element("div", stc12, [api_static_fragment($fragment3(), 18), api_element("div", stc13, [api_element("div", stc14, [api_static_fragment($fragment4(), 22), api_element("div", stc15, [api_element("div", stc16, [api_element("a", stc17, [api_text("Salesforce India Pvt. Ltd.")])])])])])]), api_static_fragment($fragment5(), 27), api_static_fragment($fragment6(), 29), api_static_fragment($fragment7(), 31), api_static_fragment($fragment8(), 33), api_static_fragment($fragment9(), 35), api_element("div", stc18, [api_element("div", stc19, [api_element("div", stc20, [api_static_fragment($fragment10(), 40), api_element("div", stc21, [api_element("button", stc22, [api_element("svg", stc23, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#info")
    },
    key: 44,
    svg: true
  })]), api_static_fragment($fragment11(), 46)])]), api_element("div", stc24, [api_element("div", stc25, [api_element("a", stc26, [api_text("22 Sanjay Park"), api_static_fragment($fragment12(), 51), api_text("Viman Darshan Society"), api_static_fragment($fragment13(), 53), api_text("Pune, M.H."), api_static_fragment($fragment14(), 55)])])])])]), api_element("div", stc27, [api_element("div", stc28, [api_static_fragment($fragment15(), 59), api_element("div", stc29, [api_element("div", stc30, [api_element("a", stc31, [api_text("34 / 146 Ghisaji Patel Nagar"), api_static_fragment($fragment16(), 64), api_text("Indore, M.P. 452016"), api_static_fragment($fragment17(), 66), api_text("India"), api_static_fragment($fragment18(), 68)])]), api_element("button", stc32, [api_element("svg", stc33, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#edit")
    },
    key: 71,
    svg: true
  })]), api_static_fragment($fragment19(), 73)])])])])]), api_static_fragment($fragment20(), 75)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-3adn2abtk62";
freezeTemplate(tmpl);
