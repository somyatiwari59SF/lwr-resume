import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./scheduling_workspace.css";

import _implicitScopedStylesheets from "./scheduling_workspace.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M58.75 72.5H55c-.75 0-1.25-.5-1.25-1.25v-2.5c0-.75-.5-1.25-1.25-1.25h-5c-.75 0-1.25.5-1.25 1.25v2.5c0 .75-.5 1.25-1.25 1.25h-3.75c-2.75 0-5 2.25-5 5v.62c0 1 .87 1.88 1.88 1.88h23.75c1 0 1.88-.88 1.88-1.88v-.62c0-2.75-2.25-5-5-5zM75 20H25c-2.75 0-5 2.25-5 5v32.5c0 2.75 2.25 5 5 5h50c2.75 0 5-2.25 5-5V25c0-2.75-2.25-5-5-5zM27.5 53.12V29.38c0-1 .87-1.88 1.88-1.88h7.5V55h-7.5c-1 0-1.88-.88-1.88-1.88zm45 0c0 1-.88 1.88-1.88 1.88H44.37V27.5h26.25c1 0 1.88.87 1.88 1.88v23.75z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-jltqscmbtu";
freezeTemplate(tmpl);
