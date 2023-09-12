import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./search.css";

import _implicitScopedStylesheets from "./search.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.62 45.27L36.22 32a18.9 18.9 0 10-34.1-9.2A18.91 18.91 0 0032 36.27l13.3 13.3a1.45 1.45 0 002.1 0l2.1-2.1a1.68 1.68 0 00.12-2.2zm-28.7-11.5a12.9 12.9 0 1112.9-12.9 12.87 12.87 0 01-12.9 12.9z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-45bd2ao4vb7";
freezeTemplate(tmpl);
