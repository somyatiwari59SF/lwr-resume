import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom79.css";

import _implicitScopedStylesheets from "./new_custom79.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M17.8 19.3c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2-2.3-5.2-5.2-5.2z"${3}/><path d="M47.8 35.6H33.5v-5.9H35c.8 0 1.5-.7 1.5-1.5v-4.4c0-.8-.7-1.5-1.5-1.5h-1.7C32.1 14.9 25.8 9.2 18 9 9.1 8.9 1.9 16 2 24.7 2.2 33.3 9.4 40 18.1 40h27.4v1.5c0 .8.7 1.5 1.5 1.5h1.5c.8 0 1.5-.7 1.5-1.5v-3.7c0-1.2-1-2.2-2.2-2.2zm-30-1.5c-5.4 0-9.7-4.3-9.7-9.6s4.3-9.6 9.7-9.6 9.7 4.3 9.7 9.6-4.3 9.6-9.7 9.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-5t7qatf1jf";
freezeTemplate(tmpl);
