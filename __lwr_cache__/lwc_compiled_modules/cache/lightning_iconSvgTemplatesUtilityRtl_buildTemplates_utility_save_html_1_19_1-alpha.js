import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./save.css";

import _implicitScopedStylesheets from "./save.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37.1 4v13.6c0 1-.8 1.9-1.9 1.9H13.9c-1 0-1.9-.8-1.9-1.9V4H8C5.8 4 4 5.8 4 8v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V11.2L40.8 4h-3.7zm7 38.1c0 1-.8 1.9-1.9 1.9H9.9c-1 0-1.9-.8-1.9-1.9V25.4c0-1 .8-1.9 1.9-1.9h32.3c1 0 1.9.8 1.9 1.9v16.7z"${3}/><path d="M24.8 13.6c0 1 .8 1.9 1.9 1.9h4.6c1 0 1.9-.8 1.9-1.9V4h-8.3l-.1 9.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2bc00ge3gkp";
freezeTemplate(tmpl);
