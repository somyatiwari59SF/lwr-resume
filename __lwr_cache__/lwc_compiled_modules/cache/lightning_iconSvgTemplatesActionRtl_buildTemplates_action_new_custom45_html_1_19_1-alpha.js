import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom45.css";

import _implicitScopedStylesheets from "./new_custom45.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M13.2 20.8h25.5v10.5H13.2z"${3}/><path d="M50 19.5v-4c0-2.5-2-4.5-4.5-4.5h-39C4 11 2 13 2 15.5v4c0 .5.3 1.1.8 1.3 1.8 1.1 3 3 3 5.2s-1.2 4.1-3 5.2c-.5.2-.8.7-.8 1.2v4.1C2 39 4 41 6.5 41h39c2.5 0 4.5-2 4.5-4.5v-4c0-.5-.3-1.1-.8-1.3-1.8-1.1-3-3-3-5.2s1.2-4.1 3-5.2c.5-.3.8-.7.8-1.3zm-8.2 16.3H10.2c-.8 0-1.5-.7-1.5-1.5V17.8c0-.8.7-1.5 1.5-1.5h31.5c.8 0 1.5.7 1.5 1.5v16.5c0 .8-.6 1.5-1.4 1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4r8jnohjct2";
freezeTemplate(tmpl);
