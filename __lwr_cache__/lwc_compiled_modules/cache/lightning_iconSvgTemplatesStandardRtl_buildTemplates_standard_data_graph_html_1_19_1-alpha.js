import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_graph.css";

import _implicitScopedStylesheets from "./data_graph.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M59.75 47.44c3.51-2.83 5.75-7.16 5.75-12.01 0-8.52-6.9-15.42-15.42-15.42s-15.42 6.9-15.42 15.42c0 4.89 2.28 9.25 5.83 12.07l-1.86 3.29-3.97 7.01c-1.05-.32-2.16-.49-3.3-.49-6.27 0-11.35 5.08-11.35 11.35s5.08 11.35 11.35 11.35 11.35-5.08 11.35-11.35c0-3.37-1.47-6.4-3.81-8.48l3.96-6.99 1.86-3.29c1.67.62 3.48.96 5.36.96s3.75-.35 5.45-.99l1.9 3.36 3.85 6.8a11.327 11.327 0 00-3.99 8.64c0 6.27 5.08 11.35 11.35 11.35s11.35-5.08 11.35-11.35-5.08-11.35-11.35-11.35c-1.07 0-2.1.15-3.07.42l-3.91-6.91-1.91-3.38zm-28.4 27.7c3.58 0 6.49-2.9 6.49-6.49s-2.9-6.49-6.49-6.49-6.49 2.9-6.49 6.49 2.9 6.49 6.49 6.49zm37.3 0c3.58 0 6.49-2.9 6.49-6.49s-2.9-6.49-6.49-6.49-6.49 2.9-6.49 6.49 2.9 6.49 6.49 6.49z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ecsr6cf8ni";
freezeTemplate(tmpl);
