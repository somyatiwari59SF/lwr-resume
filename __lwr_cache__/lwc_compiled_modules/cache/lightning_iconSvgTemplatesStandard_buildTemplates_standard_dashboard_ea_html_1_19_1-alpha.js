import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dashboard_ea.css";

import _implicitScopedStylesheets from "./dashboard_ea.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M22.5 19.7h20c1.4 0 2.5 1.1 2.5 2.5v54.9c0 1.4-1.1 2.5-2.5 2.5h-20c-1.4 0-2.5-1.1-2.5-2.5V22.2c0-1.4 1.1-2.5 2.5-2.5zM57.5 19.6h20c1.4 0 2.5 1.1 2.5 2.5V42c0 1.4-1.1 2.5-2.5 2.5h-20c-1.4 0-2.5-1.1-2.5-2.5V22.1c0-1.4 1.1-2.5 2.5-2.5zM57.5 54.6h20c1.4 0 2.5 1.1 2.5 2.5V77c0 1.4-1.1 2.5-2.5 2.5h-20c-1.4 0-2.5-1.1-2.5-2.5V57.1c0-1.3 1.1-2.5 2.5-2.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-282l999e2a6";
freezeTemplate(tmpl);
