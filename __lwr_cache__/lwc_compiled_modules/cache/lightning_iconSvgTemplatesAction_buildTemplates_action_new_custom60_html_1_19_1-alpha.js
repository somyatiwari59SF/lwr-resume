import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom60.css";

import _implicitScopedStylesheets from "./new_custom60.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M50 22.2C48.1 10.8 38.1 2 26 2S3.9 10.8 2 22.2c-.1.8.7 1.3 1.3.8 1.2-1 2.7-1.6 4.5-1.6 2.2 0 4.2 1 5.4 2.6.3.4 1 .4 1.3 0 1.3-1.6 3.2-2.6 5.4-2.6s4.2 1 5.4 2.6c.3.4 1 .4 1.3 0 1.3-1.6 3.2-2.6 5.4-2.6s4.2 1 5.4 2.6c.3.4 1 .4 1.3 0 1.3-1.6 3.2-2.6 5.4-2.6 1.7 0 3.3.6 4.5 1.6.7.5 1.5 0 1.4-.8zM35.6 40.4c-1.4 0-2.4 1-2.4 2.4s-1 2.4-2.4 2.4-2.4-1-2.4-2.4V31.6c0-1.4-1-2.4-2.4-2.4s-2.4 1-2.4 2.4v11.2c0 4 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2c0-1.4-1-2.4-2.4-2.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-5s6fs7f0756";
freezeTemplate(tmpl);
