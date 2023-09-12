import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product.css";

import _implicitScopedStylesheets from "./product.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M3.6 38.6h4c.88 0 1.6-.72 1.6-1.6V12.2c0-.88-.72-1.6-1.6-1.6h-4c-.88 0-1.6.72-1.6 1.6V37c0 .88.72 1.6 1.6 1.6zM48.4 10.6h-4c-.88 0-1.6.72-1.6 1.6V37c0 .88.72 1.6 1.6 1.6h4c.88 0 1.6-.72 1.6-1.6V12.2c0-.88-.72-1.6-1.6-1.6zM28.4 38.6c.88 0 1.6-.72 1.6-1.6V12.2c0-.88-.72-1.6-1.6-1.6h-4.8c-.88 0-1.6.72-1.6 1.6V37c0 .88.72 1.6 1.6 1.6h4.8zM38 38.6c.88 0 1.6-.72 1.6-1.6V12.2c0-.88-.72-1.6-1.6-1.6h-1.6c-.88 0-1.6.72-1.6 1.6V37c0 .88.72 1.6 1.6 1.6H38zM17.2 38.6c.88 0 1.6-.72 1.6-1.6V12.2c0-.88-.72-1.6-1.6-1.6h-1.6c-.88 0-1.6.72-1.6 1.6V37c0 .88.72 1.6 1.6 1.6h1.6zM48.4 43.4H3.6c-.88 0-1.6.72-1.6 1.6v1.6c0 .88.72 1.6 1.6 1.6h44.8c.88 0 1.6-.72 1.6-1.6V45c0-.88-.72-1.6-1.6-1.6zM48.4 1.8H3.6c-.88 0-1.6.72-1.6 1.6V5c0 .88.72 1.6 1.6 1.6h44.8c.88 0 1.6-.72 1.6-1.6V3.4c0-.88-.72-1.6-1.6-1.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-46rer6tl7rl";
freezeTemplate(tmpl);
