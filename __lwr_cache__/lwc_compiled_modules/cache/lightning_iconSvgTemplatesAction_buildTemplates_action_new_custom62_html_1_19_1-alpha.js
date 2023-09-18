import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom62.css";

import _implicitScopedStylesheets from "./new_custom62.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M47.6 41.2H4.4c-1.3 0-2.4 1-2.4 2.4C2 44.9 3 46 4.4 46h43.2c1.3 0 2.4-1 2.4-2.4s-1-2.4-2.4-2.4zM5.2 36.4h27.2v-3.2c0-.9.7-1.6 1.6-1.6h8c.9 0 1.6.7 1.6 1.6v3.2h3.2c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H5.2c-.9 0-1.6.7-1.6 1.6v27.2c0 .9.7 1.6 1.6 1.6zm7.2-20.8c0-.9.7-1.6 1.6-1.6h23.2c.9 0 1.6.7 1.6 1.6v1.6c0 .9-.7 1.6-1.6 1.6H14c-.9 0-1.6-.7-1.6-1.6v-1.6zm0 9.6c0-.9.7-1.6 1.6-1.6h15.2c.9 0 1.6.7 1.6 1.6v1.6c0 .9-.7 1.6-1.6 1.6H14c-.9 0-1.6-.7-1.6-1.6v-1.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-231vgbgr9kt";
freezeTemplate(tmpl);
