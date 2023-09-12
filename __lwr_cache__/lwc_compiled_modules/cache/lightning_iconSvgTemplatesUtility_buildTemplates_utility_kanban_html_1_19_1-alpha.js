import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./kanban.css";

import _implicitScopedStylesheets from "./kanban.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M32 17.5c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v27c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-27zM14 17.5c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v31c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-31zM50 17.5c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v23c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-23zM50 3.5c0-.8-.7-1.5-1.5-1.5h-45C2.7 2 2 2.7 2 3.5v5c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5v-5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ieqdqdoapk";
freezeTemplate(tmpl);
