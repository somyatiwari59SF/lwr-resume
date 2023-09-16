import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./planogram.css";

import _implicitScopedStylesheets from "./planogram.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M77.4 71.5h-3.3V53.6c0-.9-.8-1.7-1.7-1.7H53.7c-.9 0-1.7.8-1.7 1.7v17.8h-5V53.6c0-.9-.8-1.7-1.7-1.7H26.6c-.9 0-1.7.8-1.7 1.7v17.8h-3.3c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h55.7c1.1 0 2-.9 2-2v-4c.1-1.1-.8-1.9-1.9-1.9zm-20.9-15h13V61h-13v-4.5zm-27.1 0h13V61h-13v-4.5zM77.4 39h-3.3V21.1c0-.9-.8-1.7-1.7-1.7H53.7c-.9 0-1.7.8-1.7 1.7V39h-5V21.1c0-.9-.8-1.7-1.7-1.7H26.6c-.9 0-1.7.8-1.7 1.7V39h-3.3c-1.1 0-2 1-2 2v4c0 1.1.9 2 2 2h55.7c1.1 0 2-.9 2-2v-4c.1-1.2-.8-2-1.9-2zM56.5 24h13v4.5h-13V24zm-27.1 0h13v4.5h-13V24z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-240dhmepflp";
freezeTemplate(tmpl);
