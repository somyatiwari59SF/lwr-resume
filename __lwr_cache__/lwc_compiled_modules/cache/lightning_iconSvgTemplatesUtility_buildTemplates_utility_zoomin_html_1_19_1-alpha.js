import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./zoomin.css";

import _implicitScopedStylesheets from "./zoomin.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M31 19h-6v-6c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v6h-6c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h6v6c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-6h6c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1z"${3}/><path d="M49.6 45.2L38.1 33.8C40.5 30.5 42 26.4 42 22c0-11-9-20-20-20S2 11 2 22s9 20 20 20c4.4 0 8.5-1.5 11.8-3.9l11.5 11.5c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.6.1-2.3zM22 36c-7.7 0-14-6.3-14-14S14.3 8 22 8s14 6.3 14 14-6.3 14-14 14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2uukjdqf7vj";
freezeTemplate(tmpl);
