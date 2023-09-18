import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./profile.css";

import _implicitScopedStylesheets from "./profile.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><circle cx="26" cy="20.7" r="6.15"${3}/><path d="M27.14 2.72a1.89 1.89 0 00-2.28 0c-8.42 6.34-16.37 12.33-16.37 24A16.92 16.92 0 0013.19 39c.24.24.48.47.74.7a17.9 17.9 0 0010.53 4.19L22.74 47s-2 2.68 2.69 2.68h1.14c4.72 0 2.68-2.68 2.68-2.68l-1.71-3.06a17.9 17.9 0 0010.53-4.19c3.56-3.13 5.44-7.64 5.44-13 0-11.7-7.95-17.69-16.37-24.03zm10.1 32.37a9.74 9.74 0 01-1 1.13A10.77 10.77 0 0016 35.67 10.17 10.17 0 0114.53 34a15 15 0 01-1.94-10.84c1.24-6.62 6.07-11 13.41-16.56 8.57 6.52 13.73 11.4 13.73 20.08a13.73 13.73 0 01-2.49 8.41z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-37u1f5rl0ra";
freezeTemplate(tmpl);
