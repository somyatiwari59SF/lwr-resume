import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_account.css";

import _implicitScopedStylesheets from "./new_account.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M50 26.9c.1-1.7-1.2-2.2-1.7-2.2h-18c-1.6 0-1.8 1.7-1.8 1.8V46H50V26.9zm-12.4 14c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm8.3 8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7z"${3}/><path d="M33.4 17.9V8.2c.1-1.7-1.1-2.2-1.6-2.2h-28C2.2 6 2 7.7 2 7.8V46h21.5V21.6s0-2 1.8-2h6.5c1 0 1.6-1 1.6-1.7zM11.1 40.1c0 .9-.7 1.7-1.7 1.7H7.8c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.6c0 .9-.7 1.7-1.7 1.7H7.8c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.5c0 .9-.7 1.7-1.7 1.7H7.8c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7V23zm0-8.5c0 .9-.7 1.7-1.7 1.7H7.8c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm9.1 25.6c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.6c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7V23zm0-8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm9.1 0c0 .9-.7 1.7-1.7 1.7H26c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4idqcn7fdl2";
freezeTemplate(tmpl);
