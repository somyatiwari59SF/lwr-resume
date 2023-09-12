import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hazmat_equipment.css";

import _implicitScopedStylesheets from "./hazmat_equipment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M31.81 27.92a5.86 5.86 0 10-5.87 5.86 5.86 5.86 0 005.87-5.86zM26 19.89a8 8 0 013 .57l8-14.14a24 24 0 00-22 .04l8 14.1a7.78 7.78 0 013-.57zM18 29H2a24.06 24.06 0 0011.26 19.1l7.81-13.79a9 9 0 01-.8-.71A8 8 0 0118 29zM31.64 33.6a8.82 8.82 0 01-.81.7l7.83 13.84A24.05 24.05 0 0050 29H33.91a8.08 8.08 0 01-2.27 4.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7pi21m79pol";
freezeTemplate(tmpl);
