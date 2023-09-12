import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./skill.css";

import _implicitScopedStylesheets from "./skill.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-page-header${0}"${2}><div class="slds-page-header__row${0}"${2}><div class="slds-page-header__col-title${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><h2 class="slds-page-header__title slds-truncate${0}" title="Skills"${2}>Skills</h2></div></div></div></div></div>`;
const stc0 = {
  classMap: {
    "skills-section": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-m-top_medium": true,
    "slds-p-top_xx-small": true,
    "slds-grid": true,
    "slds-wrap": true,
    "slds-pill_container": true
  },
  key: 4
};
const stc2 = {
  "slds-pill": true,
  "slds-col": true,
  "slds-p-around_x-small": true
};
const stc3 = {
  classMap: {
    "slds-tile": true,
    "slds-tile_board": true
  },
  key: 6
};
const stc4 = {
  classMap: {
    "slds-truncate": true
  },
  key: 7
};
const stc5 = {
  classMap: {
    "skills-container": true,
    "slds-m-top_medium": true,
    "slds-p-top_xx-small": true,
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 9
};
const stc6 = {
  "slds-badge": true,
  "skill-pill": true,
  "slds-p-around_x-small": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, fr: api_fragment} = $api;
  return [api_element("section", stc0, [api_static_fragment($fragment1(), 2), $cmp.printFormat ? api_fragment(3, [api_element("div", stc1, api_iterator($cmp.skills, function (skill) {
    return api_element("div", {
      classMap: stc2,
      key: api_key(5, skill)
    }, [api_element("div", stc3, [api_element("p", stc4, [api_text(api_dynamic_text(skill))])])]);
  }))], 0) : null, $cmp.webFormat ? api_fragment(8, [api_element("div", stc5, api_iterator($cmp.skills, function (skill) {
    return api_element("div", {
      classMap: stc6,
      key: api_key(10, skill)
    }, [api_text(api_dynamic_text(skill))]);
  }))], 0) : null])];
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
tmpl.stylesheetToken = "lwc-3qde1htiimu";
freezeTemplate(tmpl);
