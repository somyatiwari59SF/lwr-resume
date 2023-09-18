import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./file.css";

import _implicitScopedStylesheets from "./file.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M29 63V31c-3.3 0-6 2.7-6 6v38c0 3.3 2.7 6 6 6h30c3.3 0 6-2.7 6-6H41c-6.6 0-12 0-12-12z"${3}/><path d="M75 37H65c-3.3 0-6-2.7-6-6V21c0-1.1-.9-2-2-2H41c-3.3 0-6 2.7-6 6v38c0 3.3 2.7 6 6 6h30c3.3 0 6-2.7 6-6V39c0-1.1-.9-2-2-2z"${3}/><path d="M76.6 28.6l-9.2-9.2c-.3-.3-.6-.4-1-.4-.8 0-1.4.6-1.4 1.4V27c0 2.2 1.8 4 4 4h6.6c.8 0 1.4-.6 1.4-1.4 0-.4-.1-.7-.4-1z"${3}/></g></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-3pt43ttt84g";
freezeTemplate(tmpl);
