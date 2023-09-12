import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./diamond.css";

import _implicitScopedStylesheets from "./diamond.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" clip-rule="evenodd" d="M24.4 49.2c.9.9 2.2.9 3.1 0l21.9-21.9c.9-.9.9-2.2 0-3.1L27.6 2.4c-.9-.9-2.2-.9-3.1 0L2.6 24.3c-.9.9-.9 2.2 0 3.1l21.8 21.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-rtghavneme";
freezeTemplate(tmpl);
