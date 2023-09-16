import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_request_line_item.css";

import _implicitScopedStylesheets from "./product_request_line_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M77.8 77.4h-37c-1.2 0-2.3-1-2.3-2.2V70.5c0-1.2 1-2.3 2.2-2.3h37c1.2 0 2.3 1 2.3 2.2V75.1c.1 1.2-.9 2.3-2.2 2.3zM26.9 77.4h-4.6c-1.2 0-2.3-1-2.3-2.2V70.5c0-1.2 1-2.3 2.2-2.3H26.9c1.2 0 2.3 1 2.3 2.2V75.1c.1 1.2-.8 2.2-2 2.3h-.3zM24.4 48.5c6.8-11.7 22.9-17 33.6-11.8l2.9 1.3c1 .5 2-.6 1.7-1.6L59.8 27c-.3-1 .3-2 1.2-2.4l3.4-1.3c.8-.4 1.7 0 2.1.8 0 .1.1.2.1.3l6.8 22.7c.3 1-.2 2.1-1.2 2.4l-22 8.6c-.8.4-1.7 0-2.1-.8 0-.1-.1-.2-.1-.3l-1.1-3.5c-.3-1 .2-2.1 1.2-2.4l9-3.6c.7-.2 1-.9.8-1.6-.1-.3-.3-.6-.6-.7l-1.7-.8c-8.3-4.1-21 .1-26 8.4-.5.8-2.3 1-3.2.6l-1.7-1.6c-.9-.4-.8-2.4-.3-3.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-14c9qool1jp";
freezeTemplate(tmpl);
