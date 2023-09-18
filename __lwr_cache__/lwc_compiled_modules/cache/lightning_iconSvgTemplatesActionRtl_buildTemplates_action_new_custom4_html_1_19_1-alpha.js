import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom4.css";

import _implicitScopedStylesheets from "./new_custom4.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M6.6 12.2l16.9-9.5c1.5-.9 3.5-.9 5.1 0l16.9 9.5c1.5.9 2.5 2.6 2.5 4.3v19c0 1.8-.9 3.4-2.5 4.3l-16.9 9.5c-1.5.9-3.5.9-5.1 0L6.6 39.8C5.1 38.9 4 37.3 4 35.5v-19c0-1.8 1.1-3.4 2.6-4.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1qnshvnjmcv";
freezeTemplate(tmpl);
