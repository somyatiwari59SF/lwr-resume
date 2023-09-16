import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./datashares.css";

import _implicitScopedStylesheets from "./datashares.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M75.09 47.5H61.17c-.75 0-1.36.61-1.36 1.35v2.29c0 .75.61 1.35 1.36 1.35h13.37v7.5H25.45v-7.5h13.24c.75 0 1.36-.61 1.36-1.35v-2.29c0-.75-.61-1.35-1.36-1.35H24.91c-2.73 0-4.91 2-4.91 4.5v24.25c0 2.12 1.77 3.75 4.09 3.75h51.82c2.32 0 4.09-1.62 4.09-3.75V52c0-2.5-2.18-4.5-4.91-4.5zm-29.18 5.53V37.41H36.5c-1.36 0-2.05-1.13-1.23-1.75l13.64-15.38c.55-.37 1.36-.37 1.91 0l13.64 15.38c.82.75.14 1.75-1.23 1.75h-9.14v15.62c0 1-.95 1.88-2.05 1.88h-4.09c-1.09 0-2.05-.87-2.05-1.88z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-reodlvbg6t";
freezeTemplate(tmpl);
