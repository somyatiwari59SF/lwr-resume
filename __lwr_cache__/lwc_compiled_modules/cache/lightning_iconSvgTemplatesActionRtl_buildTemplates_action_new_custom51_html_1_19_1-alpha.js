import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom51.css";

import _implicitScopedStylesheets from "./new_custom51.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M18.5 6.5c2 1.4 3.9 4.6 4.7 7.1.2.6.6 1 1.2 1 .6.2 1 .2 1.6.2.9 0 1.6 0 2.3-.3 2-.7 3.8-1.6 5.3-3.1 2.4-2.5 3.3-6 2.4-8.9-2.9-.9-6.4-.1-8.8 2.4-.7.7-1.3 1.5-1.7 2.4-1.3-2-2.8-3.8-4.5-4.9-1.2-.7-2.7-.3-3.4.9-.6 1.1-.1 2.5.9 3.2zM42.7 18.2c-8.1-4.6-9.8 1.6-16.7 1.6s-8.6-6.2-16.7-1.6C1.5 22.7 3.8 37.4 6.9 43c2.8 4.9 7.9 9.9 18.4 5.1.4-.2.9-.2 1.3 0 10.5 4.8 15.7-.3 18.4-5.1 3.2-5.6 5.5-20.3-2.3-24.8z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3e6sc7hemtf";
freezeTemplate(tmpl);
