import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom49.css";

import _implicitScopedStylesheets from "./new_custom49.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M26 18.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2-3.2-7.2-7.2-7.2zM26 30c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"${3}/><path d="M26 2C12.7 2 2 12.7 2 26s10.7 24 24 24 24-10.7 24-24S39.3 2 26 2zm0 42.3c0 1-.8 1.7-1.8 1.6-9.6-.8-17.3-8.5-18.2-18.2 0-.9.7-1.7 1.7-1.7h1.6c.8 0 1.5.6 1.6 1.4.7 7.2 6.5 13 13.7 13.7.8.1 1.4.8 1.4 1.6v1.6zm0-6.3c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12zm18.3-12h-1.6c-.8 0-1.5-.6-1.6-1.4-.7-7.2-6.5-13-13.7-13.7-.8-.1-1.4-.8-1.4-1.6V7.7c0-1 .8-1.7 1.8-1.6 9.7.8 17.4 8.6 18.2 18.2 0 .9-.7 1.7-1.7 1.7z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-78rjbdjkkr2";
freezeTemplate(tmpl);
