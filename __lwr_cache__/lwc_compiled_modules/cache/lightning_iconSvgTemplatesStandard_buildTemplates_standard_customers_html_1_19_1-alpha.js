import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customers.css";

import _implicitScopedStylesheets from "./customers.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><ellipse cx="41.3" cy="42.3" rx="12.2" ry="13.5"${3}/><path d="M52.6 57.4c-3.1 2.8-7 4.5-11.3 4.5-4.3 0-8.3-1.7-11.3-4.6C24.5 59.8 19 63 19 68v2.1c0 2.5 2 4.5 4.5 4.5h35.7c2.5 0 4.5-2 4.5-4.5V68c-.1-5-5.5-8.1-11.1-10.6zM68 47.4c-.2-.1-.3-.2-.5-.3-.4-.2-.9-.2-1.3.1-2.1 1.3-4.6 2.1-7.2 2.1h-1c-.5 1.3-1 2.6-1.7 3.7.4.2.9.3 1.4.6 5.7 2.5 9.7 5.6 12.5 9.8H75c2.2 0 4-1.8 4-4v-1.9c0-4.9-5.7-7.9-11-10.1zM66.9 34.2c0-4.9-3.6-8.9-7.9-8.9-2.2 0-4.1 1-5.6 2.5 3.5 3.6 5.7 8.7 5.7 14.4v.8c4.3 0 7.8-3.9 7.8-8.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5q1f9f53747";
freezeTemplate(tmpl);
