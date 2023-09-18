import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./follow.css";

import _implicitScopedStylesheets from "./follow.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M50.5 38H46v-4.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V38h-4.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5H40v4.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V44h4.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5z"${3}/><path d="M34 34h1c.6 0 1-.4 1-1v-1c0-2.2 1.8-4 4-4h4.5c.8 0 1.5-.7 1.5-1.5V6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v36c0 2.2 1.8 4 4 4h22.5c.9 0 1.6-.7 1.5-1.6V38c0-2.2 1.8-4 4-4zm-8-23c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H27c-.6 0-1-.4-1-1v-2zm0 8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H27c-.6 0-1-.4-1-1v-2zm-16-8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1V11zm16 26c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v2zm-15-7c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H11z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-4cl8l80gpfb";
freezeTemplate(tmpl);
