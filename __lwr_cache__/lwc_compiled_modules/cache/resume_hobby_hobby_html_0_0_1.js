import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hobby.css";

import _implicitScopedStylesheets from "./hobby.scoped.css?scoped=true";

import _lightningCard from "lightning/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-page-header${0}"${2}><div class="slds-page-header__row${0}"${2}><div class="slds-page-header__col-title${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><div class="slds-page-header__name${0}"${2}><div class="slds-page-header__name-title${0}"${2}><h1${3}><span class="slds-page-header__title slds-truncate${0}" title="My Hobbies"${2}>Hobbies</span></h1></div></div><p class="slds-page-header__name-meta${0}"${2}>Pursuing what I love</p></div></div></div></div></div>`;
const $fragment2 = parseFragment`<b${3}>Description:</b>`;
const $fragment3 = parseFragment`<hr${3}>`;
const $fragment4 = parseFragment`<b${3}>Interest Level:</b>`;
const $fragment5 = parseFragment`<hr${3}>`;
const $fragment6 = parseFragment`<b${3}>Years of Experience:</b>`;
const stc0 = {
  classMap: {
    "slds-m-top_medium": true,
    "hobbies-section": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical": true
  },
  key: 3
};
const stc2 = {
  "hobby-card": true,
  "slds-m-top_medium": true,
  "slds-p-top_xx-small": true
};
const stc3 = {
  classMap: {
    "slds-p-horizontal_small": true
  },
  key: 5
};
const stc4 = {
  key: 6
};
const stc5 = {
  attrs: {
    "slot": "footer"
  },
  key: 17
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element, i: api_iterator} = $api;
  return [api_element("section", stc0, [api_static_fragment($fragment1(), 2), api_element("div", stc1, api_iterator($cmp.hobbies, function (hobby) {
    return api_custom_element("lightning-card", _lightningCard, {
      classMap: stc2,
      props: {
        "title": hobby.name
      },
      key: api_key(4, hobby.name)
    }, [api_element("div", stc3, [api_element("div", stc4, [api_static_fragment($fragment2(), 8), api_text(" " + api_dynamic_text(hobby.description)), api_static_fragment($fragment3(), 10), api_static_fragment($fragment4(), 12), api_text(" " + api_dynamic_text(hobby.interestLevel)), api_static_fragment($fragment5(), 14), api_static_fragment($fragment6(), 16), api_text(" " + api_dynamic_text(hobby.years))])]), api_element("p", stc5, [hobby.relatedLink ? api_element("a", {
      attrs: {
        "href": hobby.relatedLink,
        "target": "_blank"
      },
      key: 18
    }, [api_text("Learn More")]) : null])]);
  }))])];
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
tmpl.stylesheetToken = "lwc-4n6ucn3sdag";
freezeTemplate(tmpl);
