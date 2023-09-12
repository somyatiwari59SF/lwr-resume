import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app_web_messaging.css";

import _implicitScopedStylesheets from "./app_web_messaging.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2.07 26.13c0-12.06 10.6-21.84 23.97-21.84S49.84 14.07 50 26.3c0 12.23-10.76 21.84-23.8 22.01-4.56 0-8.8-1.14-12.55-3.26-.65-.33-1.14-.33-1.63-.16l-8.64 3.26c-.82.16-1.63-.49-1.3-1.3l3.1-8.48c.16-.65.16-1.14-.16-1.63-1.79-3.26-2.93-6.85-2.93-10.6h-.02zm11.41-8.81c-.98 0-1.63.65-1.63 1.63s.65 1.63 1.63 1.63h27.71c.98 0 1.63-.65 1.63-1.63s-.65-1.63-1.63-1.63H13.48zm-1.63 9.78c0-.98.65-1.63 1.63-1.63h21.19c.98 0 1.63.65 1.63 1.63s-.65 1.63-1.63 1.63H13.48c-.98 0-1.63-.65-1.63-1.63zm1.63 6.52c-.98 0-1.63.65-1.63 1.63s.65 1.63 1.63 1.63h14.67c.98 0 1.63-.65 1.63-1.63s-.65-1.63-1.63-1.63H13.48z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1012csnqka1";
freezeTemplate(tmpl);
