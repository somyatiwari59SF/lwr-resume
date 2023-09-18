import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightning_component.css";

import _implicitScopedStylesheets from "./lightning_component.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M61.1 20H44.2c-2.5 0-4.7 1.5-5.6 3.8L28.1 50.9c-.8 2 .7 4.1 2.8 4.1h17.2l-6.4 22.4c-.6 2.1 2 3.5 3.4 1.8L71.4 48c1.7-1.9.3-5-2.3-5h-13l11.4-18.4c1.2-2-.2-4.6-2.6-4.6h-3.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-o60brcf6pl";
freezeTemplate(tmpl);
