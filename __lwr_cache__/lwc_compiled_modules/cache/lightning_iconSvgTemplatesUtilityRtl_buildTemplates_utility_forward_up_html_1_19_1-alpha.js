import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forward_up.css";

import _implicitScopedStylesheets from "./forward_up.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.8 49.4l2.8-2.8c.8-.7.7-1.9-.1-2.7L18.1 12.5c-.9-.9-.2-2.3 1-2.4h18.2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H4.1c-1.1 0-2 .9-2 2l-.2 33.1c0 1.1.9 2 2 2h4.2c1.1 0 2-.9 2-2V19c0-1.1 1.4-1.8 2.3-.9l31.5 31.5c.8.8 2.1.6 2.9-.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3gok87mh5u4";
freezeTemplate(tmpl);
