import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./volume_low.css";

import _implicitScopedStylesheets from "./volume_low.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M24.6 2.6L12 18H6c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h6l12.6 15.4c1.3 1.3 3.4.4 3.4-1.4V4c0-1.8-2.2-2.7-3.4-1.4zM36.3 15.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4 2.2 2 3.5 4.9 3.5 8.1s-1.4 6.1-3.6 8.1c-.4.4-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0 2.9-2.7 4.8-6.6 4.8-11 0-4.2-1.8-8.1-4.7-10.8z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-h1162v3e2m";
freezeTemplate(tmpl);
