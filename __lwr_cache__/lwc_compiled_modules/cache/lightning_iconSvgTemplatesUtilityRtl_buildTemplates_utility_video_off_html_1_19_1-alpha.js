import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./video_off.css";

import _implicitScopedStylesheets from "./video_off.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.69 4.64l-.06-.07-2.2-2.21a1.81 1.81 0 00-2.53.35L34.4 13.18l-2.29 2.29H9.21a2.13 2.13 0 00-2.13 2.13v16.8a2.13 2.13 0 002.13 2.13h1.84L2.68 44.9a2 2 0 00-.32 2.52l2.21 2.21A1.75 1.75 0 007 49.38l.06-.07L49.32 7.09a1.75 1.75 0 00.37-2.45zM32.68 35.92a2.13 2.13 0 002.13-2.13v-4.34l8.6 6.15a.87.87 0 001.49-.6V17.82l-18.09 18.1z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-40dfehhvmp0";
freezeTemplate(tmpl);
