import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./indicator_assignment.css";

import _implicitScopedStylesheets from "./indicator_assignment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39 32h22c1.1 0 2-.9 2-2v-4c0-3.31-2.69-6-6-6H43c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2zM49.8 48.4v11.4h10.7c.18-2.93-.96-5.79-3.1-7.8-3.7-3.8-7.6-3.6-7.6-3.6z"${3}/><path d="M72 25h-2a.941.941 0 00-1 .88V30c0 4.42-3.58 8-8 8H39c-4.42 0-8-3.58-8-8v-4a.941.941 0 00-.88-1H28c-3.31 0-6 2.69-6 6v43c0 3.31 2.69 6 6 6h44c3.31 0 6-2.69 6-6V31c0-3.31-2.69-6-6-6zm-7.1 34.3c-.06 8.23-6.77 14.85-15 14.8s-14.85-6.77-14.8-15c.06-8.23 6.77-14.85 15-14.8 8.22.08 14.83 6.78 14.8 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4gqrq6gda8h";
freezeTemplate(tmpl);
