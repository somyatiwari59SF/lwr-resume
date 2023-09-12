import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apex_alt.css";

import _implicitScopedStylesheets from "./apex_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38.19 33.58H23.57c-.43 0-.81.38-.81.81v1.62c0 .43.38.81.81.81h14.62c.43 0 .81-.38.81-.81v-1.62c0-.43-.38-.81-.81-.81zM25.68 23.72l-10.51-8.39c-.32-.27-.81-.22-1.08.16l-.92 1.3c-.27.38-.16.87.16 1.14l7.47 5.96c.27.22.27.65 0 .87l-7.47 5.96c-.32.27-.43.81-.16 1.14l.92 1.41c.27.38.76.43 1.08.16l10.51-8.39c.43-.32.43-.97 0-1.3v-.02z"${3}/><path d="M42.99 8.99c-9.39-9.3-24.59-9.3-33.98 0-9.4 9.3-9.3 24.59 0 33.98 9.3 9.4 24.59 9.3 33.98 0 9.4-9.3 9.3-24.59 0-33.98zM26 43.97c-9.89 0-17.99-8.1-17.99-17.99S16.11 7.99 26 7.99s17.99 8 17.99 17.99-8 17.99-17.99 17.99z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5sbbkhtqc9u";
freezeTemplate(tmpl);
