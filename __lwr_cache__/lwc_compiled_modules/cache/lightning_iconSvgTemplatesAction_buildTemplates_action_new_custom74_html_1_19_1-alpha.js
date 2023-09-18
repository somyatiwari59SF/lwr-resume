import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom74.css";

import _implicitScopedStylesheets from "./new_custom74.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M30.1 44.4h-8.2c-.9 0-1.6.7-1.6 1.6v2.4c0 .9.7 1.6 1.6 1.6h8.2c.9 0 1.6-.7 1.6-1.6V46c0-.9-.7-1.6-1.6-1.6zM26 2C16 2 8 9.5 8 18.8c0 6 3.4 11.3 8.5 14.2 2 1.1 3.3 3 3.7 5.2.2.7.8 1.3 1.6 1.3h8.5c.8 0 1.5-.6 1.6-1.3.4-2.2 1.7-4.1 3.7-5.2 5-3 8.3-8.2 8.3-14.2C44 9.5 36 2 26 2zm-5.6 7.5c-1.6 3-2.5 6.6-2.6 9.5 0 3 .6 5.8 1.6 8.6.3.7-.4 1.4-1.1 1-7.5-3.8-7-17.6 1.1-20.3.7-.1 1.4.6 1 1.2zm6.3 19.1c-.2.6-1.2.6-1.5 0-1.3-3.1-1.6-6.8-1.7-10.2.1-3.4.4-7 1.7-10.2.2-.6 1.2-.6 1.5 0 1.3 3.1 1.6 6.8 1.7 10.2 0 3.4-.4 7-1.7 10.2zm6.7.1c-.7.3-1.4-.3-1.1-1 1.1-2.9 1.6-6.1 1.7-9.1-.1-2.6-1-6.1-2.6-9-.3-.6.3-1.4 1-1.1 8.1 2.6 8.6 16.5 1 20.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-7qtov40dpqe";
freezeTemplate(tmpl);
