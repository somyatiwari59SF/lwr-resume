import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit.css";

import _implicitScopedStylesheets from "./edit.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M48.8 7.4l-4.2-4.2c-1.6-1.6-4.1-1.6-5.6 0l-3.3 3.3c-.4.4-.4 1 0 1.4l8.5 8.5c.4.4 1 .4 1.4 0l3.3-3.3c1.5-1.6 1.5-4.1-.1-5.7zM32.9 10.7c-.4-.4-1-.4-1.4 0L5.4 36.8 2.1 48.1c-.3 1.1.7 2.2 1.8 1.9l11.4-3.2h-.1l26.1-26.1c.4-.4.4-1 0-1.4l-8.4-8.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2tbi4rvuk78";
freezeTemplate(tmpl);
