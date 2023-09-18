import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./logout.css";

import _implicitScopedStylesheets from "./logout.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M32.5 50H46c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H32.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h10c.8 0 1.5.7 1.5 1.5v33c0 .8-.7 1.5-1.5 1.5h-10c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5zM16 40.4c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-5.6-5.6c-.6-.6-.2-1.7.7-1.7h21.2c.8 0 1.5-.8 1.5-1.6v-3c0-.8-.7-1.4-1.5-1.4H15.2c-.9 0-1.3-1.1-.7-1.7l5.6-5.6c.6-.6.6-1.5 0-2.1L18 11.4c-.6-.6-1.5-.6-2.1 0L2.4 24.9c-.6.6-.6 1.5 0 2.1L16 40.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1c3bjdrb4v2";
freezeTemplate(tmpl);
