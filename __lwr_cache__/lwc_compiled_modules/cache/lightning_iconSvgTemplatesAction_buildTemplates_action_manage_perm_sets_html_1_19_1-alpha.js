import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./manage_perm_sets.css";

import _implicitScopedStylesheets from "./manage_perm_sets.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45 2H7C4.2 2 2 4.2 2 7v38c0 2.7 2.2 5 5 5h38c2.7 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5zm-1.6 43H8.6c-.9 0-1.6-.7-1.6-1.6V8.6C7 7.7 7.7 7 8.6 7h34.8c.9 0 1.6.7 1.6 1.6v34.8c0 .9-.7 1.6-1.6 1.6z"${3}/><path d="M21.9 11.9h-8.3c-.9 0-1.7.7-1.7 1.7v8.3c0 .9.7 1.7 1.7 1.7h8.3c.9 0 1.7-.7 1.7-1.7v-8.3c-.1-.9-.8-1.7-1.7-1.7zM38.4 11.9h-8.3c-.9 0-1.7.7-1.7 1.7v8.3c0 .9.7 1.7 1.7 1.7h8.3c.9 0 1.7-.7 1.7-1.7v-8.3c0-.9-.8-1.7-1.7-1.7zM21.9 28.5h-8.3c-.9 0-1.7.7-1.7 1.7v8.3c0 .9.7 1.7 1.7 1.7h8.3c.9 0 1.7-.7 1.7-1.7v-8.3c-.1-1-.8-1.7-1.7-1.7zM38.4 28.5h-8.3c-.9 0-1.7.7-1.7 1.7v8.3c0 .9.7 1.7 1.7 1.7h8.3c.9 0 1.7-.7 1.7-1.7v-8.3c0-1-.8-1.7-1.7-1.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7chvdav8863";
freezeTemplate(tmpl);
