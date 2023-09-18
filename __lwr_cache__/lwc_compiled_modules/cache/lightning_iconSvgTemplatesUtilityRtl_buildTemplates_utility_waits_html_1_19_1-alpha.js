import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./waits.css";

import _implicitScopedStylesheets from "./waits.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 18.4c0-.8-.7-1.5-1.5-1.5h-21c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h14.3L26.3 41.8v.1c-.2.2-.3.5-.3.8v3c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-14l15.2-18.6c.2-.3.3-.7.3-1v-3.2zM26 6.3c0-.8-.7-1.5-1.5-1.5h-21c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h14.3L2.3 29.7v.1c-.2.2-.3.5-.3.8v3c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-14l15.2-18.6c.2-.3.3-.7.3-1V6.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3vb90l3o59u";
freezeTemplate(tmpl);
