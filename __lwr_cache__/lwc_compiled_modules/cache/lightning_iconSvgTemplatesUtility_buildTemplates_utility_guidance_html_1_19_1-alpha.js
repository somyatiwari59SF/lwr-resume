import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./guidance.css";

import _implicitScopedStylesheets from "./guidance.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 2C12.8 2 2 12.8 2 26s10.8 24 24 24 24-10.8 24-24S39.2 2 26 2zm0 41.6c-9.68 0-17.6-7.92-17.6-17.6S16.32 8.4 26 8.4 43.6 16.32 43.6 26 35.68 43.6 26 43.6z"${3}/><path d="M35.28 15.68L22 20.48c-.72.24-1.28.8-1.52 1.52l-4.8 13.28c-.24.64.4 1.28 1.04 1.04L30 31.52c.72-.24 1.28-.8 1.52-1.52l4.8-13.28c.24-.64-.4-1.28-1.04-1.04zM26 29.2c-1.76 0-3.2-1.44-3.2-3.2s1.44-3.2 3.2-3.2 3.2 1.44 3.2 3.2-1.44 3.2-3.2 3.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5vq5eefag48";
freezeTemplate(tmpl);
