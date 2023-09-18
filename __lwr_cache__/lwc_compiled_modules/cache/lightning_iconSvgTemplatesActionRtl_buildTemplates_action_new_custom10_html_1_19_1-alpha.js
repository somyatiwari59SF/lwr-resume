import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom10.css";

import _implicitScopedStylesheets from "./new_custom10.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42 48.3c-7.6 3-19.6 2.2-26.1-4.8C.1 26.6 13.9 2 32.9 2c3.2 0 6.2.6 9.1 1.8 1.2.5 1.3 2.1.3 2.8C36.2 10.9 32.1 18 32.1 26c0 8.1 4 15.2 10.1 19.5 1.1.7.9 2.3-.2 2.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ki9jtd550d";
freezeTemplate(tmpl);
