import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./end_chat.css";

import _implicitScopedStylesheets from "./end_chat.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M24.6 40.6c0-8.8 7.2-16 16-16 1.5 0 2.9.2 4.2.6.2-1.1.3-2.1.3-3.2C45 11 35.4 2.2 23.6 2.2 11.7 2.2 2.2 11 2.2 21.8c0 3.4 1 6.6 2.6 9.5.3.4.4 1 .2 1.5l-2.8 7.6c-.3.7.4 1.3 1.2 1.2l7.7-3c.4-.2 1-.1 1.5.2 3.2 1.8 7.1 2.9 11.2 2.9h.8v-1.1zm9.8-22.3c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6-3.6-1.6-3.6-3.6 1.6-3.6 3.6-3.6zm-21.5 7.1c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.7 3.6-3.6 3.6zm10.7 0c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6z"${3}/><path d="M31.7 34.6l6 6-6 6c-.6.6-.6 1.6 0 2.1l.7.7c.6.6 1.6.6 2.1 0l6-6 6 6c.6.6 1.6.6 2.1 0l.7-.7c.6-.6.6-1.6 0-2.1l-6-6 6-6c.6-.6.6-1.6 0-2.1l-.7-.7c-.6-.6-1.6-.6-2.1 0l-6 6-6-6c-.6-.6-1.6-.6-2.1 0l-.7.7c-.5.5-.5 1.5 0 2.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3vej19f701m";
freezeTemplate(tmpl);
