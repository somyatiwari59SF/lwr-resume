import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./priority.css";

import _implicitScopedStylesheets from "./priority.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43 48.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-45c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v45zM3 8.5v23.2c0 .5.3 1 .8 1.3 16.7 9.4 14.7-8.2 33.9-1.8.6.3 1.3-.2 1.3-.9V7c0-.6-.4-1.2-1-1.4C18.7-1.1 20.5 16.1 4.5 7.7c-.7-.4-1.5.1-1.5.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-akcpgshsoi";
freezeTemplate(tmpl);
