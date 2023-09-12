import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./type.css";

import _implicitScopedStylesheets from "./type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M48 11H4c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2zm-2 26H6V15h40v22z"${3}/><path d="M11.2 21.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM16.9 21.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM28.4 21.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM22.6 21.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM39.9 21.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM34.1 21.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM11.2 27.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM16.9 27.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM28.4 27.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM22.6 27.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM39.9 27.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM34.1 27.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM11.2 33.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM16.9 33.8h18.2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5H16.9c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5zM39.9 33.8h1c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3arlbni6be4";
freezeTemplate(tmpl);
