import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_item.css";

import _implicitScopedStylesheets from "./product_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><rect x="19" y="18.92" width="60" height="16" rx="4" ry="4"${3}/><rect x="19" y="40.92" width="27" height="16" rx="4" ry="4"${3}/><rect x="19" y="62.92" width="27" height="16" rx="4" ry="4"${3}/><rect x="52" y="40.92" width="27" height="16" rx="4" ry="4"${3}/><rect x="52" y="62.92" width="27" height="16" rx="4" ry="4"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3dagofkv1ct";
freezeTemplate(tmpl);
