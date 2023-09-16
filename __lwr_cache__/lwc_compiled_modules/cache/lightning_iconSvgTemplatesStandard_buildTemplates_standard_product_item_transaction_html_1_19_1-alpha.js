import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_item_transaction.css";

import _implicitScopedStylesheets from "./product_item_transaction.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><rect x="19" y="18.92" width="60" height="16" rx="4" ry="4"${3}/><rect x="19" y="40.92" width="27" height="16" rx="4" ry="4"${3}/><rect x="19" y="62.92" width="27" height="16" rx="4" ry="4"${3}/><path d="M64.95 72.49a1.45 1.45 0 002.1 0l11.5-11.4a1.45 1.45 0 000-2.1L67 47.49a1.45 1.45 0 00-2.1 0l-2.1 2.1a1.45 1.45 0 000 2.1l3.6 3.6a1 1 0 01-.7 1.7H53.6a1.63 1.63 0 00-1.6 1.5v3A1.71 1.71 0 0053.6 63h12.15a1 1 0 01.7 1.7l-3.6 3.6a1.45 1.45 0 000 2.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6pcg3n6mh9c";
freezeTemplate(tmpl);
