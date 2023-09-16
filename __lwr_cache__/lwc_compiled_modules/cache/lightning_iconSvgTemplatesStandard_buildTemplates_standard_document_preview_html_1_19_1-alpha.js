import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./document_preview.css";

import _implicitScopedStylesheets from "./document_preview.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39 32h22c1.12 0 2-.88 2-2v-4c0-3.25-2.75-6-6-6H43c-3.25 0-6 2.75-6 6v4c0 1.12.88 2 2 2zm33-7h-2c-.63 0-1 .37-1 1v4c0 4.37-3.62 8-8 8H39c-4.37 0-8-3.62-8-8v-4c0-.63-.37-1-1-1h-2c-3.25 0-6 2.75-6 6v43c0 3.25 2.75 6 6 6h44c3.25 0 6-2.75 6-6V31c0-3.25-2.75-6-6-6zM36.58 58.29C39.06 53.4 44.24 50 50.21 50s11.15 3.4 13.63 8.29c.16.31.16.67 0 .93-2.48 4.89-7.66 8.29-13.63 8.29s-11.15-3.4-13.63-8.29a.96.96 0 010-.93zM50.21 65c3.47 0 6.25-2.78 6.25-6.25s-2.78-6.25-6.25-6.25-6.25 2.78-6.25 6.25S46.74 65 50.21 65zm0-10c2.09 0 3.75 1.66 3.75 3.75s-1.66 3.75-3.75 3.75-3.75-1.66-3.75-3.75S48.12 55 50.21 55z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-501l92fcp2b";
freezeTemplate(tmpl);
