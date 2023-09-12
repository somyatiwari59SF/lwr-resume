import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tab.css";

import _implicitScopedStylesheets from "./tab.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
const stc1 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot} = $api;
  return [$cmp._loadContent ? api_slot("", stc0, stc1, $slotset) : null];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-i5alracjij";
freezeTemplate(tmpl);
