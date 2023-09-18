import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./user_activation.css";

import _implicitScopedStylesheets from "./user_activation.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M27.5 16c.6-.6.6-1.5 0-2.1L16.1 2.4c-.6-.6-1.5-.6-2.1 0L2.5 13.9c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l3.6-3.6c.6-.6 1.7-.2 1.7.7v21.2c0 .8.7 1.6 1.5 1.6h3c.8 0 1.5-.9 1.5-1.6V15.2c0-.9 1.1-1.3 1.7-.7l3.6 3.6c.6.6 1.5.6 2.1 0l2.1-2.1zM49.5 36l-2.1-2c-.6-.6-1.5-.6-2.1 0l-3.6 3.6c-.6.6-1.7.2-1.7-.7V15.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.8-1.5 1.5v21.2c0 .9-1.1 1.3-1.7.7l-3.6-3.6c-.6-.6-1.5-.6-2.1 0L24.5 36c-.6.6-.6 1.5 0 2.1L36 49.6c.6.6 1.5.6 2.1 0l11.5-11.5c.5-.6.5-1.6-.1-2.1z"${3}/></g><path d="M16 46h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zM38 12h-2c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-92lomc22kf";
freezeTemplate(tmpl);
