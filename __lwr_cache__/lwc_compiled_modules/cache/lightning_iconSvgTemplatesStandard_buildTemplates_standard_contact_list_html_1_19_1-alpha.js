import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact_list.css";

import _implicitScopedStylesheets from "./contact_list.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26.3 22.7c-4.5 0-8.2 3.5-8.2 7.8v44.3c0 4.3 3.7 7.8 8.2 7.8h43.6c4.5 0 8.2-3.5 8.2-7.8V30.5c0-4.3-3.7-7.8-8.2-7.8H26.3zm10.9 18.2c0 1.4-1.2 2.6-2.7 2.6h-2.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h2.7c1.5 0 2.7 1.2 2.7 2.6v2.6zm30 0c0 1.4-1.2 2.6-2.7 2.6H45.4c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h19.1c1.5 0 2.7 1.2 2.7 2.6v2.6zM37.2 54c0 1.4-1.2 2.6-2.7 2.6h-2.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h2.7c1.5 0 2.7 1.2 2.7 2.6V54zm25 0c0 1.4-1.2 2.6-2.7 2.6H45.4c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h14.1c1.5 0 2.7 1.2 2.7 2.6V54zm-25 13c0 1.4-1.2 2.6-2.7 2.6h-2.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h2.7c1.5 0 2.7 1.2 2.7 2.6V67zm30 0c0 1.4-1.2 2.6-2.7 2.6H45.4c-1.5 0-2.7-1.2-2.7-2.6v-2.6c0-1.4 1.2-2.6 2.7-2.6h19.1c1.5 0 2.7 1.2 2.7 2.6V67z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4n57qd2pt2s";
freezeTemplate(tmpl);
