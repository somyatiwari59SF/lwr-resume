import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tollways.css";

import _implicitScopedStylesheets from "./tollways.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M32.55 8.55A17.45 17.45 0 1050 26 17.45 17.45 0 0032.55 8.55zm0 30.54A13.09 13.09 0 1145.64 26a13.1 13.1 0 01-13.09 13.09zM6.36 26a13.09 13.09 0 018.73-12.33V9.11a17.44 17.44 0 000 33.78v-4.56A13.09 13.09 0 016.36 26z"${3}/><path d="M27.09 28.91H29c0 1.05 1.33 1.94 2.91 1.94s2.91-.89 2.91-1.94-1-1.46-3.14-2-4.62-1.15-4.62-3.85a4.08 4.08 0 013.4-3.7v-2.09h2.9v2.12a4.08 4.08 0 013.4 3.7h-1.91c0-1.05-1.33-1.94-2.91-1.94S29 22 29 23.09s1 1.46 3.14 2 4.62 1.15 4.62 3.85a4.09 4.09 0 01-3.4 3.7v2.12h-2.9v-2.15a4.09 4.09 0 01-3.37-3.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7mt5inj2bmd";
freezeTemplate(tmpl);
