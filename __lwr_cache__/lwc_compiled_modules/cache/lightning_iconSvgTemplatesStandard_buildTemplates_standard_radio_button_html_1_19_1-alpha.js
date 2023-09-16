import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./radio_button.css";

import _implicitScopedStylesheets from "./radio_button.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M33.5 53.1c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4-6-13.4-13.4-13.4zm0 20.9c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5c0 4.2-3.4 7.5-7.5 7.5zM66.5 53.1c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4-6-13.4-13.4-13.4zM33.5 20c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4S40.9 20 33.5 20zm0 20.9c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5zM66.5 20c-7.4 0-13.4 6-13.4 13.4s6 13.4 13.4 13.4 13.4-6 13.4-13.4S73.9 20 66.5 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1cv1ti5p1mq";
freezeTemplate(tmpl);
