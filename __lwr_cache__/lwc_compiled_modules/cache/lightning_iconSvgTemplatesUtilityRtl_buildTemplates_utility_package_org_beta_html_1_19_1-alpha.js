import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./package_org_beta.css";

import _implicitScopedStylesheets from "./package_org_beta.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.4 23h-5.8c-.4 1.5-1.1 2.8-2.1 4H44v6H8v-6h6v-4H7.6c-2 0-3.6 1.6-3.6 3.6V46c0 1.7 1.3 3 3 3h38c1.7 0 3-1.3 3-3V26.6c0-2-1.6-3.6-3.6-3.6z"${3}/><path d="M35 9.9C35 6 31.6 3 27.8 3h-8.3c-.8 0-1.5.7-1.5 1.5v21c0 .8.7 1.5 1.5 1.5H28c3.9 0 7-3.2 6.9-7.1 0-1.9-.8-3.6-2.1-4.8 1.4-1.4 2.2-3.2 2.2-5.2zM22 7h6c1.6 0 3 1.3 3 3 0 1.6-1.3 3-3 3h-6V7zm9 13c0 1.6-1.3 3-3 3h-6v-6h6c1.7 0 3 1.3 3 3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4nrllp7s3e3";
freezeTemplate(tmpl);
