import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./italic.css";

import _implicitScopedStylesheets from "./italic.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38 12.3V11c0-1.1-.9-2-2-2H22c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2 1.7 0 3 1.6 2.6 3.2L21 35.8c-.3 1.3-1.4 2.2-2.6 2.2H16c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2-1.7 0-3-1.6-2.6-3.2L31 17.2c.3-1.3 1.4-2.2 2.6-2.2h1.7c1.5 0 2.7-1.2 2.7-2.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1dviibnict1";
freezeTemplate(tmpl);
