import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom58.css";

import _implicitScopedStylesheets from "./new_custom58.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39.5 22.8c-1.4 0-2.5-1.1-2.4-2.6.1-1.3 1.2-2.2 2.6-2.2h6.9c.3 0 .6-.2.7-.4.6-1.1 1.1-2.2 1.5-3.3.2-.6-.2-1.1-.7-1.1H43c-1.3 0-2.5-1-2.6-2.2-.1-1.4 1-2.6 2.4-2.6h6.4c.5 0 .8-.3.8-.8V5.2c0-.9-.7-1.6-1.6-1.6h-8.5c-2.4 0-4.3 1.9-4.3 4.3V8c0 4.5-3 8.5-7.2 9.6V11c1.7-1 2.7-2.8 2.4-4.9-.3-2.1-2.1-3.8-4.2-4-2.9-.3-5.4 1.9-5.4 4.8 0 1.8 1 3.3 2.4 4.2v6.7c-4.2-1.1-7.2-5.1-7.2-9.6V8c0-2.4-1.9-4.3-4.3-4.3H3.6c-.9 0-1.6.7-1.6 1.6v2.4c0 .5.3.8.8.8H9c1.3 0 2.5 1 2.6 2.2.1 1.4-1 2.6-2.4 2.6H4c-.6 0-1 .6-.7 1.1.4 1 .9 2.2 1.5 3.3.2.2.4.4.7.4h6.9c1.3 0 2.5 1 2.6 2.2.1 1.4-1 2.6-2.4 2.6h-1.9c-.7 0-1.1 1-.5 1.4 3.4 2.9 7.8 4.9 13.6 4.9v18.2c0 1.3 1 2.5 2.2 2.6 1.4.1 2.6-1 2.6-2.4V29.2c5.8 0 10.2-2.1 13.6-4.9.6-.5.2-1.4-.5-1.4h-2.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2aok6obef1n";
freezeTemplate(tmpl);
