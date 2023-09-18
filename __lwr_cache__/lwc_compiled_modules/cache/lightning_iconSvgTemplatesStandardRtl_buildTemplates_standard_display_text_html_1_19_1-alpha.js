import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./display_text.css";

import _implicitScopedStylesheets from "./display_text.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 27.9v44.3c0 4.3 3.5 7.8 7.8 7.8h44.4c4.3 0 7.8-3.5 7.8-7.8V27.9c0-4.3-3.5-7.8-7.8-7.8H27.7c-4.3 0-7.8 3.5-7.7 7.8zm49.6 7.9c0 1.4-1.2 2.6-2.6 2.6H37.7c-1.4 0-2.5-1.2-2.5-2.6v-2.7c0-1.4 1.2-2.6 2.6-2.6H67c1.4 0 2.6 1.2 2.6 2.6v2.7zM38.8 64.5c0-1.4 1.2-2.6 2.6-2.6H67c1.4 0 2.6 1.2 2.6 2.6v2.6c0 1.4-1.2 2.6-2.6 2.6H41.3c-1.4 0-2.5-1.2-2.5-2.6v-2.6zm-8.4-15.7c0-1.4 1.2-2.6 2.6-2.6h34c1.4 0 2.6 1.2 2.6 2.6v2.6c0 1.4-1.2 2.6-2.6 2.6H32.9c-1.4 0-2.5-1.2-2.5-2.6v-2.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-24c3jt0rqh4";
freezeTemplate(tmpl);
