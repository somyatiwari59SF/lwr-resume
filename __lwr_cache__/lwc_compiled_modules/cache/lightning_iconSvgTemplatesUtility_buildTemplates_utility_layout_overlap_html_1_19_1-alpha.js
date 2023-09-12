import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./layout_overlap.css";

import _implicitScopedStylesheets from "./layout_overlap.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.29 4.82A2.83 2.83 0 018.12 2h21.64a2.83 2.83 0 012.83 2.82V10H20.35a4.23 4.23 0 00-4.23 4.24v22.58a4.23 4.23 0 004.23 4.24h12.24v6.12A2.83 2.83 0 0129.76 50H8.12a2.83 2.83 0 01-2.83-2.82zm15.06 7.53a1.89 1.89 0 00-1.88 1.89v22.58a1.89 1.89 0 001.88 1.89h24.47a1.89 1.89 0 001.89-1.89V14.24a1.89 1.89 0 00-1.89-1.89z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3auhv4r3v5c";
freezeTemplate(tmpl);
