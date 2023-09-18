import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightning_usage.css";

import _implicitScopedStylesheets from "./lightning_usage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79 20.9c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v50c0 1-.9 1.9-1.9 1.9H21c-1.1 0-2 .9-2 2v2.1c0 1.1.9 2 2 2h53c2.8 0 5-2.2 5-5v-53zM61.4 57L47.6 43.1l-7.8 7.7c-.5.6-1.3.9-2.1.9s-1.5-.3-2.1-.9L20.1 35.1c-1.2-1.1-1.2-3 0-4.2 1.1-1.2 3-1.2 4.2 0l13.5 13.7 7.7-7.7c1.1-1.2 3-1.2 4.2 0l16 15.9c1.2 1.1 1.2 3 0 4.2-.6.6-1.3.9-2.1.9s-1.6-.3-2.2-.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7l33rejvhvl";
freezeTemplate(tmpl);
