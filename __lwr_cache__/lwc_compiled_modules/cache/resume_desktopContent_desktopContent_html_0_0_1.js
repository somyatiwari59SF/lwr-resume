import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./desktopContent.css";

import _implicitScopedStylesheets from "./desktopContent.scoped.css?scoped=true";

import _resumeDesktopContentDetail from "resume/desktopContentDetail";
import _lightningTab from "lightning/tab";
import _resumeCertification from "resume/certification";
import _resumeExperience from "resume/experience";
import _resumeSkill from "resume/skill";
import _resumeEducation from "resume/education";
import _lightningTabset from "lightning/tabset";
import _lightningCard from "lightning/card";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "hobby-card": true,
    "slds-m-top_medium": true,
    "slds-p-top_xx-small": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-m-around_medium": true
  },
  key: 1
};
const stc2 = {
  key: 2
};
const stc3 = {
  props: {
    "label": "Detail"
  },
  key: 3
};
const stc4 = {
  key: 4
};
const stc5 = {
  props: {
    "label": "Certifications"
  },
  key: 5
};
const stc6 = {
  props: {
    "format": "web"
  },
  key: 6
};
const stc7 = {
  props: {
    "label": "Experiance"
  },
  key: 7
};
const stc8 = {
  props: {
    "format": "web"
  },
  key: 8
};
const stc9 = {
  props: {
    "label": "Skills"
  },
  key: 9
};
const stc10 = {
  props: {
    "format": "web"
  },
  key: 10
};
const stc11 = {
  props: {
    "label": "Education"
  },
  key: 11
};
const stc12 = {
  props: {
    "format": "web"
  },
  key: 12
};
const stc13 = {
  props: {
    "label": "Related"
  },
  key: 13
};
const stc14 = {
  props: {
    "format": "table"
  },
  key: 14
};
const stc15 = {
  props: {
    "format": "table"
  },
  key: 15
};
const stc16 = {
  props: {
    "format": "table"
  },
  key: 16
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element} = $api;
  return [api_custom_element("lightning-card", _lightningCard, stc0, [api_element("div", stc1, [api_custom_element("lightning-tabset", _lightningTabset, stc2, [api_custom_element("lightning-tab", _lightningTab, stc3, [api_custom_element("resume-desktop-content-detail", _resumeDesktopContentDetail, stc4)]), api_custom_element("lightning-tab", _lightningTab, stc5, [api_custom_element("resume-certification", _resumeCertification, stc6)]), api_custom_element("lightning-tab", _lightningTab, stc7, [api_custom_element("resume-experience", _resumeExperience, stc8)]), api_custom_element("lightning-tab", _lightningTab, stc9, [api_custom_element("resume-skill", _resumeSkill, stc10)]), api_custom_element("lightning-tab", _lightningTab, stc11, [api_custom_element("resume-education", _resumeEducation, stc12)]), api_custom_element("lightning-tab", _lightningTab, stc13, [api_custom_element("resume-certification", _resumeCertification, stc14), api_custom_element("resume-experience", _resumeExperience, stc15), api_custom_element("resume-education", _resumeEducation, stc16)])])])])];
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
tmpl.stylesheetToken = "lwc-7kicd8g5e1q";
freezeTemplate(tmpl);
