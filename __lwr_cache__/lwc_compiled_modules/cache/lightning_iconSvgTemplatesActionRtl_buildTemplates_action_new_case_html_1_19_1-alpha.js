import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_case.css";

import _implicitScopedStylesheets from "./new_case.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M15 13h4c.6 0 1-.4 1-1v-2h12v2c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V9.5c0-3-2.5-5.5-5.5-5.5H19.4c-3 0-5.4 2.4-5.4 5.4V12c0 .6.4 1 1 1zM46 17H6c-2.2 0-4 1.8-4 4v23c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V21c0-2.2-1.8-4-4-4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-53t7mvgpm4a";
freezeTemplate(tmpl);
