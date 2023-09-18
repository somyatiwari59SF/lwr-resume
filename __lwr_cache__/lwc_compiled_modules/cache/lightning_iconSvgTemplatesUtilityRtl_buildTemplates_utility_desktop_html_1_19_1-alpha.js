import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./desktop.css";

import _implicitScopedStylesheets from "./desktop.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M50 6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v26c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V6zm-6 22.5c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5v-19C8 8.7 8.7 8 9.5 8h33c.8 0 1.5.7 1.5 1.5v19zM33 44h-3c-.6 0-1-.4-1-1v-2c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v2c0 .6-.4 1-1 1h-3c-2.2 0-4 1.8-4 4v.5c0 .8.7 1.5 1.5 1.5h19c.8 0 1.5-.7 1.5-1.5V48c0-2.2-1.8-4-4-4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-28uqv37ovfh";
freezeTemplate(tmpl);
