import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trending.css";

import _implicitScopedStylesheets from "./trending.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.1 30.56a1.16 1.16 0 01-2 .82L42.73 26 30.32 36.65a3.39 3.39 0 01-4.92 0l-7.49-8.54-13.34 11.7a1.13 1.13 0 01-1.64 0l-.59-.59a1.13 1.13 0 010-1.64l13.12-17.9a3.39 3.39 0 014.92 0l7.49 7.49 7.61-8.78-4.92-4.45a1.26 1.26 0 01.82-2.11h16.38A2.35 2.35 0 0150 14.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ngmcivj9of";
freezeTemplate(tmpl);
