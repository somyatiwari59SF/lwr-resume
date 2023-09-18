import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom33.css";

import _implicitScopedStylesheets from "./new_custom33.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M37.2 19.3H15.5c-.8 0-1.5.7-1.5 1.5v5.9c0 .8.7 1.5 1.5 1.5h21.8c.8 0 1.5-.7 1.5-1.5v-5.9c0-.8-.7-1.5-1.6-1.5zM26.8 26c-1.3 0-2.2-1-2.2-2.2 0-1.3 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"${3}/><path d="M48.5 9h-45C2.7 9 2 9.7 2 10.5V12c0 1.6 1.3 3 3 3v26.6c0 .7.7 1.4 1.5 1.4H8c.8 0 1.5-.7 1.5-1.5V14.9h33.8v26.6c0 .8.7 1.5 1.5 1.5h1.5c.8 0 1.5-.7 1.5-1.5V14.9H47c1.6 0 3-1.3 3-3v-1.5c0-.7-.7-1.4-1.5-1.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-14b8c2lvvg7";
freezeTemplate(tmpl);
