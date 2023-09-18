import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom56.css";

import _implicitScopedStylesheets from "./new_custom56.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M36.2 10.3c-5 5-11.1-1.1-16.7 4.5l-16.1 16c-1.8 1.8-1.8 4.8 0 6.6L9 43l5.6 5.6c1.8 1.8 4.8 1.8 6.6 0l16.2-16.1c5.6-5.6-.6-11.7 4.5-16.7l1.3-1.3c.3-.3.3-.8 0-1.1L38.7 9c-.3-.3-.8-.3-1.1 0l-1.4 1.3zm-3.9 20.5l-5.6 5.6c-.6.6-1.6.6-2.2 0L20 31.9l-4.5-4.5c-.6-.6-.6-1.6 0-2.2l5.6-5.6c.6-.6 1.6-.6 2.2 0l4.5 4.5 4.5 4.5c.7.6.7 1.6 0 2.2zM49.5 5.8l-1.7-1.7-1.7-1.7c-.6-.6-1.6-.6-2.2 0l-2.1 2.1c-.3.3-.3.8 0 1.1l4.4 4.4c.3.3.8.3 1.1 0l2.1-2c.8-.5.8-1.5.1-2.2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-1d5qq06qo04";
freezeTemplate(tmpl);
