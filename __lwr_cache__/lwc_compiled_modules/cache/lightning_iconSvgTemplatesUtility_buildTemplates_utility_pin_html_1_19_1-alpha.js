import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pin.css";

import _implicitScopedStylesheets from "./pin.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.5 15.4L36 1.9c-1.4-1.4-3.6-1.4-5 0s-1.4 3.6 0 5l.7.7-16.2 10.7-.5-.5c-1.4-1.4-3.6-1.4-5 0s-1.4 3.6 0 5l7.2 7.2L2.4 44.8c-1.4 1.4-1.4 3.7 0 5.1 1.4 1.4 3.7 1.4 5.1 0L22.3 35l6.3 6.3c1.4 1.4 3.6 1.4 5 0s1.4-3.6 0-5l-.5-.5 10.6-16.3.7.7c1.4 1.4 3.6 1.4 5 0 1.4-1.2 1.4-3.4.1-4.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-hmfbr2pg2";
freezeTemplate(tmpl);
