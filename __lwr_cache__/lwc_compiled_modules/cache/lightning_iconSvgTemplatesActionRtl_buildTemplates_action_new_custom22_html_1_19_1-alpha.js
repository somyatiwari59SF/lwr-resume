import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom22.css";

import _implicitScopedStylesheets from "./new_custom22.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.1 37.1l-5-4c-1.7-1.4-4.1-1.4-5.8-.2l-4.7 3.4c-.6.5-1.5.4-2.1-.2l-7.8-7-7.1-7.8c-.6-.6-.6-1.4-.2-2.1l3.4-4.7c1.3-1.8 1.2-4.2-.2-5.8l-4-5C13 1.5 9.7 1.3 7.7 3.3L3.4 7.7C2.4 8.7 2 10 2 11.3 2.6 21.5 7.2 31.2 14 38s16.4 11.4 26.6 12c1.4.1 2.6-.5 3.6-1.4l4.3-4.3c2.1-2.1 1.9-5.4-.4-7.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-uav4kvjf1j";
freezeTemplate(tmpl);
