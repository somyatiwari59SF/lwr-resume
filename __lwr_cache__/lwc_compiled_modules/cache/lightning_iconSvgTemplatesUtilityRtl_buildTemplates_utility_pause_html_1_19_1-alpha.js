import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pause.css";

import _implicitScopedStylesheets from "./pause.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M30 43c0 1 .9 2 2 2h4c1.1 0 2-1.1 2-2V9c0-1-.9-2-2-2h-4c-1.1 0-2 1.1-2 2v34zM14 43c0 1 .9 2 2 2h4c1.1 0 2-1.1 2-2V9c0-1-.9-2-2-2h-4c-1.1 0-2 1.1-2 2v34z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5kdq6mgapqq";
freezeTemplate(tmpl);
