import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./update_status.css";

import _implicitScopedStylesheets from "./update_status.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M29.8 30.6l1.6 1.6c.4.4 1 .4 1.4 0l4.6-4.7c.4-.4.6-.9.6-1.4V8c0-1.7-1.3-3-3-3H5C3.3 5 2 6.3 2 8v22c0 1.7 1.3 3 3 3h13.7c.5 0 1-.2 1.4-.6l1.7-1.7c.8-.8 1.8-1.4 2.9-1.6 1.8-.4 3.7.2 5.1 1.5zM10 14c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-2zm1 11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H11z"${3}/><path d="M49.5 27.7l-2.2-2.2c-.6-.6-1.6-.6-2.2 0L32.8 37.9c-.4.4-1.1.4-1.5 0l-4.4-4.5c-.6-.6-1.6-.6-2.2 0l-2.2 2.2c-.6.6-.6 1.6 0 2.2l8.5 8.6c.6.6 1.6.6 2.2 0L49.5 30c.7-.7.7-1.7 0-2.3z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4rb209qu41e";
freezeTemplate(tmpl);
