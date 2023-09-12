import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup_modal.css";

import _implicitScopedStylesheets from "./setup_modal.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.5 2h-45C2.7 2 2 2.7 2 3.5v32.4c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5V3.5c0-.8-.7-1.5-1.5-1.5z"${3}/><path d="M32 44c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"${3}/><circle cx="20" cy="46" r="4"${3}/><circle cx="8" cy="46" r="4"${3}/><circle cx="44" cy="46" r="4"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-tfotdlr63m";
freezeTemplate(tmpl);
