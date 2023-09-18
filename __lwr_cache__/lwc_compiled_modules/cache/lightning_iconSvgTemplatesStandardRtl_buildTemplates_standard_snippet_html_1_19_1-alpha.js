import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./snippet.css";

import _implicitScopedStylesheets from "./snippet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74.1 23.9c-12.1 0-21.3 9.4-21.3 21.4v28.8c0 1.1.9 2 2 2h22.8c1.1 0 2-.9 2-2V51.3c0-1.1-.9-2-2-2H60.8v-4c0-6.7 6.6-13.4 13.3-13.4h3.5c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-3.5zm-33.3 0c-12.1 0-21.3 9.4-21.3 21.4v28.8c0 1.1.9 2 2 2h22.8c1.1 0 2-.9 2-2V51.3c0-1.1-.9-2-2-2H27.6v-4c0-6.7 6.6-13.4 13.3-13.4h3.5c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-3.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7qg563a6c98";
freezeTemplate(tmpl);
