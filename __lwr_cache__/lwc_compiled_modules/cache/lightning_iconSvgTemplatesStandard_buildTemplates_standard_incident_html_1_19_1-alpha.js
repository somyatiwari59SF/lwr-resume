import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./incident.css";

import _implicitScopedStylesheets from "./incident.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38 30h4a.94.94 0 001-1v-3h14v3a.94.94 0 001 1h4a.94.94 0 001-1v-3a6 6 0 00-6-6H43a6 6 0 00-6 6v3a.94.94 0 001 1zM50 63.32a2.24 2.24 0 102.24 2.24A2.21 2.21 0 0050 63.32z"${3}/><path d="M74 36H26a6 6 0 00-6 6v32a6 6 0 006 6h48a6 6 0 006-6V42a6 6 0 00-6-6zm-6.88 37.78H32.91C31 73.78 30 71.39 31 69.67L48.15 42a2.11 2.11 0 013.73 0L69 69.67c1.11 1.72 0 4.11-1.88 4.11z"${3}/><rect x="47.77" y="50.62" width="4.48" height="11.21" rx=".75"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
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
tmpl.stylesheetToken = "lwc-1ke0uovnkqq";
freezeTemplate(tmpl);
