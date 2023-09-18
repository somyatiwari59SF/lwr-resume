import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_request_line_item.css";

import _implicitScopedStylesheets from "./product_request_line_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 75.1v-4.7c0-1.2 1.1-2.2 2.3-2.2h37c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2h-37c-1.3 0-2.3-1.1-2.2-2.3zm52.8 2.3c-1.2-.1-2.1-1.1-2-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h4.7c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2H72.8zm2.8-28.9c.5.9.6 2.9-.3 3.3l-1.7 1.6c-.9.4-2.7.2-3.2-.6-5-8.3-17.7-12.5-26-8.4l-1.7.8c-.3.1-.5.4-.6.7-.2.7.1 1.4.8 1.6l9 3.6c1 .3 1.5 1.4 1.2 2.4L52 57c0 .1-.1.2-.1.3-.4.8-1.3 1.2-2.1.8l-22-8.6c-1-.3-1.5-1.4-1.2-2.4l6.8-22.7c0-.1.1-.2.1-.3.4-.8 1.3-1.2 2.1-.8l3.4 1.3c.9.4 1.5 1.4 1.2 2.4l-2.8 9.4c-.3 1 .7 2.1 1.7 1.6l2.9-1.3c10.7-5.2 26.8.1 33.6 11.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2lm21emih58";
freezeTemplate(tmpl);
