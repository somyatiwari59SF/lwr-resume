import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lower_flag.css";

import _implicitScopedStylesheets from "./lower_flag.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M6.6 2h-3c-.8 0-1.5.7-1.5 1.5v45c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-45c0-.8-.7-1.5-1.5-1.5zM40.6 24.6c2.7 0 5.2.7 7.5 1.9V6.6c0-.7-.8-1.2-1.5-.8-16 8.4-14.2-8.8-33.5-2.1-.6.2-1 .8-1 1.4v23.3c0 .7.7 1.2 1.3.9 7.7-2.6 11.9-1.3 15.4.6 2.9-3.3 7.1-5.3 11.8-5.3zM31.8 34.6l6 6-6 6c-.6.6-.6 1.6 0 2.1l.7.7c.6.6 1.6.6 2.1 0l6-6 6 6c.6.6 1.6.6 2.1 0l.7-.7c.6-.6.6-1.6 0-2.1l-6-6 6-6c.6-.6.6-1.6 0-2.1l-.7-.7c-.6-.6-1.6-.6-2.1 0l-6 6-6-6c-.6-.6-1.6-.6-2.1 0l-.7.7c-.6.5-.6 1.5 0 2.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2h9c9r0tvj4";
freezeTemplate(tmpl);
