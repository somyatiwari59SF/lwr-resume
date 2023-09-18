import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom50.css";

import _implicitScopedStylesheets from "./new_custom50.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M47.5 31.3c-1.8.9-3.9 1.4-6.1 1.4-2.6 0-5.1-.7-7.2-1.9-.2-.2-.6-.2-.8 0-2.1 1.3-4.6 1.9-7.2 1.9s-5.1-.7-7.2-1.9c-.2-.2-.6-.2-.8 0-2.1 1.3-4.6 1.9-7.2 1.9-2.2 0-4.3-.5-6.1-1.4-.6-.3-1.2.1-1.2.7v9.8c0 1.9 1.1 3.6 2.9 4.5 4 1.8 8.3 3.1 12.9 3.7 1 .2 1.8-.6 1.8-1.6v-6.1c0-2.7 2.2-4.8 4.7-4.8h.1c2.6 0 4.7 2.2 4.7 4.8v6.1c0 1 .9 1.7 1.8 1.6 4.5-.6 8.8-1.9 12.9-3.7 1.8-.8 2.9-2.5 2.9-4.5V32c.2-.6-.4-1-.9-.7zM10.9 27.8c2.9 0 5.4-1.2 7-3.2.3-.4.9-.4 1.2 0 1.6 1.9 4.2 3.2 7 3.2 2.9 0 5.4-1.2 7-3.2.3-.4.9-.4 1.2 0 1.6 1.9 4.2 3.2 7 3.2 4.5 0 8.3-3.2 8.7-7.1.1-.6-.2-1.1-.6-1.5L29 3c-1.8-1.4-4.3-1.4-5.9 0L2.6 19.2c-.4.3-.6.9-.6 1.5.6 4 4.4 7.1 8.9 7.1z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4hgskgdhdp8";
freezeTemplate(tmpl);
