import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _lightningButton from "lightning/button";
import _lightningCard from "lightning/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<button class="slds-button${0}"${2}>Button</button>`;
const $fragment2 = parseFragment`<button class="slds-button slds-button_neutral${0}"${2}>Neutral Button</button>`;
const $fragment3 = parseFragment`<button class="slds-button slds-button_brand${0}"${2}>Brand Button</button>`;
const $fragment4 = parseFragment`<button class="slds-button slds-button_outline-brand${0}"${2}>Outline Brand Button</button>`;
const $fragment5 = parseFragment`<button class="slds-button slds-button_destructive${0}"${2}>Destructive Button</button>`;
const $fragment6 = parseFragment`<button class="slds-button slds-button_text-destructive${0}"${2}>Text Destructive Button</button>`;
const $fragment7 = parseFragment`<button class="slds-button slds-button_success${0}"${2}>Success Button</button>`;
const $fragment8 = parseFragment`<p class="slds-p-horizontal_small${0}"${2}>Card Body (custom component)</p>`;
const stc0 = {
  props: {
    "title": "Hello"
  },
  key: 14
};
const stc1 = {
  attrs: {
    "slot": "actions"
  },
  props: {
    "label": "New"
  },
  key: 15
};
const stc2 = {
  attrs: {
    "slot": "footer"
  },
  key: 18
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, t: api_text, h: api_element} = $api;
  return [api_static_fragment($fragment1(), 1), api_static_fragment($fragment2(), 3), api_static_fragment($fragment3(), 5), api_static_fragment($fragment4(), 7), api_static_fragment($fragment5(), 9), api_static_fragment($fragment6(), 11), api_static_fragment($fragment7(), 13), api_custom_element("lightning-card", _lightningCard, stc0, [api_custom_element("lightning-button", _lightningButton, stc1), api_static_fragment($fragment8(), 17), api_element("p", stc2, [api_text("Card Footer")])])];
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
tmpl.stylesheetToken = "lwc-5la2ic78dit";
freezeTemplate(tmpl);
