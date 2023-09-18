import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./list.css";

import _implicitScopedStylesheets from "./list.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44 13.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v3zm-42 0c0 .8.7 1.5 1.5 1.5h35c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-35C2.7 9 2 9.7 2 10.5v3zm42 14c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v3zm-38 0c0 .8.7 1.5 1.5 1.5h31c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-31c-.8 0-1.5.7-1.5 1.5v3zm38 14c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v3zm-42 0c0 .8.7 1.5 1.5 1.5h35c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-35c-.8 0-1.5.7-1.5 1.5v3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4buc2obb1n8";
freezeTemplate(tmpl);
