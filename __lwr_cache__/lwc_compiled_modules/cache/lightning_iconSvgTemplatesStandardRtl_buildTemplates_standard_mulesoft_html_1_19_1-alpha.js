import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mulesoft.css";

import _implicitScopedStylesheets from "./mulesoft.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 77.65c-15.09 0-27.3-12.29-27.3-27.46S34.91 22.72 50 22.72s27.3 12.29 27.3 27.46S65.09 77.64 50 77.64zm0-57.64c-16.53 0-30 13.37-30 30s13.47 30 30 30 30-13.38 30-30-13.47-30-30-30z"${3}/><path d="M42.45 63.56c-4.49-2.18-7.73-7.05-7.73-12.46 0-2.89.9-5.6 2.34-7.95l9.89 14.83h5.92l9.89-14.83c1.44 2.17 2.34 5.06 2.34 7.95 0 5.24-2.69 9.76-6.82 12.11l1.98 7.22c7.19-3.8 12.21-11.39 12.21-20.06s-4.49-15.55-10.96-19.34l-11.5 17.71L38.7 30.85c-6.65 3.98-11.14 11.2-11.14 19.52 0 9.04 5.21 16.81 12.94 20.42l1.97-7.22v-.02z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2tjr5dnh85u";
freezeTemplate(tmpl);
