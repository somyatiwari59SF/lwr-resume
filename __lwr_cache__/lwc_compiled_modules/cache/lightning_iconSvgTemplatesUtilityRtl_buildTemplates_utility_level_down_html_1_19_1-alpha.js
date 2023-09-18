import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./level_down.css";

import _implicitScopedStylesheets from "./level_down.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44 22.1s.1 1.6-1.5 1.6H15.2c-.9 0-1.3-1.2-.7-1.8l5.6-5.6c.6-.6.6-1.5 0-2.1L18 12.1c-.6-.6-1.5-.6-2.1 0L2.4 25.6c-.6.6-.6 1.5 0 2.1L16 41.2c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-5.6-5.6c-.6-.7-.2-1.7.7-1.7h33.2c.7 0 1.5-.8 1.5-1.6V11.9c0-.7-.7-1.5-1.5-1.5h-3c-.8 0-1.5.8-1.5 1.5v10.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-751vlqe8763";
freezeTemplate(tmpl);
