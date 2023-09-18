import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom61.css";

import _implicitScopedStylesheets from "./new_custom61.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M44.4 2h-3.2c-.9 0-1.6.7-1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6V3.6c0-.9-.6-1.6-1.6-1.6H30c-.9 0-1.6.7-1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6.7-1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6H14c-.9 0-1.6-.7-1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6H7.6C6.7 2 6 2.7 6 3.6v8c0 2.6 2.2 4.8 4.8 4.8h30.4c2.6 0 4.8-2.2 4.8-4.8v-8c0-.9-.7-1.6-1.6-1.6zM40.8 22.5c-.1-.8-.8-1.4-1.6-1.4H12.8c-.8 0-1.5.6-1.6 1.4L7.6 48.1c-.2 1 .6 1.8 1.6 1.8h10.3c.9 0 1.7-.7 1.7-1.6v-7.7c0-2.6 2-5 4.6-5 2.7-.1 5 2.1 5 4.8v8c0 .9.8 1.6 1.7 1.6h10.3c1 0 1.8-.9 1.6-1.8l-3.6-25.7z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-7o3f7p5q9f7";
freezeTemplate(tmpl);
