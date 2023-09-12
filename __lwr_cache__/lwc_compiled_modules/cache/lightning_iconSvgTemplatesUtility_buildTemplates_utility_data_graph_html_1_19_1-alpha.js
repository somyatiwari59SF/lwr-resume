import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_graph.css";

import _implicitScopedStylesheets from "./data_graph.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M33.8 23.95c2.81-2.26 4.6-5.73 4.6-9.61 0-6.81-5.52-12.33-12.33-12.33S13.74 7.53 13.74 14.34c0 3.91 1.82 7.4 4.66 9.66l-1.49 2.63-3.17 5.6a9.08 9.08 0 103.4 1.91l3.17-5.59 1.49-2.63c1.34.5 2.78.77 4.29.77s3-.28 4.36-.79l1.52 2.69 3.08 5.44a9.08 9.08 0 103.43-1.83l-3.13-5.53-1.53-2.7v-.02zM11.09 46.1c2.87 0 5.19-2.32 5.19-5.19s-2.32-5.19-5.19-5.19-5.19 2.32-5.19 5.19 2.32 5.19 5.19 5.19zm29.83 0c2.87 0 5.19-2.32 5.19-5.19s-2.32-5.19-5.19-5.19-5.19 2.32-5.19 5.19 2.32 5.19 5.19 5.19z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1gbthsf4m2s";
freezeTemplate(tmpl);
