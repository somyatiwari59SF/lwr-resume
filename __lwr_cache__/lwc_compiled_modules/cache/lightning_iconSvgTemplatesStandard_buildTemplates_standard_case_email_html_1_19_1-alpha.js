import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case_email.css";

import _implicitScopedStylesheets from "./case_email.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38 30h4c.6 0 1-.4 1-1v-3h14v3c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v3c0 .6.4 1 1 1zM74 36H26c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V42c0-3.3-2.7-6-6-6zM37.9 47.1h24.3c.8 0 .9.7.7 1.1L50.6 59.6c-.3.3-.8.3-1.2 0L37.2 48.3c-.5-.6 0-1.2.7-1.2zM63 64c0 1.4-1.6 3-3 3H40c-1.4 0-3-1.6-3-3V53.1c0-.6.7-.9 1.1-.5l9.6 8.9c.6.6 1.5.9 2.3.9s1.7-.3 2.3-.9l9.5-8.9c.4-.4 1.1-.2 1.1.3.1.9.1 10.8.1 11.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2dettn3gmrv";
freezeTemplate(tmpl);
