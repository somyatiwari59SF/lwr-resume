import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./multi_select_checkbox.css";

import _implicitScopedStylesheets from "./multi_select_checkbox.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44 2.5H19c-2.6 0-4.7 2.1-4.7 4.7V8c0 .5.3.8.8.8h22.7c2.6 0 4.7 2.1 4.7 4.7v24.3c0 .5.3.8.8.8h.7c2.6 0 4.7-2.1 4.7-4.7V7.2c0-2.6-2.1-4.7-4.7-4.7z"${3}/><path d="M33 13.5H8c-2.6 0-4.7 2.1-4.7 4.7v26.6c0 2.6 2.1 4.7 4.7 4.7h25c2.6 0 4.7-2.1 4.7-4.7V18.2c.1-2.6-2.1-4.7-4.7-4.7zm-2 13.3l-12 12c-.5.5-1 .7-1.6.7-.5 0-1.2-.2-1.6-.7L10 33c-.5-.5-.5-1.2 0-1.6l1.6-1.6c.5-.5 1.2-.5 1.6 0l4.2 4.2 10.3-10.3c.5-.5 1.2-.5 1.6 0l1.6 1.6c.5.3.5 1.1.1 1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-q5epn64cbk";
freezeTemplate(tmpl);
