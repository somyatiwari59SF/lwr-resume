import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom91.css";

import _implicitScopedStylesheets from "./new_custom91.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M48.3 12.1c-2.4-.7-4.5-2.4-5.9-4.6-1-1.7-1.1-5.5-3.7-5.5H13.3c-2.6 0-2.6 3.8-3.7 5.5-1.7 2.6-3.8 3.3-6.4 4.8-2.6 1.5-.2 7.9.4 10.2 2.5 8.9 7.2 17.1 14.6 23 2.1 1.7 4.3 3.1 6.7 4.3 2.2 1.1 5.8-2 7.4-3.2 4.2-3 7.6-6.7 10.3-11 2.3-3.7 4.1-7.7 5.4-11.8.5-1.7 1-3.4 1.3-5.1.3-1.4 1-3.7.6-5.1-.2-.7-.9-1.3-1.6-1.5-3.7-1.1 1.1.3 0 0zm-3.5 5.6c-2.2 10.7-7.9 20.7-17.5 26.6L26 45l-1.3-.8c-11.5-7-15.9-18.3-17.5-26.6L7 16l1.4-.9c2.5-1.5 4.8-4.2 6.2-7l.6-1.4h21.6l.4 1c1.4 3 3.8 5.9 6.8 7.6l1 .6v.1l-.2 1.7z"${3}/><path d="M25.2 11.6c-1.8 0-6.3 0-7.2.8-1.5 1.4-2.4 3.4-4 4.7-1.7 1.4-.9 2.9-.3 4.8 1.1 3.4 2.6 6.6 4.7 9.6 1 1.5 2.2 3 3.6 4.2.4.4 4.1 4.1 4.1 1.8V13.2c-.1-.9-.1-1.6-.9-1.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-jan19ujbdg";
freezeTemplate(tmpl);
