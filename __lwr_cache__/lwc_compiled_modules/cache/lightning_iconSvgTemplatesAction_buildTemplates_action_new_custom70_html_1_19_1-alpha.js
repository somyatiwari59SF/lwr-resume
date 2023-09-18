import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom70.css";

import _implicitScopedStylesheets from "./new_custom70.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M24.4 37l-9.2-9.1c-1.9-1.8-5-1.8-6.9 0l-5.8 5.7c-.6.6-.6 1.7 0 2.2L3.6 37l1.1 1.1 9.3 9.1.6.6 1.8 1.7c.6.6 1.7.6 2.3 0l5.8-5.7c1.8-1.8 1.8-4.9-.1-6.8zm-15-3.4l1.2-1.1c.6-.6 1.6-.6 2.2 0l7 6.8c.6.6.6 1.7 0 2.2l-1.2 1.1c-.6.6-1.6.6-2.2 0l-7-6.8c-.7-.6-.7-1.6 0-2.2zM19.4 25.3l7.5 7.3c.2.2.3.2.6.2l3.4-.1c.4 0 .7-.3.7-.7l.1-3c0-.4.3-.7.7-.7l3-.1c.4 0 .7-.3.7-.7l.1-3c0-.4.3-.7.7-.7l3-.1c.4 0 .7-.3.7-.7l.1-3c0-.4.3-.7.7-.7l3-.1c.4 0 .7-.3.7-.7l.1-3c0-.4.3-.6.6-.7l3.3-.5c.6-.1.9-.7.6-1.2L42.8 2.7c-.6-.8-1.7-.9-2.4-.2L19.3 23.3c-.5.5-.5 1.4.1 2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-54b45f3akl3";
freezeTemplate(tmpl);
