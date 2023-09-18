import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom39.css";

import _implicitScopedStylesheets from "./new_custom39.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M36.9 8.9c-.2-.6-.9-1-1.5-.9L3.1 18.4c-.8.2-1.2 1.1-1 1.9l1.3 5c.2.8 1 1.4 1.8 1.2l8.2-1.1c.2.9.6 1.8 1.2 2.5l-7 18.9c-.5 1.2.1 2.6 1.4 3 .2.1.6.2.8.2 1 0 1.9-.6 2.2-1.6l6.6-17.9c.6.2 1 .2 1.6.2s1.1-.1 1.6-.2l6.6 17.9c.3 1 1.3 1.6 2.2 1.6.2 0 .6-.1.8-.2 1.3-.5 1.9-1.8 1.4-3.1l-7-19c.9-1.2 1.4-2.7 1.4-4.3v-.1l11.3-1.6c.7-.1 1.2-.8 1-1.5L36.9 8.9zM49.9 20.2L45.5 3.8c-.3-1.3-1.7-2.1-3-1.8-1.3.3-2.1 1.7-1.8 3l4.4 16.3c.3 1.3 1.7 2.1 3 1.8 1.3-.3 2.1-1.7 1.8-2.9z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-b6ln5uufnj";
freezeTemplate(tmpl);
