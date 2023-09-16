import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./snippet_alt.css";

import _implicitScopedStylesheets from "./snippet_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M35.62 25H21.87c-1 0-1.88.87-1.88 1.88v16.25c0 1 .88 1.88 1.88 1.88h13.75c1 0 1.88-.88 1.88-1.88V26.88c0-1-.87-1.88-1.88-1.88zM78.12 25H44.38c-1 0-1.88.87-1.88 1.88v3.75c0 1 .88 1.88 1.88 1.88h33.75c1 0 1.88-.87 1.88-1.88v-3.75c0-1-.88-1.88-1.88-1.88zM44.38 45h21.25c1 0 1.88-.88 1.88-1.88v-3.75c0-1-.88-1.88-1.88-1.88H44.38c-1 0-1.88.88-1.88 1.88v3.75c0 1 .88 1.88 1.88 1.88zM35.62 55H21.87c-1 0-1.88.88-1.88 1.88v16.25c0 1 .88 1.88 1.88 1.88h13.75c1 0 1.88-.88 1.88-1.88V56.88c0-1-.87-1.88-1.88-1.88zM78.12 55H44.38c-1 0-1.88.88-1.88 1.88v3.75c0 1 .88 1.88 1.88 1.88h33.75c1 0 1.88-.88 1.88-1.88v-3.75c0-1-.88-1.88-1.88-1.88zM65.62 67.5H44.37c-1 0-1.88.88-1.88 1.88v3.75c0 1 .88 1.88 1.88 1.88h21.25c1 0 1.88-.88 1.88-1.88v-3.75c0-1-.88-1.88-1.88-1.88z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5nt2gc04j94";
freezeTemplate(tmpl);
