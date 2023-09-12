import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./thunder.css";

import _implicitScopedStylesheets from "./thunder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M30.349 3.077a3.704 3.704 0 00-5.222 0l-22.05 22.05a3.702 3.702 0 000 5.221L14.82 42.092a3.703 3.703 0 005.222 0l22.05-22.05a3.706 3.706 0 000-5.222L30.349 3.077zM12.177 5.009c-.522-.522-1.436-.522-1.958 0l-5.204 5.204c-.522.522-.522 1.437 0 1.958l1.958 1.958c.522.521 1.436.521 1.958 0l5.205-5.205c.522-.522.522-1.436 0-1.958l-1.959-1.957zM31.062 36.261c-.522.522-.521 1.437 0 1.958l11.363 11.389c.522.522 1.436.522 1.959 0l5.225-5.225c.521-.521.522-1.436 0-1.959L38.245 31.036c-.522-.522-1.438-.521-1.96 0l-5.223 5.225z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3skhpiqtg0o";
freezeTemplate(tmpl);
