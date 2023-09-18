import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dynamic_record_choice.css";

import _implicitScopedStylesheets from "./dynamic_record_choice.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.5 71.4V71C34.5 68.2 28 59.9 28 50c0-12.1 9.9-22 22-22s22 9.9 22 22c0 2-.3 4-.8 5.9l.9.6c.4 0 .7-.1 1.1-.1 2 0 4 .6 5.6 1.5.7-2.5 1.1-5.2 1.1-8 0-16.5-13.5-30-30-30s-30 13.5-30 30c0 15.9 12.4 28.9 28 29.9-2.6-1.8-4.4-4.9-4.4-8.4z"${3}/><path d="M56.7 53.5c1.9 0 3.7.5 5.3 1.3l1.2-.3c.5-1.4.8-2.9.8-4.5 0-7.7-6.2-13.9-13.9-13.9S36.2 42.3 36.2 50c0 6.2 4 11.4 9.6 13.3.6-5.6 5.2-9.8 10.9-9.8z"${3}/><path d="M61.6 60.8c1-1 2.4-1.7 4-1.7 2.1 0 3.9 1.1 4.9 2.8.8-.3 1.8-.6 2.8-.6 3.7 0 6.8 3.1 6.8 6.7 0 3.7-3.1 6.7-6.8 6.7-.4 0-.9 0-1.3-.1-.8 1.5-2.5 2.5-4.3 2.5-.8 0-1.5-.2-2.2-.5-.9 2-2.9 3.4-5.2 3.4-2.5 0-4.5-1.5-5.3-3.6-.3 0-.7.1-1.1.1-2.9 0-5.3-2.3-5.3-5.2 0-1.9 1-3.6 2.6-4.5-.3-.7-.5-1.5-.5-2.4 0-3.3 2.8-6 6.1-6 1.9.1 3.7 1 4.8 2.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-63dei826o0v";
freezeTemplate(tmpl);
