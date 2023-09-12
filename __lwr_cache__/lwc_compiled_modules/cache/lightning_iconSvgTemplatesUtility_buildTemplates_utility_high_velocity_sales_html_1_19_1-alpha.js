import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./high_velocity_sales.css";

import _implicitScopedStylesheets from "./high_velocity_sales.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M50 3.2c0-1-.6-1.2-.9-1.2H28.4c-1.5 0-1.5 1.5-1.5 1.5v2.9c0 1.3.8 1.6 1.2 1.6h14.4c.6.1 1.5.5 1.5 2.1v13.6c.1.4.3 1.3 1.5 1.3h3.2s1.3 0 1.3-1.5V3.2z"${3}/><path d="M37.5 15.7c.1-1-.6-1.2-.9-1.2H15.9c-1.5 0-1.5 1.5-1.5 1.5v2.9c0 1.3.8 1.6 1.2 1.6H30c.6.1 1.5.5 1.5 2.1v13.6c.1.4.3 1.3 1.5 1.3h3.2s1.3 0 1.3-1.5V15.7z"${3}/><path d="M5.3 48.8c.2.2 1 .8 2.1-.3l10.4-10.4c.3-.3 1.2-1 1.2.4v10.2c.1.4.3 1.3 1.5 1.3h3.2s1.3 0 1.3-1.5V28.2c0-1-.6-1.1-.9-1.2H3.4c-1.5 0-1.5 1.5-1.5 1.5v2.9c0 1.3.8 1.6 1.2 1.6h9.6c.4 0 1.6.1.5 1.2l-10 10.2S2 45.5 3 46.5l2.3 2.3z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2kr48fem6e8";
freezeTemplate(tmpl);
