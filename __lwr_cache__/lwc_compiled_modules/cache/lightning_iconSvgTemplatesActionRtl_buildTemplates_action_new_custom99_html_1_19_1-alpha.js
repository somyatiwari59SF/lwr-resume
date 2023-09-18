import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom99.css";

import _implicitScopedStylesheets from "./new_custom99.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.2 16.6H31.8c-.4-.9-1-1.7-1.7-2.4l5-6.4c.8-1 .6-2.5-.4-3.3-1-.8-2.6-.6-3.4.4L25.8 12c-.5 0-.9-.1-1.4-.1-.5 0-.9.1-1.3.1l-5.6-7.1c-.8-1-2.3-1.2-3.4-.4s-1.1 2.3-.3 3.3l5 6.4c-.7.7-1.3 1.5-1.7 2.4H6.8c-2.6 0-4.8 2.1-4.8 4.7v22C2 45.9 4.2 48 6.8 48h38.4c2.6 0 4.8-2.1 4.8-4.7v-22c0-2.6-2.2-4.7-4.8-4.7zm-6.4 25.1c0 .9-.7 1.6-1.6 1.6H8.4c-.9 0-1.6-.7-1.6-1.6V22.9c0-.9.7-1.6 1.6-1.6h28.8c.9 0 1.6.7 1.6 1.6v18.8zm5.6-7.8c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4zm0-7.9C43 26 42 25 42 23.7c0-1.3 1-2.4 2.4-2.4s2.4 1 2.4 2.4c0 1.3-1 2.3-2.4 2.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2qlk90qbvg7";
freezeTemplate(tmpl);
