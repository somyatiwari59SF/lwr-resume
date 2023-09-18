import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./following.css";

import _implicitScopedStylesheets from "./following.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M49.5 33.6l-2.2-2.2c-.6-.6-1.6-.6-2.2 0L35.7 41c-.4.4-1.1.4-1.5 0l-4.4-4.5c-.6-.6-1.6-.6-2.2 0l-2.2 2.2c-.6.6-.6 1.6 0 2.2l8.4 8.6c.6.6 1.6.6 2.2 0l13.4-13.7c.7-.5.7-1.5.1-2.2z"${3}/><path d="M24.7 33.8c1-1 2.2-1.6 3.6-1.8 1.7-.1 3.3.4 4.5 1.6L35 36l7.2-7.4c.8-.8 1.8-1.4 2.9-1.6.5-.1.8-.5.8-1V6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v36c0 2.2 1.8 4 4 4h16.4c.9 0 1.3-1.1.7-1.7l-.5-.5c-2.1-2.2-2.1-5.7 0-7.9l2.1-2.1zM26 11c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H27c-.6 0-1-.4-1-1v-2zm0 8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H27c-.6 0-1-.4-1-1v-2zm-16-8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1V11zm8 26c0 .6-.4 1-.9 1H11c-.5 0-.9-.4-.9-1v-2c0-.6.4-1 .9-1h6.1c.5 0 .9.4.9 1v2zm-7-7c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H11z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-1nb0918jhtc";
freezeTemplate(tmpl);
