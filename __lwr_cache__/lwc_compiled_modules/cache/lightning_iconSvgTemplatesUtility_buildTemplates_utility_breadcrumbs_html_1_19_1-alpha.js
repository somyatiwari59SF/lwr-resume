import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./breadcrumbs.css";

import _implicitScopedStylesheets from "./breadcrumbs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M8.4 42c-.6 0-1-.4-1-1V10.9c0-.6.4-1 1-1h8.1c.4 0 .9.2 1.2.5L29.3 25c.4.5.4 1.3 0 1.9L17.6 41.5c-.3.4-.8.6-1.3.6L8.4 42z"${3}/><path d="M44.3 25L32.6 10.5c-.5-.6-1.4-.8-2.1-.2l-2.3 1.9c-.7.5-.8 1.5-.2 2.1L37.5 26 28 37.8c-.5.6-.4 1.6.2 2.1l2.3 1.9c.7.5 1.5.4 2.1-.2L44.3 27c.4-.8.4-1.5 0-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7j83cu2ha80";
freezeTemplate(tmpl);
