import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dashboard_component.css";

import _implicitScopedStylesheets from "./dashboard_component.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.66 20H23.94A4 4 0 0020 23.94v19.72a4 4 0 003.94 3.94h19.72a4 4 0 003.94-3.94V23.94A4 4 0 0043.66 20zM76.06 20H56.34a4 4 0 00-3.94 3.94v19.72a4 4 0 003.94 3.94h19.72A4 4 0 0080 43.66V23.94A4 4 0 0076.06 20zM43.66 52.4H23.94A4 4 0 0020 56.34v19.72A4 4 0 0023.94 80h19.72a4 4 0 003.94-3.94V56.34a4 4 0 00-3.94-3.94zM76.06 52.4H56.34a4 4 0 00-3.94 3.94v19.72A4 4 0 0056.34 80h19.72A4 4 0 0080 76.06V56.34a4 4 0 00-3.94-3.94z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-68266adgd37";
freezeTemplate(tmpl);
