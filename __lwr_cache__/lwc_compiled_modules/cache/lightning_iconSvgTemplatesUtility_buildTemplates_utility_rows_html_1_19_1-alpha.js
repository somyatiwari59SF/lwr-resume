import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rows.css";

import _implicitScopedStylesheets from "./rows.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.5 14h-41c-.8 0-1.5-.7-1.5-1.5v-3C4 8.7 4.7 8 5.5 8h41c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5zM46.5 28.9h-41c-.8 0-1.5-.7-1.5-1.5v-3c0-.7.7-1.4 1.5-1.4h41c.8 0 1.5.7 1.5 1.5v3c0 .7-.7 1.4-1.5 1.4zM46.5 44h-41c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h41c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-29758b5h9ll";
freezeTemplate(tmpl);
