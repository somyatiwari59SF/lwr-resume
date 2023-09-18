import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./power.css";

import _implicitScopedStylesheets from "./power.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M34.4 7.7c-.7-.3-1.4.2-1.4.9v3.8c0 .7.4 1.4 1 1.7 5.3 3 8.7 9 7.9 15.7-.8 7.3-6.7 13.3-14.1 14.1C18.2 45 10 37.4 10 28c0-5.9 3.2-11.1 8-13.9.6-.3 1-1 1-1.7V8.6c0-.7-.7-1.2-1.4-.9C9.1 11.2 3.2 20 4.1 30c.9 10.3 9.1 18.7 19.4 19.9C36.7 51.3 48 41 48 28c0-9.2-5.6-17-13.6-20.3z"${3}/><path d="M29 3.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-17z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-51kmvf8o9vi";
freezeTemplate(tmpl);
