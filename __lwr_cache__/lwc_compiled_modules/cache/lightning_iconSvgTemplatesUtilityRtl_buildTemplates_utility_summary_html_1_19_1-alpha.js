import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./summary.css";

import _implicitScopedStylesheets from "./summary.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 3.5v5c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-45C2.7 2 2 2.7 2 3.5zm0 12v3c0 .8.7 1.5 1.5 1.5h35c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-35c-.8 0-1.5.7-1.5 1.5zm0 20v3c0 .8.7 1.5 1.5 1.5h35c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-35c-.8 0-1.5.7-1.5 1.5zm0 10v3c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v7c0 .8-.7 1.5-1.5 1.5h-39c-.8 0-1.5.7-1.5 1.5zm0-20v3c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v7c0 .8-.7 1.5-1.5 1.5h-39c-.8 0-1.5.7-1.5 1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4rkqtu8p7tv";
freezeTemplate(tmpl);
