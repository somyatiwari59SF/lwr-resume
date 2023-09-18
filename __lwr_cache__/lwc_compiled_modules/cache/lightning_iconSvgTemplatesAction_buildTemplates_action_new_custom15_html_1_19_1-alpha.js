import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom15.css";

import _implicitScopedStylesheets from "./new_custom15.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M42 22.9c-2.8-1.2-3.2-2.2-3.2-3.4 0-1.2.8-2.2 1.8-3.1 1.7-1.5 2.6-3.6 2.6-6 0-4.5-2.8-8.4-7.9-8.4-4.3 0-7 2.9-7.7 6.6-.1.3.1.6.3.8 3.6 2.6 5.8 6.9 5.8 12.1 0 3.6-1.2 6.9-3.4 9.4-.3.4-.2 1 .3 1.3 1.4.6 3 1.4 4.6 2.2.5.3 1 .5 1.6.5H46c2.2 0 4-1.8 4-3.9v-.6c0-3.8-3.9-5.8-8-7.5z"${3}/><path d="M27.7 36.1c-3.4-1.4-3.8-2.6-3.8-4s1-2.6 2.1-3.7c1.9-1.8 3-4.2 3-7 0-5.3-3.4-9.8-9.3-9.8s-9.3 4.6-9.3 9.8c0 2.9 1 5.3 3 7 1.1 1 2.1 2.3 2.1 3.7 0 1.4-.5 2.6-3.8 4-4.9 2-9.5 4.3-9.6 8.6v.7C2 47.9 4.2 50 6.9 50h25.6c2.6 0 4.8-2.1 4.8-4.6v-.7c-.1-4.3-4.7-6.6-9.6-8.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-6g8odkiup2n";
freezeTemplate(tmpl);
