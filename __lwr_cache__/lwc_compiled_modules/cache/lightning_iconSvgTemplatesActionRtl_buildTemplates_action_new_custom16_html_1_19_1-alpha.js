import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom16.css";

import _implicitScopedStylesheets from "./new_custom16.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M43.3 42h-.8V24.4c0-.9-.7-1.6-1.6-1.6h-1.6c-.9 0-1.6.7-1.6 1.6V42H33V24.4c0-.9-.7-1.6-1.6-1.6h-1.6c-.9 0-1.6.7-1.6 1.6V42h-4.7V24.4c0-.9-.7-1.6-1.6-1.6h-1.6c-.9 0-1.6.7-1.6 1.6V42H14V24.4c0-.9-.7-1.6-1.6-1.6h-1.6c-.9 0-1.6.7-1.6 1.6V42h-.5C6.1 42 4 44.2 4 46.8v1.6c0 .9.7 1.6 1.6 1.6h40.9c.9 0 1.6-.7 1.6-1.6v-1.6c-.1-2.6-2.2-4.8-4.8-4.8zM47.2 13.5L27.8 2.6c-.5-.4-1.2-.6-1.8-.6-.6 0-1.3.2-1.8.6L4.8 13.5c-.5.3-.8.8-.8 1.4v1.5c0 .9.7 1.6 1.6 1.6h40.9c.9 0 1.6-.7 1.6-1.6V15c-.1-.6-.4-1.2-.9-1.5zM26 14.8c-2.2 0-3.9-1.8-3.9-4s1.7-4 3.9-4 3.9 1.8 3.9 4-1.7 4-3.9 4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-7ull4hqt5ph";
freezeTemplate(tmpl);
