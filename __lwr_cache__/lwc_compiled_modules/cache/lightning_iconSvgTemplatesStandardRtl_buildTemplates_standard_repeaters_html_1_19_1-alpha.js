import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./repeaters.css";

import _implicitScopedStylesheets from "./repeaters.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 26.9c0-1.99 1.61-3.6 3.6-3.6h52.8c1.99 0 3.6 1.61 3.6 3.6v24c0 1.99-1.61 3.6-3.6 3.6H23.6c-1.99 0-3.6-1.61-3.6-3.6v-24zm9 36c0-1.65 1.33-2.99 2.97-3H66.8c1.66 0 3 1.34 3 3s-1.34 3-3 3H32c-1.65 0-2.99-1.33-3-2.97v-.03zm10.2 7.8c-1.66 0-3 1.34-3 3s1.34 3 3 3h20.4c1.66 0 3-1.34 3-3s-1.34-3-3-3H39.2z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ne5dhvb1po";
freezeTemplate(tmpl);
