import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./transport_light_truck.css";

import _implicitScopedStylesheets from "./transport_light_truck.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.41 28.7h-.12v-4.1a3.48 3.48 0 00-3.49-3.48L42.48 21c-.93-1.42-2.13-3.3-3.21-5.14-1.83-3.1-4-2.86-4-2.86h-5A3.25 3.25 0 0027 16.29v4.37H3.59A1.6 1.6 0 002 22.26v12.17A1.59 1.59 0 003.59 36H6.4A6.17 6.17 0 0018 36h16.28a6.17 6.17 0 0011.64 0h2.49A1.59 1.59 0 0050 34.43v-4.14a1.59 1.59 0 00-1.59-1.59zM12.22 37a3 3 0 113-3 3 3 0 01-3 3zm18-15.74a1.48 1.48 0 01-1.34-1.59v-2.82a1.49 1.49 0 011.34-1.59h4.62c1.37 0 2.24 1.73 2.24 1.73s1.07 1.78 1.55 2.65.43 1.59-1.34 1.59zM40.1 37a3 3 0 113-3 3 3 0 01-3 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-oqj48skqcb";
freezeTemplate(tmpl);
