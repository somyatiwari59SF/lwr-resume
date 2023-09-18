import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom28.css";

import _implicitScopedStylesheets from "./new_custom28.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37.2 2H14.8C12.2 2 10 4.2 10 6.8v38.4c0 2.6 2.2 4.8 4.8 4.8h22.4c2.6 0 4.8-2.2 4.8-4.8V6.8C42 4.2 39.8 2 37.2 2zM26 48.4c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4zm11.2-8c0 .9-.7 1.6-1.6 1.6H16.4c-.9 0-1.6-.7-1.6-1.6V10c0-.9.7-1.6 1.6-1.6h19.2c.9 0 1.6.7 1.6 1.6v30.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3pi899g7au0";
freezeTemplate(tmpl);
