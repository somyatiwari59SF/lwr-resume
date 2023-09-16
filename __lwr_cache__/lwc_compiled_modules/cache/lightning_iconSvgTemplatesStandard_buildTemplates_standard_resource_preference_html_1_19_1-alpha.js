import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_preference.css";

import _implicitScopedStylesheets from "./resource_preference.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.91 20a25.4 25.4 0 1025.18 25.5c0-13.79-11.24-25.5-25.18-25.5zM39.24 55.91a2.82 2.82 0 01-3 2.55h-1.9a1.08 1.08 0 01-1.13-1V42.83a1.08 1.08 0 011.13-1h3.77a1.08 1.08 0 011.13 1zM66.39 53c0 5.55-5.2 6.06-10.86 6.06-5.35 0-7.09-1.72-12.22-1.91a1 1 0 01-1.06-1V43.47a1.08 1.08 0 011.13-1 6.71 6.71 0 006.41-6.7V32a1.08 1.08 0 011.13-1h1.89a2.82 2.82 0 013 2.55V40a2.82 2.82 0 003 2.55h4.52a2.82 2.82 0 013 2.55z" fill-rule="evenodd"${3}/><path d="M26 64.21h-1.27A4.75 4.75 0 0020 68.95v6.31A4.74 4.74 0 0024.73 80h50.54A4.75 4.75 0 0080 75.26v-6.31a4.74 4.74 0 00-4.73-4.74h-1.54a30.15 30.15 0 01-47.72 0z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ded7n42lnd";
freezeTemplate(tmpl);
