import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./yubi_key.css";

import _implicitScopedStylesheets from "./yubi_key.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M38.5 14.1h-37c-.8 0-1.5.7-1.5 1.5v21c0 .8.7 1.5 1.5 1.5h37c.8 0 1.5-.7 1.5-1.5v-21c0-.8-.7-1.5-1.5-1.5zM21 32.2c-3.4 0-6.1-2.7-6.1-6.1S17.6 20 21 20s6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1z"${3}/><path d="M50.5 18H36c-.8 0-1.5.7-1.5 1.5v13c0 .8.7 1.5 1.5 1.5h14.5c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5zm-3.4 4c.6 0 1 .4 1 1v1.9H40V22h7.1zm0 8H40v-2.7h8.1V29c0 .6-.4 1-1 1z"${3}/><circle cx="21" cy="26.1" r="1.2"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-48q3l2plik8";
freezeTemplate(tmpl);
