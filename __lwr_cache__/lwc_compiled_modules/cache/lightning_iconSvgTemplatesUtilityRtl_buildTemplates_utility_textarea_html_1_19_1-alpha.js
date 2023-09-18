import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./textarea.css";

import _implicitScopedStylesheets from "./textarea.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.8 49.5H7.2c-2.6 0-4.7-2.1-4.7-4.7V7.2c0-2.6 2.1-4.7 4.7-4.7h37.6c2.6 0 4.7 2.1 4.7 4.7v37.6c0 2.6-2.1 4.7-4.7 4.7zm-36-39.2v31.3c0 .9.7 1.6 1.6 1.6h31.3c.9 0 1.6-.7 1.6-1.6V10.3c0-.9-.7-1.6-1.6-1.6H10.4c-.9.1-1.6.8-1.6 1.6z"${3}/><path d="M35.3 27c.8 0 1.6.7 1.6 1.6v6.8c0 .9-.7 1.6-1.6 1.6h-7.2c-.9 0-1.5-.7-1.6-1.6 0-.6.3-1 .6-1.4l1.5-1.5c1-1 2.1-1.9 3.1-2.8.7-.7 1.4-1.3 2.2-2 .2-.2.4-.4.6-.5.4-.2.6-.2.8-.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-i95s3981dl";
freezeTemplate(tmpl);
