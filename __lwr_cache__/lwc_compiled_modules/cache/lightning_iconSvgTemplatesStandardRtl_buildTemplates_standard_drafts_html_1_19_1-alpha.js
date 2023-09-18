import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./drafts.css";

import _implicitScopedStylesheets from "./drafts.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73 20H41c-3.3 0-6 2.7-6 6v1c0 .6.4 1 1 1h29c3.3 0 6 2.7 6 6v31c0 .6.4 1 1 1h1c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6z"${3}/><path d="M59 34H27c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h32c3.3 0 6-2.7 6-6V40c0-3.3-2.7-6-6-6zM29 44c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H31c-1.1 0-2-.9-2-2v-2zm24 26c0 1.1-.9 2-2 2H31c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2zm4-12c0 1.1-.9 2-2 2H31c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4kfiip0fmvl";
freezeTemplate(tmpl);
