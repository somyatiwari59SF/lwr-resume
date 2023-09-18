import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quip.css";

import _implicitScopedStylesheets from "./quip.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M24.5 2.1c-12 .7-21.7 10.4-22.4 22.4C1.1 38.3 12.2 50 26 50h24V26C50 12.2 38.3 1.1 24.5 2.1zm-9.9 13.4c0-.9.7-1.6 1.6-1.6h19.6c.9 0 1.6.7 1.6 1.6v1.6c0 .9-.7 1.6-1.6 1.6H16.1c-.9 0-1.6-.7-1.6-1.6.1.1.1-1.6.1-1.6zm22.8 20.8c0 .9-.7 1.6-1.6 1.6H16.1c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h19.6c.9 0 1.6.7 1.6 1.6v1.6h.1zm6-9.5c0 .9-.7 1.6-1.6 1.6H10.1c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h31.7c.9 0 1.6.7 1.6 1.6v1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2hl3nop5qp1";
freezeTemplate(tmpl);
