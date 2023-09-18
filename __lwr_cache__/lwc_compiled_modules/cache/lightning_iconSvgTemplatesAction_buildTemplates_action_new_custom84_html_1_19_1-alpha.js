import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom84.css";

import _implicitScopedStylesheets from "./new_custom84.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M45.6 37.2H6.4c-1.3 0-2.4 1-2.4 2.4S5 42 6.4 42h3.1l1.3 6.8c.2.7.8 1.2 1.5 1.2h25.8c.7 0 1.3-.5 1.5-1.2l1.3-6.8h4.7c1.3 0 2.4-1 2.4-2.4s-1-2.4-2.4-2.4zM12.6 32.4h11v-4.5c-.9-.6-1.6-1.6-1.6-2.7 0-1.8 1.4-3.2 3.1-3.2 1.7 0 3.1 1.4 3.1 3.2 0 1.2-.6 2.2-1.6 2.7v4.5h11c.9 0 1.6-.7 1.6-1.6v-2.4c0-4.9-4.6-6.6-8.2-8.1-2.4-1-2.8-2-2.8-3s.7-2 1.5-2.7c1.4-1.3 2.3-3.1 2.3-5.3 0-3.9-2.5-7.4-6.9-7.4s-6.9 3.4-6.9 7.4c0 2.2.8 3.9 2.3 5.3.8.7 1.5 1.7 1.5 2.7 0 1-.4 1.9-2.8 3-3.6 1.5-8.2 3.4-8.2 8.1v2.4c.1.9.8 1.6 1.6 1.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-1fkea9rurmf";
freezeTemplate(tmpl);
