import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./facility_bed.css";

import _implicitScopedStylesheets from "./facility_bed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 44.17a2.5 2.5 0 015 0V77.5a2.5 2.5 0 01-5 0V44.17zM75 57.5c2.76 0 5 2.24 5 5v15a2.5 2.5 0 01-5 0v-20zM25 57.5h50v14.17H25V57.5zM25 50h6.5c3.31 0 6 2.69 6 6v1.5H25V50zM60.38 29.06h-5.44v-5.44c0-1.99-1.63-3.62-3.62-3.62H47.7c-1.99 0-3.62 1.63-3.62 3.62v5.44h-5.44c-1.99 0-3.62 1.63-3.62 3.62v3.62c0 1.99 1.63 3.62 3.62 3.62h5.44v5.44c0 1.99 1.63 3.62 3.62 3.62h3.62c1.99 0 3.62-1.63 3.62-3.62v-5.44h5.44c1.99 0 3.62-1.63 3.62-3.62v-3.62c0-1.99-1.63-3.62-3.62-3.62z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7uuuvpm5q6e";
freezeTemplate(tmpl);
