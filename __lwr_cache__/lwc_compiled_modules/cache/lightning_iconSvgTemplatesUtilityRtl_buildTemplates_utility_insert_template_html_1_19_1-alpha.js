import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./insert_template.css";

import _implicitScopedStylesheets from "./insert_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 39.5v3c0 .8.7 1.5 1.5 1.5H8v4.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V44h4.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H14v-4.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V38H3.5c-.8 0-1.5.7-1.5 1.5zM18 34h4.5c.8 0 1.5.7 1.5 1.5V38h22c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H18c-2.2 0-4 1.8-4 4v22h2.5c.8 0 1.5.7 1.5 1.5V34zM36 9c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V9zM24 25c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H25c-.6 0-1-.4-1-1v-2zm-4-8c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H21c-.6 0-1-.4-1-1v-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7sv5v7cmr61";
freezeTemplate(tmpl);
