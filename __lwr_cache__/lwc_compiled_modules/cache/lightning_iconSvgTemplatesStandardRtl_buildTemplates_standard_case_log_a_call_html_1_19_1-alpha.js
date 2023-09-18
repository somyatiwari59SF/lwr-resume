import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case_log_a_call.css";

import _implicitScopedStylesheets from "./case_log_a_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38 30h4c.6 0 1-.4 1-1v-3h14v3c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v3c0 .6.4 1 1 1zM74 36H26c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V42c0-3.3-2.7-6-6-6zM62.3 66.1l-2.2 2.2c-.5.5-1.1.7-1.8.7-5.1-.3-9.9-2.6-13.3-6-3.4-3.4-5.7-8.2-6-13.3 0-.7.2-1.3.7-1.8l2.2-2.2c1-1 2.7-.9 3.6.2l2 2.5c.7.8.7 2 .1 2.9l-1.7 2.4c-.2.3-.2.8.1 1l3.5 3.9 3.9 3.5c.3.3.7.3 1 .1l2.4-1.7c.9-.6 2.1-.6 2.9.1l2.5 2c1 .8 1.1 2.5.1 3.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-89nfrb4m0u";
freezeTemplate(tmpl);
