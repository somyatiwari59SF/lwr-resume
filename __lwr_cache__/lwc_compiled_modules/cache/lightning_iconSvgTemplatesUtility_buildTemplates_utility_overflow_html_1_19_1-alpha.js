import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./overflow.css";

import _implicitScopedStylesheets from "./overflow.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37.3 9.9H15.8c-2.1 0-3.7 1.7-3.7 3.7v.6c0 .3.3.6.6.6h19.6c2.1 0 3.7 1.7 3.7 3.7v22.1c0 .3.3.6.6.6h.6c2.1 0 3.7-1.7 3.7-3.7V13.6c.1-2-1.6-3.7-3.6-3.7z"${3}/><path d="M45.3 2H23.8c-2.1 0-3.7 1.7-3.7 3.7v.6c0 .3.3.6.6.6h19.6c2.1 0 3.7 1.7 3.7 3.7v22.1c0 .3.3.6.6.6h.6c2.1 0 3.7-1.7 3.7-3.7V5.7c.1-2-1.6-3.7-3.6-3.7z"${3}/><path d="M32.6 21.8c0-2-1.7-3.7-3.7-3.7H6.7c-2.1 0-3.7 1.7-3.7 3.7v24.5c0 2 1.7 3.7 3.7 3.7h22.2c2.1 0 3.7-1.7 3.7-3.7V21.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5jef1i2rad5";
freezeTemplate(tmpl);
