import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./form.css";

import _implicitScopedStylesheets from "./form.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><rect fill="none" height="4.8" rx="1.6" width="27.2" x="12.4" y="26"${3}/><rect fill="none" height="4.8" rx="1.6" width="24" x="12.4" y="35.6"${3}/><g${3}><path d="M36.4 14.8h8.48A1.09 1.09 0 0046 13.68a1 1 0 00-.32-.8L35.12 2.32a1 1 0 00-.8-.32 1.09 1.09 0 00-1.12 1.12v8.48a3.21 3.21 0 003.2 3.2z"${3}/><path d="M44.4 19.6H33.2a4.81 4.81 0 01-4.8-4.8V3.6A1.6 1.6 0 0026.8 2h-16A4.81 4.81 0 006 6.8v38.4a4.81 4.81 0 004.8 4.8h30.4a4.81 4.81 0 004.8-4.8v-24a1.6 1.6 0 00-1.6-1.6zm-32-1.6a1.62 1.62 0 011.6-1.55h6.55A1.56 1.56 0 0122.12 18v1.59a1.63 1.63 0 01-1.59 1.58H14a1.55 1.55 0 01-1.58-1.58zm24 20.77a1.6 1.6 0 01-1.6 1.6H14a1.6 1.6 0 01-1.6-1.6V37.2a1.6 1.6 0 011.6-1.6h20.8a1.6 1.6 0 011.6 1.6zm3.2-9.6A1.6 1.6 0 0138 30.8H14a1.6 1.6 0 01-1.6-1.6v-1.6A1.6 1.6 0 0114 26h24a1.6 1.6 0 011.6 1.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-32ov1d6314a";
freezeTemplate(tmpl);
