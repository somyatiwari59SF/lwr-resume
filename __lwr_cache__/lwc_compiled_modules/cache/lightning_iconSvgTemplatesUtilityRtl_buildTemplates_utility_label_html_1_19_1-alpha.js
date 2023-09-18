import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./label.css";

import _implicitScopedStylesheets from "./label.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.79 29.14l-10.93 11c-.73.81-1.77 1.29-2.86 1.31l-28.45.18c-2.43-.05-4.4-2-4.47-4.43L2 15a4.583 4.583 0 014.47-4.44l28-.17c1.02-.09 2.03.28 2.75 1l11.48 11.4a4.64 4.64 0 01.09 6.35z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-57fkmoundfn";
freezeTemplate(tmpl);
