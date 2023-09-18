import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./funding_requirement.css";

import _implicitScopedStylesheets from "./funding_requirement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20.8 27.07V42.2c0 .37.25.62.63.62.13 0 .25 0 .31-.06 3.01-1.67 9.15-6.19 9.15-6.45 0-1.82.52-3.12.78-3.9.26-.78.95-1.82 1.3-2.34.35-.52.78-1.04 1.3-1.56s1.56-1.3 1.56-1.3v-8.13c0-.37-.25-.62-.63-.62-.13 0-.25 0-.31.06l-13.47 7.5c-.38.19-.63.62-.63 1.05zm-1.25-4.22l13.54-7.5c.31-.19.38-.56.19-.87-.06-.06-.13-.12-.19-.19-3.01-1.67-12.22-6.88-12.22-6.88a3.964 3.964 0 00-3.89 0s-9.21 5.15-12.22 6.88c-.31.19-.38.56-.19.87.06.06.13.12.19.19l13.54 7.5c.38.19.88.19 1.25 0zm-3.13 3.16l-13.48-7.5c-.31-.19-.69-.06-.88.25-.06.06-.06.19-.06.31v13.52c0 1.36.75 2.6 1.94 3.29 0 0 9.15 5.15 12.16 6.82.31.19.69.06.88-.25.06-.12.06-.25.06-.31V27.07c0-.43-.25-.87-.63-1.05z"${3}/><path d="M41.15 27.41c-4.9 0-8.85 3.94-8.85 8.85s3.94 8.85 8.85 8.85S50 41.17 50 36.26s-3.94-8.85-8.85-8.85zm4.94 6.64l-5.64 5.71a.58.58 0 01-.81 0l-3.1-3.13a.58.58 0 010-.81l.81-.81a.58.58 0 01.81 0l1.62 1.66c.15.15.41.15.55 0l4.13-4.28a.58.58 0 01.81 0l.81.81c.26.22.26.59 0 .85z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7cj5clt0nr9";
freezeTemplate(tmpl);
