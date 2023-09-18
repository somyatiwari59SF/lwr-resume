import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom59.css";

import _implicitScopedStylesheets from "./new_custom59.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M39.7 10.8c.8 0 1.3-.6 1.3-1.4 0-.6-.3-1.1-.9-1.4-1-.6-2.6-3.3-3.2-5-.2-.6-.8-1-1.4-1H16.3c-.6 0-1.3.4-1.4 1-.5 1.6-2.1 4.4-3.1 5-.5.3-.8.8-.8 1.4 0 .8.6 1.4 1.3 1.4h27.4zM11 45.1c0 2.7 2.1 4.9 4.7 4.9h20.5c2.6 0 4.7-2.2 4.7-4.8v-.1c0-.9-.7-1.5-1.5-1.5h-27c-.7 0-1.4.7-1.4 1.5zM41 37.2v-20c0-.9-.7-1.6-1.6-1.6H12.6c-.9 0-1.6.7-1.6 1.6v20c0 .9.7 1.6 1.6 1.6h26.8c.9 0 1.6-.7 1.6-1.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2k6aj59rjaf";
freezeTemplate(tmpl);
