import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./header.css";

import _implicitScopedStylesheets from "./header.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-page-header__col-title${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><div class="slds-page-header__name${0}"${2}><div class="slds-page-header__name-title${0}"${2}><h1${3}><span class="slds-page-header__title slds-truncate${0}" title="Somya Tiwari"${2}>Somya Tiwari</span></h1></div></div><p class="slds-page-header__name-meta${0}"${2}>Technical Consultant</p><p class="slds-page-header__name-meta${0}"${2}>somyatiwari59@gmail.com | +91 98260-10481</p><p class="slds-page-header__name-meta${0}"${2}><b${3}>Trailhead All Star Ranger | 600+ Badges | 3,00,000+ Points</b></p></div></div></div>`;
const $fragment2 = parseFragment`<p class="slds-page-header__name-meta${0}"${2}><b${3}>LinkedIn: </b> /in/somyatiwari59</p>`;
const $fragment3 = parseFragment`<p class="slds-page-header__name-meta${0}"${2}><b${3}>Trailhead: </b> somyatiwari59</p>`;
const $fragment4 = parseFragment`<p class="slds-page-header__name-meta${0}"${2}></p>`;
const $fragment5 = parseFragment`<button class="hide-details-on-print slds-button slds-button_neutral${0}" data-button="desktopView"${2}>Desktop / Mobile View</button>`;
const stc0 = {
  classMap: {
    "slds-page-header": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-page-header__row": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-page-header__col-actions": true
  },
  key: 4
};
const stc3 = {
  classMap: {
    "slds-page-header__controls": true
  },
  key: 5
};
const stc4 = {
  classMap: {
    "slds-page-header__control": true
  },
  key: 6
};
const stc5 = {
  classMap: {
    "slds-page-header__name-meta": true
  },
  key: 13
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_static_fragment($fragment1(), 3), api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_static_fragment($fragment2(), 8), api_static_fragment($fragment3(), 10), api_static_fragment($fragment4(), 12), api_element("p", stc5, [api_static_fragment($fragment5(), 15, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleClick))
    }
  })])])])])])])];
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
tmpl.stylesheetToken = "lwc-2cua7ok9mjm";
freezeTemplate(tmpl);
