import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_step_template.css";

import _implicitScopedStylesheets from "./work_step_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M28.5 68.5v-34h-1.6a4.89 4.89 0 00-4.8 4.9v35.4a4.89 4.89 0 004.8 4.9h35.6a4.89 4.89 0 004.8-4.9v-1.4h-34a4.89 4.89 0 01-4.8-4.9zM46.4 30.2h17.7a1.58 1.58 0 001.6-1.6v-3.3a4.89 4.89 0 00-4.8-4.9H49.6a4.82 4.82 0 00-4.8 4.9v3.3a1.64 1.64 0 001.6 1.6z"${3}/><path d="M73 24.4h-1.6a.74.74 0 00-.8.8v3.3a6.57 6.57 0 01-6.5 6.6H46.4a6.64 6.64 0 01-6.5-6.6v-3.3a.74.74 0 00-.8-.8h-1.6a4.82 4.82 0 00-4.8 4.9v35.3a4.89 4.89 0 004.8 4.9H73a4.82 4.82 0 004.8-4.9V29.4a4.85 4.85 0 00-4.8-5zM60.9 55.5a1.58 1.58 0 01-1.6 1.6H43.1a1.58 1.58 0 01-1.6-1.6v-1.6a1.58 1.58 0 011.6-1.6h16.2a1.58 1.58 0 011.6 1.6zm8.1-8.2a1.58 1.58 0 01-1.6 1.6H43.1a1.58 1.58 0 01-1.6-1.6v-1.6a1.58 1.58 0 011.6-1.6h24.3a1.58 1.58 0 011.6 1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4mjkeogflsh";
freezeTemplate(tmpl);
