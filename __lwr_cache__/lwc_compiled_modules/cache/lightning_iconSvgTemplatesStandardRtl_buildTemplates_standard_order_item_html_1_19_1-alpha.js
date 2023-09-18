import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./order_item.css";

import _implicitScopedStylesheets from "./order_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M21.2 51.9L48 64.6c1.2.6 2.7.6 3.9 0l26.9-12.7c1.6-.8 1.6-2.9 0-3.7L51.9 35.5c-1.2-.6-2.7-.6-3.9 0L21.2 48.3c-1.7.7-1.7 2.9 0 3.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4hfqmiff71r";
freezeTemplate(tmpl);
