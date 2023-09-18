import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter_criteria_rule.css";

import _implicitScopedStylesheets from "./filter_criteria_rule.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M27.4 2A1.58 1.58 0 0129 3.6v11.2a3.89 3.89 0 004.2 4.2h11.2a1.58 1.58 0 011.6 1.6v24.6a4.87 4.87 0 01-4.8 4.8H10.8A4.87 4.87 0 016 45.2V6.8A4.87 4.87 0 0110.8 2h16.6zm7.52 24H17.08a.68.68 0 00-.52 1.12l7.79 9.12a1.65 1.65 0 01.36 1v5.78a.66.66 0 00.65.6h1.2a.58.58 0 00.56-.6v-5.73a1.47 1.47 0 01.45-1l7.87-9.12a.68.68 0 00-.52-1.17zM34.2 2a1.4 1.4 0 01.9.3l10.6 10.6a1.4 1.4 0 01.3.9 1.2 1.2 0 01-1.1 1.2h-8.5a3.5 3.5 0 01-3.4-3.4V3.1A1.2 1.2 0 0134.2 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1bjm54pujka";
freezeTemplate(tmpl);
