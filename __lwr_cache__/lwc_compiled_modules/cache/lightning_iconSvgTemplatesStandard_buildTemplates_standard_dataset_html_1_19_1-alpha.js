import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dataset.css";

import _implicitScopedStylesheets from "./dataset.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M52 20.6l23.4 11.5c1.6.8 2.6 2.4 2.6 4.1V63c0 1.8-1 3.4-2.6 4.1L52 78.6c-1.3.6-2.8.6-4.1 0L24.6 67.1C23 66.3 22 64.7 22 63V36.2c0-1.8 1-3.4 2.6-4.1L48 20.6c1.2-.6 2.8-.6 4 0z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-92hf1b66s0";
freezeTemplate(tmpl);
