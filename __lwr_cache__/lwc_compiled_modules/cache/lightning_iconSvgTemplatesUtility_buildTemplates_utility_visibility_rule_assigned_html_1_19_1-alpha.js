import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./visibility_rule_assigned.css";

import _implicitScopedStylesheets from "./visibility_rule_assigned.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49.79 25.15c-.2-.41-.42-.82-.64-1.22L34 40.42c6.92-2.21 12.62-7.19 15.79-13.61.28-.55.28-1.11 0-1.66zM26.88 41.64L46.6 20.17a28.1 28.1 0 00-2.8-2.97l-7.67 8.24c0 .17.01.35.01.53 0 5.56-4.41 10.03-9.94 10.14l-4.78 5.14c1.49.26 3.01.4 4.57.4.29 0 .59 0 .88-.01zm-10.25-1.71c-6.3-2.4-11.46-7.14-14.42-13.13-.28-.46-.28-1.11 0-1.66C6.54 16.38 15.58 10.29 26 10.29c5.25 0 10.16 1.55 14.28 4.2l-5.67 6.09A10.106 10.106 0 0026 15.82c-5.63 0-10.14 4.52-10.14 10.14 0 3.91 2.18 7.28 5.4 8.98l-4.63 4.98zm7.29-7.84c-2.56-.86-4.37-3.25-4.37-6.12 0-3.6 2.86-6.46 6.46-6.46 2.7 0 4.98 1.61 5.95 3.93l-8.04 8.64z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-67bvratal88";
freezeTemplate(tmpl);
