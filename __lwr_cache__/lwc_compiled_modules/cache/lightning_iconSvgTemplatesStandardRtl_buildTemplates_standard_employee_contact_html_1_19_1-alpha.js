import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_contact.css";

import _implicitScopedStylesheets from "./employee_contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20.3 35.7v28.6a6 6 0 006 6h47.4a6 6 0 006-6V35.7a6 6 0 00-6-6H26.2a6.06 6.06 0 00-5.9 6zm48.4 7a7.6 7.6 0 11-7.6-7.6 7.66 7.66 0 017.6 7.6zM49.4 61.8a11.45 11.45 0 0111.4-9.9h.4a11.54 11.54 0 0111.4 9.9c0 .5-.2 1.6-2 1.6H51.1c-1.5 0-1.8-1.1-1.7-1.6zm-21.2-8.3a2 2 0 012-2H39a2 2 0 012 2v3a2 2 0 01-2 2h-8.8a2 2 0 01-2-2zm0-11a2 2 0 012-2H45a2 2 0 012 2v3a2 2 0 01-2 2H30.2a2 2 0 01-2-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6a91a4ngl7c";
freezeTemplate(tmpl);
