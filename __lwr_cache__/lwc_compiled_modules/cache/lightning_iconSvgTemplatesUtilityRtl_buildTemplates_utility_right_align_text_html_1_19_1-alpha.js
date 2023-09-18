import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./right_align_text.css";

import _implicitScopedStylesheets from "./right_align_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.5 5h-41C4.7 5 4 5.7 4 6.5v3c0 .8.7 1.5 1.5 1.5h41c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM46.5 17h-33c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h33c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM46.5 41h-33c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h33c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM46.5 29h-41c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h41c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5bnouqog414";
freezeTemplate(tmpl);
