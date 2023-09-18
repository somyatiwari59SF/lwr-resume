import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom32.css";

import _implicitScopedStylesheets from "./new_custom32.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.8 14.2L30.1 24.9c-.4.2-.8.3-1.2.3-.9 0-1.8-.5-2.2-1.4-.6-1.1 0-2.6 1.1-3.2l6.2-3.5V11c0-.6-.6-1-1.2-.7L10 23.3c-.4.2-.8.3-1.2.3-.8 0-1.7-.4-2.1-1.2-.6-1.1-.2-2.6.9-3.3l3.9-2.2V3.6c.1-.9-.6-1.6-1.5-1.6H3.6C2.7 2 2 2.7 2 3.6v41.6C2 47.8 4.2 50 6.8 50H20.4c.9 0 1.6-.7 1.6-1.6v-5.6c0-.9.7-1.6 1.6-1.6h4.8c.9 0 1.6.7 1.6 1.6v5.6c0 .9.7 1.6 1.6 1.6h13.6c2.6 0 4.8-2.2 4.8-4.8V15c0-.7-.6-1.1-1.2-.8zM14 36.4c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-4.8c0-.9.7-1.6 1.6-1.6h1.6c.9 0 1.6.7 1.6 1.6v4.8zm9.6 0c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-4.8c0-.9.7-1.6 1.6-1.6H22c.9 0 1.6.7 1.6 1.6v4.8zm9.6 0c0 .9-.7 1.6-1.6 1.6H30c-.9 0-1.6-.7-1.6-1.6v-4.8c0-.9.7-1.6 1.6-1.6h1.6c.9 0 1.6.7 1.6 1.6v4.8zm9.6 0c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-4.8c0-.9.7-1.6 1.6-1.6h1.6c.9 0 1.6.7 1.6 1.6v4.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-577prihd9r";
freezeTemplate(tmpl);
