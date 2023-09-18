import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom98.css";

import _implicitScopedStylesheets from "./new_custom98.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M49.6 22.1l-5.9-5.9c-.3-.3-.7-.5-1-.5h-6.1c-.8 0-1.5.7-1.5 1.5v12.1c0 .5.5.9 1.1.7 1-.5 2.2-.7 3.4-.7 3.4 0 6.3 1.9 7.9 4.7.2.4.8.5 1.1.2.9-.8 1.5-2 1.5-3.4v-7.7c-.1-.3-.2-.7-.5-1z"${3}/><path d="M29 9H3.5C2.7 9 2 9.7 2 10.5v20.4c0 1.4.6 2.6 1.5 3.4.4.3.9.2 1.1-.2 1.5-2.8 4.5-4.7 7.9-4.7 3.8 0 6.9 2.3 8.3 5.6.1.3.4.5.7.5H26c2.5 0 4.5-2 4.5-4.5V10.5c0-.8-.7-1.5-1.5-1.5z"${3}/><circle cx="39.5" cy="38.5" r="4.5"${3}/><circle cx="12.5" cy="38.5" r="4.5"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4q8l28l6r9p";
freezeTemplate(tmpl);
