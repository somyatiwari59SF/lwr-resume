import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./code_playground.css";

import _implicitScopedStylesheets from "./code_playground.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zm-45.5 6.2h43.4c1.1 0 2.1.9 2.1 2.1v3.9H26.2v-3.9c0-1.2.9-2.1 2.1-2.1zm43.4 47.6H28.3c-1.1 0-2.1-.9-2.1-2.1V38.2h47.6v33.5c0 1.2-.9 2.1-2.1 2.1z"${3}/><path d="M46.7 63.3l-6.6-6.6 6.6-6.6c.4-.4.4-1 0-1.4l-2.8-2.8c-.4-.4-1-.4-1.4 0l-7.3 7.3-1.5 1.5-1.3 1.3c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l10.2 10.2c.4.4 1 .4 1.4 0l2.8-2.8c.3-.5.3-1.1-.1-1.5zM67.7 55.9l-1.3-1.3-1.5-1.5-7.3-7.3c-.4-.4-1-.4-1.4 0l-2.8 2.8c-.4.4-.4 1 0 1.4l6.6 6.6-6.6 6.6c-.4.4-.4 1 0 1.4l2.8 2.8c.4.4 1 .4 1.4 0l10.2-10.2c.2-.2.3-.5.3-.7-.1-.1-.2-.4-.4-.6z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-2j94spiggdb";
freezeTemplate(tmpl);
