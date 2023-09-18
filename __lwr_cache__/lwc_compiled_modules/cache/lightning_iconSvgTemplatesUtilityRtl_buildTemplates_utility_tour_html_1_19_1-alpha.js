import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tour.css";

import _implicitScopedStylesheets from "./tour.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.9 37.1a9 9 0 01-9 9H14.3a7.51 7.51 0 00.15-1.51 7.38 7.38 0 00-.15-1.49h26.62a6 6 0 000-12H11a9 9 0 010-18h20.27a14.84 14.84 0 001 3H11a6 6 0 000 12h29.92a8.85 8.85 0 013.53.73 8.7 8.7 0 013.24 2.37 9 9 0 012.21 5.9z"${3}/><path d="M42.47 2.93a7.54 7.54 0 00-7.53 7.57c0 5.23 5.39 10 7.05 11.3a.81.81 0 001 0c1.66-1.31 7-6.07 7-11.3a7.54 7.54 0 00-7.52-7.57zm0 10.7a3.17 3.17 0 113.17-3.17 3.18 3.18 0 01-3.17 3.17z"${3}/><circle cx="6.49" cy="44.58" r="4.49"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1e6rh4ghnsd";
freezeTemplate(tmpl);
