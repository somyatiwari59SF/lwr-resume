import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./type_tool.css";

import _implicitScopedStylesheets from "./type_tool.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.37 47.59L32.74 4a2.41 2.41 0 00-2.2-1.47H20.11A2.21 2.21 0 0018.06 4L1.9 47.59a1.43 1.43 0 001.32 1.91h6a2.36 2.36 0 002.06-1.62L16 34.81h19.68l5.14 13.07a2.36 2.36 0 002.06 1.62h6a1.52 1.52 0 001.49-1.91zM19.08 26l5.73-14.69H26L32.3 26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4pa22j2u9vn";
freezeTemplate(tmpl);
