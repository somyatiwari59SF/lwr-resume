import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./serialized_product.css";

import _implicitScopedStylesheets from "./serialized_product.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47.6 2H4.4A2.39 2.39 0 002 4.4v9.52a2.39 2.39 0 002.4 2.4h43.2a2.39 2.39 0 002.4-2.4V4.4A2.39 2.39 0 0047.6 2zM29.92 9.2A3.93 3.93 0 0126 13.12 4 4 0 1129.92 9zM47.6 18.8H4.4A2.39 2.39 0 002 21.2v9.52a2.39 2.39 0 002.4 2.4h43.2a2.39 2.39 0 002.4-2.4V21.2a2.39 2.39 0 00-2.4-2.4zm-24.08 7.12a3.86 3.86 0 01-3.69 4h-.23a4 4 0 113.92-4.08zm12 0a3.86 3.86 0 01-3.69 4h-.23a4 4 0 113.92-4.08zM47.6 35.6H4.4A2.39 2.39 0 002 38v9.6A2.39 2.39 0 004.4 50h43.2a2.39 2.39 0 002.4-2.4V38a2.39 2.39 0 00-2.4-2.4zm-29.68 7.12a3.86 3.86 0 01-3.69 4H14a4 4 0 113.92-4.08zm12 0a3.86 3.86 0 01-3.69 4H26a4 4 0 113.92-4.08zm12 0a3.86 3.86 0 01-3.69 4H38a4 4 0 113.92-4.08z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1mrmmt582gg";
freezeTemplate(tmpl);
