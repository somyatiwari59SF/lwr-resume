import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom87.css";

import _implicitScopedStylesheets from "./new_custom87.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M45.6 2H6.4C5 2 4 3 4 4.4v38.4c0 1.4 1 2.4 2.4 2.4h.8v2.4c0 1.4 1 2.4 2.4 2.4h1.6c1.3 0 2.4-1 2.4-2.4v-2.4h25.1v2.4c0 1.4 1 2.4 2.4 2.4h1.6c1.3 0 2.4-1 2.4-2.4v-2.4h.8c1.3 0 2.4-1 2.4-2.4V4.4C48 3 47 2 45.6 2zM11.1 40.4c-1.3 0-2.4-1-2.4-2.4V9.2c0-1.4 1-2.4 2.4-2.4H41c1.3 0 2.4 1 2.4 2.4V38c0 1.4-1 2.4-2.4 2.4H11.1z"${3}/><path d="M37 11.6H15c-.9 0-1.6.7-1.6 1.6V34c0 .9.7 1.6 1.6 1.6h22c.9 0 1.6-.7 1.6-1.6V13.2c0-.9-.7-1.6-1.6-1.6zM33.3 26h-6.5c-.9 1.6-2.7 3.2-4.9 3.2-3 0-5.3-2.6-5.3-5.6S19 18 21.9 18c2.2 0 4.1 1.6 4.9 3.2h6.4c1.2 0 2.1 1.2 2.1 2.4.1 1.2-.8 2.4-2 2.4z"${3}/></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-4vlbnbtsa7j";
freezeTemplate(tmpl);
