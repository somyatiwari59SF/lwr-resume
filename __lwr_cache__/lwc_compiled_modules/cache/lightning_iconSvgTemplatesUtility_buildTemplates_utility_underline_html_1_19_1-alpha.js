import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./underline.css";

import _implicitScopedStylesheets from "./underline.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.5 42h-37c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h37c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM25.3 38C17.8 37.6 12 31.1 12 23.6V10c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v13.7c0 4.3 3.2 8 7.5 8.3 4.7.3 8.5-3.4 8.5-8V10c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v14c0 8-6.7 14.4-14.7 14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2r3ejfj5fs";
freezeTemplate(tmpl);
