import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./package_org.css";

import _implicitScopedStylesheets from "./package_org.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.4 23H31.9l-4 4H44v6H8v-6h8.1l-4-4H7.6c-2 0-3.6 1.6-3.6 3.6V46c0 1.7 1.3 3 3 3h38c1.7 0 3-1.3 3-3V26.6c0-2-1.6-3.6-3.6-3.6z"${3}/><path d="M20.6 25.8c.8.8 2 .8 2.8 0l19-19c.4-.4.4-1 0-1.4l-2.8-2.8c-.4-.4-1-.4-1.4 0L22 18.8l-6.7-6.7c-.4-.4-1-.4-1.4 0l-2.8 2.8c-.4.4-.4 1 0 1.4l9.5 9.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2gbfc02u3ne";
freezeTemplate(tmpl);
