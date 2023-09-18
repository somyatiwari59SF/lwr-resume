import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit_gpt.css";

import _implicitScopedStylesheets from "./edit_gpt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M13.19 34.75l8.02 8.02c.36.36.9.36 1.26 0l20.02-20.11a.87.87 0 000-1.26l-7.93-7.93a.87.87 0 00-1.26 0L13.19 33.58c-.36.36-.36.9 0 1.17zM37.16 9.77a.87.87 0 000 1.26l7.93 7.93c.36.36.9.36 1.26 0l2.25-2.25c1.44-1.35 1.44-3.52 0-4.96l-4.24-4.24a3.598 3.598 0 00-5.14 0l-2.07 2.25h.01zM6.51 48.1c-.18.9.63 1.71 1.53 1.53l9.83-2.34c.36-.09.63-.27.81-.45l.18-.18c.18-.18.27-.81-.09-1.17l-8.11-8.11c-.36-.36-.99-.27-1.17-.09l-.18.18c-.27.27-.36.54-.45.81l-2.34 9.83h-.01z" fill-rule="evenodd"${3}/><path d="M24.45 14.16l-4.7 2.35c-1.41.7-2.55 1.85-3.26 3.26l-2.35 4.7c-.33.67-1.29.67-1.63 0l-2.35-4.7a7.293 7.293 0 00-3.26-3.26l-4.7-2.35c-.67-.33-.67-1.29 0-1.63l4.7-2.35c1.41-.7 2.55-1.85 3.26-3.26l2.35-4.7c.33-.67 1.29-.67 1.63 0l2.35 4.7c.7 1.41 1.85 2.55 3.26 3.26l4.7 2.35c.67.33.67 1.29 0 1.63z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4biv5dn6kjn";
freezeTemplate(tmpl);
