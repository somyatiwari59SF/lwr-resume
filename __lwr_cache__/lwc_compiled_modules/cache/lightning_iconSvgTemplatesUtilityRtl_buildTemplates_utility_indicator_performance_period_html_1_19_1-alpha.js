import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./indicator_performance_period.css";

import _implicitScopedStylesheets from "./indicator_performance_period.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.99 23.12l-1.13-1.69-3.29 1.42c-4.25-6.84-12.02-11.86-20.14-11.86-12.04 0-23.44 11.1-23.44 22.86v.72l.05.96h5.77l-.07-.96v-.69c0-9.5 7.95-17.26 17.71-17.26 6.18-.02 11.93 3.16 15.19 8.4l-11.25 4.89c-2.03-1.69-4.87-2-7.22-.79A6.271 6.271 0 0019 32.8c-.51 1.61-.35 3.35.45 4.84a6.564 6.564 0 008.74 2.67 6.252 6.252 0 003.43-6.24l10.44-6.21c.75 1.92 1.13 3.96 1.13 6.03v.69l-.07.96h5.76l.05-.96v-.72c-.04-3.06-.78-6.08-2.15-8.82l3.21-1.92z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7hjadklj07b";
freezeTemplate(tmpl);
