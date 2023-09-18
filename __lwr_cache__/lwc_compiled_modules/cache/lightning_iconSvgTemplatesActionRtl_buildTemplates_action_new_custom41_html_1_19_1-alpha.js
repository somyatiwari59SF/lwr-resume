import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom41.css";

import _implicitScopedStylesheets from "./new_custom41.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.5 11h-39C4 11 2 13 2 15.4v21.2C2 39 4 41 6.5 41h39c2.5 0 4.5-2 4.5-4.4V15.4c0-2.4-2-4.4-4.5-4.4zM11.8 36.6c0-2.9-2.3-5.1-5.2-5.1v-11c2.9 0 5.2-2.3 5.2-5.1h28.5c0 2.9 2.3 5.1 5.2 5.1v11c-2.9 0-5.2 2.3-5.2 5.1H11.8z"${3}/><ellipse cx="26" cy="25.6" rx="7.5" ry="7.3"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7vmn8kk2i1b";
freezeTemplate(tmpl);
