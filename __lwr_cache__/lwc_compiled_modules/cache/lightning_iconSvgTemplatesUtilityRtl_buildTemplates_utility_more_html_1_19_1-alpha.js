import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./more.css";

import _implicitScopedStylesheets from "./more.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 2C12.75 2 2 12.75 2 26s10.75 24 24 24 24-10.75 24-24S39.25 2 26 2zM11 31c-2.75 0-5-2.25-5-5s2.25-5 5-5 5 2.25 5 5-2.25 5-5 5zm15 0c-2.75 0-5-2.25-5-5s2.25-5 5-5 5 2.25 5 5-2.25 5-5 5zm15 0c-2.75 0-5-2.25-5-5s2.25-5 5-5 5 2.25 5 5-2.25 5-5 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2k3ea4ou1jt";
freezeTemplate(tmpl);
