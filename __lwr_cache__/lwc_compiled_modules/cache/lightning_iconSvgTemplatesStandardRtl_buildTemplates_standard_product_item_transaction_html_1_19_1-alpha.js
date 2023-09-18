import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_item_transaction.css";

import _implicitScopedStylesheets from "./product_item_transaction.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79 22.9v8c0 2.2-1.8 4-4 4H23c-2.2 0-4-1.8-4-4v-8c0-2.2 1.8-4 4-4h52c2.2 0 4 1.8 4 4zM79 44.9v8c0 2.2-1.8 4-4 4H56c-2.2 0-4-1.8-4-4v-8c0-2.2 1.8-4 4-4h19c2.2 0 4 1.8 4 4zM79 66.9v8c0 2.2-1.8 4-4 4H56c-2.2 0-4-1.8-4-4v-8c0-2.2 1.8-4 4-4h19c2.2 0 4 1.8 4 4zM35.1 70.4l.1-.1c.5-.6.5-1.5-.1-2l-3.6-3.6c-.2-.2-.3-.4-.3-.7 0-.6.4-1 1-1h12.2c.8 0 1.5-.7 1.6-1.5v-3c-.1-.8-.8-1.5-1.6-1.5H32.3c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l3.6-3.6.1-.1c.5-.6.5-1.5-.1-2l-2.1-2.1-.1-.1c-.6-.5-1.5-.5-2 .1L19.5 59l-.1.1c-.5.6-.5 1.5.1 2L31 72.5c.6.5 1.4.5 2 0l2.1-2.1z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-31svpvbf8vp";
freezeTemplate(tmpl);
