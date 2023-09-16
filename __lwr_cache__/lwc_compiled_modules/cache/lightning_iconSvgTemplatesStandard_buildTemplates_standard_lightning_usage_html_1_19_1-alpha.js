import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightning_usage.css";

import _implicitScopedStylesheets from "./lightning_usage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M19 73.9c0 2.8 2.2 5 5 5h53c1.1 0 2-.9 2-2v-2.1c0-1.1-.9-2-2-2H26.9c-1 0-1.9-.9-1.9-1.9v-50c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v53z"${3}/><path d="M34.4 57.9c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l16-15.9c1.2-1.2 3.1-1.2 4.2 0l7.7 7.7 13.5-13.7c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2L62.4 50.8c-.6.6-1.3.9-2.1.9s-1.6-.3-2.1-.9l-7.8-7.7L36.6 57c-.6.6-1.4.9-2.2.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-68cafr8r84m";
freezeTemplate(tmpl);
