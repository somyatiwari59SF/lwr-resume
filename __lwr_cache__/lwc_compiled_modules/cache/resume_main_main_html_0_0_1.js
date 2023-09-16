import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./main.css";

import _implicitScopedStylesheets from "./main.scoped.css?scoped=true";

import _resumeHeader from "resume/header";
import _resumeExperience from "resume/experience";
import _resumeProject from "resume/project";
import _resumeEducation from "resume/education";
import _resumeCertification from "resume/certification";
import _resumeSkill from "resume/skill";
import _resumeHobby from "resume/hobby";
import _resumeDesktopHeader from "resume/desktopHeader";
import _resumeDesktopContent from "resume/desktopContent";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-m-around_medium${0}"${2}></div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-gutters": true,
    "slds-wrap": true
  },
  key: 2
};
const stc1 = {
  classMap: {
    "slds-col": true,
    "slds-size_2-of-2": true
  },
  key: 3
};
const stc2 = {
  classMap: {
    "slds-col": true,
    "slds-size_2-of-3": true
  },
  key: 5
};
const stc3 = {
  props: {
    "format": "print"
  },
  key: 6
};
const stc4 = {
  props: {
    "format": "print"
  },
  key: 7
};
const stc5 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-3": true
  },
  key: 8
};
const stc6 = {
  props: {
    "format": "print"
  },
  key: 9
};
const stc7 = {
  props: {
    "format": "print"
  },
  key: 10
};
const stc8 = {
  props: {
    "format": "print"
  },
  key: 11
};
const stc9 = {
  key: 12
};
const stc10 = {
  key: 14
};
const stc11 = {
  key: 18
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, fr: api_fragment, st: api_static_fragment} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", {
    className: $cmp.paperClass,
    key: 0
  }, [$cmp.printFormat ? api_fragment(1, [api_element("div", stc0, [api_element("div", stc1, [api_custom_element("resume-header", _resumeHeader, {
    key: 4,
    on: {
      "printviewtoggle": _m0 || ($ctx._m0 = api_bind($cmp.toggleFormat))
    }
  })]), api_element("div", stc2, [api_custom_element("resume-experience", _resumeExperience, stc3), api_custom_element("resume-project", _resumeProject, stc4)]), api_element("div", stc5, [api_custom_element("resume-education", _resumeEducation, stc6), api_custom_element("resume-certification", _resumeCertification, stc7), api_custom_element("resume-skill", _resumeSkill, stc8), api_custom_element("resume-hobby", _resumeHobby, stc9)])])], 0) : null, $cmp.webFormat ? api_fragment(13, [api_element("div", stc10, [api_custom_element("resume-desktop-header", _resumeDesktopHeader, {
    key: 15,
    on: {
      "printviewtoggle": _m1 || ($ctx._m1 = api_bind($cmp.toggleFormat))
    }
  }), api_static_fragment($fragment1(), 17), api_custom_element("resume-desktop-content", _resumeDesktopContent, stc11)])], 0) : null])];
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
tmpl.stylesheetToken = "lwc-3ccmdvkm0pc";
freezeTemplate(tmpl);
