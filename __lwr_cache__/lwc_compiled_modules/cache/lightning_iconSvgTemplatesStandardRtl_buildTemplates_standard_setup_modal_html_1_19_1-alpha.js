import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup_modal.css";

import _implicitScopedStylesheets from "./setup_modal.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78.12 20H21.88c-1 0-1.88.88-1.88 1.88v40.5c0 1 .88 1.88 1.88 1.88h56.25c1 0 1.88-.88 1.88-1.88v-40.5c0-1-.88-1.88-1.88-1.88z"${3}/><path d="M57.5 72.5c1.37 0 2.5 1.13 2.5 2.5s-1.13 2.5-2.5 2.5S55 76.37 55 75s1.12-2.5 2.5-2.5m0-2.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z"${3}/><circle cx="42.5" cy="75" r="5"${3}/><circle cx="27.5" cy="75" r="5"${3}/><circle cx="72.5" cy="75" r="5"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-67lhabs3ju";
freezeTemplate(tmpl);
