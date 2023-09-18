import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist_type.css";

import _implicitScopedStylesheets from "./picklist_type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2.1 13.3v-3.2c0-.9.7-1.6 1.6-1.6h31.9c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6H3.7c-.9 0-1.6-.7-1.6-1.6zm0 14.3v-3.2c0-.9.7-1.6 1.6-1.6h31.9c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6H3.7c-.9 0-1.6-.7-1.6-1.6zm41.4 0v-3.2c0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6h-3.2c-.9 0-1.6-.7-1.6-1.6zm0-14.3v-3.2c0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6h-3.2c-.9 0-1.6-.7-1.6-1.6zm0 28.6v-3.2c0-.9.7-1.6 1.6-1.6h3.2c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6h-3.2c-.9 0-1.6-.7-1.6-1.6zm-41.4 0v-3.2c0-.9.7-1.6 1.6-1.6h31.9c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6H3.7c-.9 0-1.6-.7-1.6-1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-22n4q4tmlq6";
freezeTemplate(tmpl);
