import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist.css";

import _implicitScopedStylesheets from "./picklist.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48 41c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h44zM6 37V15h40v22H6z"${3}/><path d="M32.5 23h9.3c.3 0 .4.3.2.5l-4.6 5.3c-.2.2-.5.2-.7 0l-4.6-5.3c-.1-.2.1-.5.4-.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-49v0kgrher1";
freezeTemplate(tmpl);
