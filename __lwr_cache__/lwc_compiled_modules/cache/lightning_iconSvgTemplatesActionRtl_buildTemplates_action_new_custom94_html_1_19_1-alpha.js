import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom94.css";

import _implicitScopedStylesheets from "./new_custom94.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M30.8 16.4v-12c0-1.4-1-2.4-2.4-2.4h-3.2c-1.4 0-2.4 1-2.4 2.4s1 2.4 2.4 2.4h.8v9.6c0 5.3-4.3 9.6-9.6 9.6s-9.6-4.3-9.6-9.6V6.8h.8c1.4 0 2.4-1 2.4-2.4S9 2 7.6 2H4.4C3 2 2 3 2 4.4v12c0 7.9 6.5 14.4 14.4 14.4s14.4-6.5 14.4-14.4z"${3}/><path d="M50 26c0-4-3.2-7.2-7.2-7.2S35.6 22 35.6 26c0 3.1 2 5.8 4.8 6.8v1.8c0 5.8-4.8 10.6-10.6 10.6h-.2c-5 0-9.3-3.6-10.4-8.3-.2-.7-.8-1.3-1.6-1.3H16c-1 0-1.8 1-1.6 1.9C15.7 44.6 22 50 29.4 50h.2c8.6 0 15.5-7 15.5-15.4v-1.8c2.9-1 4.9-3.7 4.9-6.8zm-7.2 2.4c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-7os52562646";
freezeTemplate(tmpl);
