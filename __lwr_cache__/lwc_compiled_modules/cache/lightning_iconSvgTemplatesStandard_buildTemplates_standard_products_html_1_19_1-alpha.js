import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./products.css";

import _implicitScopedStylesheets from "./products.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M57.6 67.4h7.7a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9h-7.7a1.78 1.78 0 00-1.9 1.9v31a1.78 1.78 0 001.9 1.9zM75 67.4h3.9a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9H75a1.78 1.78 0 00-1.9 1.9v31a1.84 1.84 0 001.9 1.9zM48.7 67.4a1.81 1.81 0 002-1.9v-31a1.78 1.78 0 00-1.9-1.9h-.1a1.78 1.78 0 00-1.9 1.9v31a1.73 1.73 0 001.9 1.9zM37.8 67.4h1.9a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9h-1.9a1.78 1.78 0 00-1.9 1.9v31a1.73 1.73 0 001.9 1.9zM21.1 67.4h7.7a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9h-7.7a1.78 1.78 0 00-1.9 1.9v31a1.84 1.84 0 001.9 1.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3nuao7jf4tp";
freezeTemplate(tmpl);
