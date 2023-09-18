import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom31.css";

import _implicitScopedStylesheets from "./new_custom31.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.4 20.7l-3.9-12C41.8 6.5 39.6 5 37.2 5H14.8c-2.4 0-4.6 1.5-5.4 3.7l-3.8 12C3.5 21.3 2 23 2 25.2v9.3c0 2 1.4 3.7 3.2 4.4v6.5c0 .9.7 1.6 1.6 1.6h6.4c.9 0 1.6-.7 1.6-1.6v-6.2h22.4v6.2c0 .9.7 1.6 1.6 1.6h6.4c.9 0 1.6-.7 1.6-1.6V39c1.8-.6 3.2-2.3 3.2-4.4v-9.3c0-2.3-1.5-4-3.6-4.6zM10 33.8c-2.2 0-4-1.7-4-3.9S7.8 26 10 26s4 1.7 4 3.9-1.8 3.9-4 3.9zm17.6-13.2H11.8c-.6 0-1-.5-.8-1l3-9.3c.1-.3.4-.5.7-.5h22.4c.3 0 .6.2.7.5l3 9.4c.2.5-.2 1-.8 1H27.6zm13.6 13.2c-2.2 0-4-1.7-4-3.9s1.8-3.9 4-3.9 4 1.7 4 3.9-1.8 3.9-4 3.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4hkgbo3o2si";
freezeTemplate(tmpl);
