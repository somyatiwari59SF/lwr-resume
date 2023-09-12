import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./live_message.css";

import _implicitScopedStylesheets from "./live_message.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46 2H22c-2.2 0-4 1.8-4 4v.1c3.6.4 6.9 1.7 9.6 3.8h14.8c.8 0 1.6.8 1.6 1.6v27c0 .8-.8 1.4-1.6 1.4h-17c-.8 0-1.4-.6-1.4-1.4v-.1c0-.1-.1-.3-.2-.3-1.7.8-3.6 1.3-5.5 1.5-.2.2-.3.4-.3.9v5.4c0 2.2 1.7 4 3.9 4h24c2.2 0 4.1-1.8 4.1-4V6c0-2.2-1.8-4-4-4zM34 48c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"${3}/><path d="M2 22.9C2 30 8.3 35.7 15.9 35.8c2.7 0 5.2-.7 7.3-1.9.4-.2.7-.2 1-.1l5 1.9c.5.1.9-.3.8-.8l-1.8-5c-.1-.4-.1-.7.1-1 1.1-1.9 1.7-4 1.7-6.2 0-7-6.2-12.7-14-12.7-7.7 0-13.9 5.7-14 12.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5fbvv42glr4";
freezeTemplate(tmpl);
