import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact.css";

import _implicitScopedStylesheets from "./contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 35v29c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V35c0-3.3-2.7-6-6-6H26c-3.3 0-6 2.7-6 6zm28.2 23.9c.1-3 3.2-5 6.5-6.4 2.3-.9 2.6-1.8 2.6-2.8s-.6-1.9-1.4-2.6c-1.4-1.2-2.1-3-2.1-5 0-3.8 2.3-7 6.3-7s6.3 3.2 6.3 7c0 2-.8 3.8-2.1 5-.8.7-1.4 1.6-1.4 2.6s.3 1.9 2.6 2.9c3.3 1.5 6.4 3.3 6.5 6.3 0 2-1.5 4.1-3.4 4.1H51.4c-1.9 0-3.4-2.1-3.2-4.1zM28 53c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-9c-1.1 0-2-.9-2-2v-3zm0-11c0-1.1.9-2 2-2h15c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2v-3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-758uep698mk";
freezeTemplate(tmpl);
