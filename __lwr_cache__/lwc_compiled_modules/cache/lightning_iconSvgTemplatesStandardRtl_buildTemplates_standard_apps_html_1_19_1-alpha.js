import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apps.css";

import _implicitScopedStylesheets from "./apps.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M32 20h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM54 20h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM76 20h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM32 42h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM54 42h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM76 42h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM32 64h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM54 64h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM76 64h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2a07s24t6jc";
freezeTemplate(tmpl);
