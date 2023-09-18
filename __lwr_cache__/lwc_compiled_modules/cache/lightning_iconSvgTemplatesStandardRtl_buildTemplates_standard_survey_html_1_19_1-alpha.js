import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./survey.css";

import _implicitScopedStylesheets from "./survey.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79.9 27v4c0 2.2-1.8 4-4 4h-44c-2.2 0-4-1.8-4-4v-4c0-2.2 1.8-4 4-4h44c2.2 0 4 1.8 4 4zM79.9 45v4c0 2.2-1.8 4-4 4h-25c-2.2 0-4-1.8-4-4v-4c0-2.2 1.8-4 4-4h25c2.2 0 4 1.8 4 4zM79.9 63v4c0 2.2-1.8 4-4 4H53.3c.5-1.9.7-3.9.6-6 0-1.7-.4-3.7-1.2-6h23.2c2.2 0 4 1.8 4 4zM34 52c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14zm7.9 10.9c.3-.3.3-1 0-1.3l-1.4-1.3c-.4-.4-1-.4-1.4 0l-7.5 8.4-3.4-3.4c-.4-.4-1-.4-1.4 0l-1.4 1.3c-.4.3-.4.9 0 1.3l4.8 4.7c.4.4.9.6 1.4.6.6 0 1-.2 1.4-.6l8.9-9.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3dnp4s1iqbm";
freezeTemplate(tmpl);
