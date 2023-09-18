import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom73.css";

import _implicitScopedStylesheets from "./new_custom73.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M4.8 14h42.4c1 0 1.8-1 1.5-2-1-3.3-2.4-6.3-4.3-9-.6-.8-1.7-.9-2.3-.2-1.9 1.8-4.6 2.8-7.4 2.8-3 0-5.7-1.2-7.7-3.2-.6-.6-1.6-.6-2.2 0-2 2-4.7 3.2-7.7 3.2-2.8 0-5.4-1-7.4-2.8-.6-.6-1.6-.5-2.2.3-1.9 2.6-3.4 5.7-4.3 9-.2.9.6 1.9 1.6 1.9zM50 20.4c0-.9-.7-1.6-1.6-1.6H3.6c-.9 0-1.6.7-1.6 1.6v.3c0 15 10.4 27.4 24 29.3 13.6-1.9 24-14.3 24-29.2v-.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-5sa0j5lqoo4";
freezeTemplate(tmpl);
