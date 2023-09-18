import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom83.css";

import _implicitScopedStylesheets from "./new_custom83.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M45.7 17.4c.3.3.8.3 1.1 0l1.1-1.1c2.7-2.7 2.8-6.9.2-9.5 0 0-3.4-3.5-3.5-3.5-2.7-2.2-6.5-1.2-8.6 1l-1.1 1.1c-.3.3-.3.8 0 1.1l10.8 10.9zM31.3 9.8c-.3-.3-.8-.3-1.1 0l-22 21.9C7 32.9 6.1 34.3 5.6 36L2.1 46.8c-.2.6-.2 1.4.2 2 .5.8 1.3 1.2 2.1 1.2.2 0 .5 0 .7-.1 0 0 7.4-2.3 11-3.4 1.6-.5 3-1.4 4.2-2.6L42.2 22c.3-.3.3-.8 0-1.1L31.3 9.8zM14.6 41.9c-1.7.6-4.3 1.4-6.6 2.1l2.1-6.6c.2-.9.7-1.6 1.4-2.2l5.4 5.4c-.7.6-1.5 1.1-2.3 1.3z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3i8mqjibajn";
freezeTemplate(tmpl);
