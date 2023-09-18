import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transport_walking.css";

import _implicitScopedStylesheets from "./transport_walking.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M28 9.9a4.14 4.14 0 004.58-3.65A4 4 0 0028.63 2 4.23 4.23 0 0024 5.64a4 4 0 004 4.26zM24.32 11.5a4.63 4.63 0 013-.83 4.77 4.77 0 013.43 2l4.31 8 5.86 3.76a1.74 1.74 0 01.78 1.55 1.93 1.93 0 01-2 1.66 2.33 2.33 0 01-.88-.28l-6.42-4.09a5.44 5.44 0 01-.49-.55l-1.61-3-1.93 8 7.5 8.28a2.29 2.29 0 01.33.88l2 10.06v.56a2.81 2.81 0 01-3.05 2.5 2.85 2.85 0 01-2.6-2.15l-1.93-9.4-6.14-6.3-1.43 6.14a7.56 7.56 0 01-.56 1.1l-6 9.23a3.11 3.11 0 01-2.71 1.33A2.7 2.7 0 0111.16 47a3.23 3.23 0 01.39-1.16L17 37.32l4.59-18.91-3 2.27L17 27.42a2 2 0 01-2 1.49A1.81 1.81 0 0113.21 27a.34.34 0 010-.22l1.88-7.85a2.33 2.33 0 01.61-.89z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-26qvjecjst9";
freezeTemplate(tmpl);
