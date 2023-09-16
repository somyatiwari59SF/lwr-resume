import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./poll.css";

import _implicitScopedStylesheets from "./poll.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M76 20H24c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM51 32v-8h25v8H51zM76 42H24c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM42 54v-8h34v8H42zM76 64H24c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM60 76v-8h16v8H60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6lfdh04o9r5";
freezeTemplate(tmpl);
