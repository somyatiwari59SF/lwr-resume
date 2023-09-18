import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tour.css";

import _implicitScopedStylesheets from "./tour.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79.87 63.88A11.24 11.24 0 0168.65 75.1H35.38a9.91 9.91 0 00.19-1.88 9.8 9.8 0 00-.19-1.87h33.27a7.5 7.5 0 000-15H31.24a11.23 11.23 0 010-22.45h25.34a19.66 19.66 0 001.28 3.74H31.24a7.5 7.5 0 100 15h37.41a11.21 11.21 0 014.42.91 10.86 10.86 0 014 3 11.18 11.18 0 012.8 7.33z"${3}/><path d="M70.59 21.16a9.43 9.43 0 00-9.41 9.45c0 6.54 6.73 12.53 8.81 14.11a1 1 0 001.24 0C73.31 43.11 80 37.17 80 30.63a9.43 9.43 0 00-9.39-9.47zm0 13.38a4 4 0 114-4 4 4 0 01-4 4z"${3}/><circle cx="25.61" cy="73.22" r="5.61"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-51uan2rnbgn";
freezeTemplate(tmpl);
