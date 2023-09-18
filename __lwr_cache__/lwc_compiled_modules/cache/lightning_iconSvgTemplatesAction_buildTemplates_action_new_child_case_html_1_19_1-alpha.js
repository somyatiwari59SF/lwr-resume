import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_child_case.css";

import _implicitScopedStylesheets from "./new_child_case.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M15 11h4c.6 0 1-.4 1-1V8h10v2c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V7.5c0-3-2.5-5.5-5.5-5.5H19.4c-3 0-5.4 2.4-5.4 5.4V10c0 .6.4 1 1 1zM32 34h2v-2c0-2.2 1.8-4 4-4h6c1.3 0 2.4.6 3.1 1.5.3.4.9.1.9-.3V19c0-2.2-1.8-4-4-4H6c-2.2 0-4 1.8-4 4v23c0 2.2 1.8 4 4 4h21.8c.4 0 .6-.3.5-.7-.2-.4-.3-.8-.3-1.3v-6c0-2.2 1.8-4 4-4z"${3}/><path d="M48.5 38H44v-4.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V38h-4.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5H38v4.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V44h4.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6dbpu13o0sh";
freezeTemplate(tmpl);
