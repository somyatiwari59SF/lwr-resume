import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_mapping.css";

import _implicitScopedStylesheets from "./data_mapping.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73.12 43.75a6.88 6.88 0 11-6.12 10h-1.14c-6.74.08-9.11 2.12-12.88 9.18l-.22.4-.25.48C50.27 68 49 69.94 46.69 72c-3.24 2.84-7.42 4.29-12.94 4.29H33A6.88 6.88 0 1133 70h1.14c6.86-.08 9.2-2.2 13.1-9.58l.25-.48a34.38 34.38 0 013.88-6.19H33a6.88 6.88 0 110-6.25h34a6.86 6.86 0 015.85-3.74zm0-23.75A6.88 6.88 0 1167 30H33a6.88 6.88 0 110-6.25h34A6.86 6.86 0 0173.12 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1aivjpaopgb";
freezeTemplate(tmpl);
