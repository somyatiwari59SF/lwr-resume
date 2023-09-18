import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom64.css";

import _implicitScopedStylesheets from "./new_custom64.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M26 2C12.8 2 2 12.8 2 26s10.8 24 24 24 24-10.8 24-24S39.2 2 26 2zm0 41.6c-9.7 0-17.6-7.9-17.6-17.6S16.3 8.4 26 8.4 43.6 16.3 43.6 26 35.7 43.6 26 43.6z"${3}/><path d="M35.3 15.7L22 20.5c-.7.2-1.3.8-1.5 1.5l-4.8 13.3c-.2.6.4 1.3 1 1L30 31.5c.7-.2 1.3-.8 1.5-1.5l4.8-13.3c.3-.6-.4-1.3-1-1zM26 29.2c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-439f5emn9f6";
freezeTemplate(tmpl);
