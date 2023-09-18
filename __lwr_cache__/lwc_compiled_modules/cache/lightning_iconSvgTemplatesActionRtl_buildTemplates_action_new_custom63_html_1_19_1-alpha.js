import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom63.css";

import _implicitScopedStylesheets from "./new_custom63.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M19.6 34h12.8c.9 0 1.6-.7 1.6-1.6V19.6c0-.9-.7-1.6-1.6-1.6H19.6c-.9 0-1.6.7-1.6 1.6v12.8c0 .9.7 1.6 1.6 1.6z"${3}/><path d="M47.6 28.4c1.4 0 2.4-1 2.4-2.4s-1-2.4-2.4-2.4h-4v-4.8h4c1.4 0 2.4-1 2.4-2.4S49 14 47.6 14h-4v-.8c0-2.6-2.2-4.8-4.8-4.8H38v-4C38 3 37 2 35.6 2s-2.4 1-2.4 2.4v4h-4.8v-4C28.4 3 27.4 2 26 2s-2.4 1-2.4 2.4v4h-4.8v-4c0-1.4-1-2.4-2.4-2.4S14 3 14 4.4v4h-.8c-2.6 0-4.8 2.2-4.8 4.8v.8h-4C3 14 2 15 2 16.4s1 2.4 2.4 2.4h4v4.8h-4C3 23.6 2 24.6 2 26s1 2.4 2.4 2.4h4v4.8h-4c-1.4 0-2.4 1-2.4 2.4S3 38 4.4 38h4v.8c0 2.6 2.2 4.8 4.8 4.8h.8v4c0 1.4 1 2.4 2.4 2.4s2.4-1 2.4-2.4v-4h4.8v4c0 1.4 1 2.4 2.4 2.4s2.4-1 2.4-2.4v-4h4.8v4c0 1.4 1 2.4 2.4 2.4s2.4-1 2.4-2.4v-4h.8c2.6 0 4.8-2.2 4.8-4.8V38h4c1.4 0 2.4-1 2.4-2.4s-1-2.4-2.4-2.4h-4v-4.8h4zm-8.8 8c0 1.4-1 2.4-2.4 2.4H15.6c-1.4 0-2.4-1-2.4-2.4V15.6c0-1.4 1-2.4 2.4-2.4h20.8c1.4 0 2.4 1 2.4 2.4v20.8z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-31r9kgk2jas";
freezeTemplate(tmpl);
