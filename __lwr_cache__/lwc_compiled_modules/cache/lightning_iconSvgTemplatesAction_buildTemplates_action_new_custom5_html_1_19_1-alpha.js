import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom5.css";

import _implicitScopedStylesheets from "./new_custom5.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.1 5.8C40.9 2.7 31.4 2 23 4.7 15.6 7.1 8 12.6 6.9 20.8c-.2 1.7-.2 3.6.2 5.2.2.9.5 1.7.8 2.6.2.5.3.9.6 1.3-.3.5-.6 1-1 1.4-2.3 3.6-3.9 7.7-4.9 11.8-.4 1.7-1.4 4.3.5 5.5.7.5 1.8.5 2.5.1 1-.6 1.1-1.5 1.3-2.5.7-4.2 2.2-8.4 4.5-12 1.1-1.7 2.3-3.5 3.7-5.1 1.2-1.3 3-3.7 5-3 2 .7 1.9 3 .6 4.2s-2.5 2.5-2.5 4.4c0 1.4.6 2.9 1.8 3.8 1.6 1.3 4.8 1.6 6.7 1.4 4.2-.2 7.7-1.5 11.1-4 4.5-3.1 6.2-8.5 7.1-13.6.6-3.2 1-6.3 2.1-9.3.5-1.3 1.1-2.5 1.8-3.6.3-.6 1-1.2 1.1-1.8.3-.9-.2-1.6-.8-1.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-74vcoq8m3ll";
freezeTemplate(tmpl);
