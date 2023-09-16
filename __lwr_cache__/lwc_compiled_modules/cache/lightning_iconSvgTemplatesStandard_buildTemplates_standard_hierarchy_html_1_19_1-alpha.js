import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hierarchy.css";

import _implicitScopedStylesheets from "./hierarchy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.25 46.251H29.404c-.999 0-1.875.875-1.875 1.875V62.5h-5.654c-1 0-1.875.875-1.875 1.875v13.75c0 1 .875 1.875 1.875 1.875h18.75c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875h-5.642v-8.749h30.035V62.5h-5.613c-1.001 0-1.875.875-1.875 1.875v13.75c0 1 .874 1.875 1.875 1.875h18.75c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875H72.49V48.126c0-1-.874-1.875-1.875-1.875H53.75V37.5h5.61c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875H40.61c-1.001 0-1.875.875-1.875 1.875v13.75c0 1 .874 1.875 1.875 1.875h5.64v8.751z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ss3gc8qs2h";
freezeTemplate(tmpl);
