import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_cadence.css";

import _implicitScopedStylesheets from "./sales_cadence.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M61.1 63.9l.2-.2c.6-.7.6-1.9-.2-2.6l-4.8-4.8c-.3-.2-.4-.6-.4-.9 0-.7.6-1.3 1.3-1.3h20.7c1.1-.1 2-.9 2.1-2v-4c0-1.1-1-2-2.1-2H57.4c-.3 0-.7-.2-.9-.4-.5-.5-.5-1.4 0-1.9l4.8-4.8.2-.2c.6-.7.6-1.9-.2-2.6l-2.8-2.8-.2-.2c-.7-.6-1.9-.6-2.6.2L40.4 48.7l-.2.2c-.6.7-.6 1.9.2 2.6l15.3 15.2c.7.7 1.9.7 2.6 0l2.8-2.8zM30.3 50.1l6.4-6.3 4.8-4.8.2-.2c.6-.7.6-1.9-.2-2.6l-2.8-2.8-.2-.2c-.7-.6-1.9-.6-2.6.2L20.6 48.7l-.2.2c-.6.7-.6 1.9.2 2.6l15.3 15.2c.7.7 1.9.7 2.6 0l2.8-2.8.2-.2c.6-.7.6-1.9-.2-2.6l-4.8-4.8-6.2-6.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-49bp26i5vl7";
freezeTemplate(tmpl);
