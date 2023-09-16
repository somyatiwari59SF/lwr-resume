import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./currency.css";

import _implicitScopedStylesheets from "./currency.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M74.4 30.8H25.6c-3.1 0-5.6 2.5-5.6 5.6v27.2c0 3.1 2.5 5.6 5.6 5.6h48.8c3.1 0 5.6-2.5 5.6-5.6V36.4c0-3.1-2.5-5.6-5.6-5.6zM32.2 63.6c0-3.7-2.9-6.6-6.6-6.6V43c3.7 0 6.6-2.9 6.6-6.6h35.6c0 3.7 2.9 6.6 6.6 6.6v14c-3.7 0-6.6 2.9-6.6 6.6H32.2z"${3}/><circle cx="50" cy="49.5" r="9.4"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4rufp34g7ub";
freezeTemplate(tmpl);
