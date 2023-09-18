import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./clone.css";

import _implicitScopedStylesheets from "./clone.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M46 2H18c-2.2 0-4 1.8-4 4v2.5c0 .8.7 1.5 1.5 1.5H34c4.4 0 8 3.6 8 8v18.5c0 .8.7 1.5 1.5 1.5H46c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4z"${3}/><path d="M34 14H6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4zm-4 27c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4lcnjf2k5lv";
freezeTemplate(tmpl);
