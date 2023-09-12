import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./jump_to_left.css";

import _implicitScopedStylesheets from "./jump_to_left.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M21.5 40.6L7.9 27.1a1.57 1.57 0 010-2.2l13.6-13.5a1.57 1.57 0 012.2 0l2.2 2.2a1.57 1.57 0 010 2.2l-9.4 9.1a1.57 1.57 0 000 2.2l9.3 9.1a1.57 1.57 0 010 2.2l-2.2 2.2a1.66 1.66 0 01-2.1 0z"${3}/><path d="M39.6 40.6L25.8 27.1a1.57 1.57 0 010-2.2l13.8-13.5a1.57 1.57 0 012.2 0l2.2 2.2a1.57 1.57 0 010 2.2l-9.4 9.1a1.57 1.57 0 000 2.2l9.3 9.1a1.57 1.57 0 010 2.2l-2.2 2.2a1.66 1.66 0 01-2.1 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-mr10cajfti";
freezeTemplate(tmpl);
