import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./task2.css";

import _implicitScopedStylesheets from "./task2.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42.6 71c-1.2 0-2.4-.5-3.3-1.4L20.6 50.9c-.8-.8-.8-2 0-2.8l3.7-3.7c.8-.8 2-.8 2.8 0l15.5 15.4 30.3-30.3c.8-.8 2-.8 2.8 0l3.7 3.7c.8.8.8 2 0 2.8L45.8 69.6c-.9.9-2 1.4-3.2 1.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2h5a6lq6hmt";
freezeTemplate(tmpl);
