import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./news.css";

import _implicitScopedStylesheets from "./news.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78.3 26.9H31c-.9 0-1.7.8-1.7 1.7v35.2c0 1.4-1.3 2.5-2.7 2.3-1.2-.2-2-1.3-2-2.4V38.5c0-.7-.5-1.2-1.2-1.2h-1.7c-.9 0-1.7.8-1.7 1.7v29.4c0 2.5 2.1 4.6 4.6 4.6H75.4c2.5 0 4.6-2.1 4.6-4.6V28.7c0-1-.8-1.8-1.7-1.8zm-26 33.5c0 .7-.5 1.2-1.2 1.2H37.3c-.7 0-1.2-.5-1.2-1.2v-2.3c0-.7.5-1.2 1.2-1.2h13.8c.7 0 1.2.5 1.2 1.2v2.3zm0-9.2c0 .7-.5 1.2-1.2 1.2H37.3c-.7 0-1.2-.5-1.2-1.2v-2.3c0-.7.5-1.2 1.2-1.2h13.8c.7 0 1.2.5 1.2 1.2v2.3zm20.8 9.2c0 .7-.5 1.2-1.2 1.2H58.1c-.7 0-1.2-.5-1.2-1.2v-2.3c0-.7.5-1.2 1.2-1.2h13.8c.7 0 1.2.5 1.2 1.2v2.3zm0-9.2c0 .7-.5 1.2-1.2 1.2H58.1c-.7 0-1.2-.5-1.2-1.2v-2.3c0-.7.5-1.2 1.2-1.2h13.8c.7 0 1.2.5 1.2 1.2v2.3zm0-9.3c0 .7-.5 1.2-1.2 1.2H37.3c-.7 0-1.2-.5-1.2-1.2V35c0-.7.5-1.2 1.2-1.2h34.6c.7 0 1.2.5 1.2 1.2v6.9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-25pkarjjpkr";
freezeTemplate(tmpl);
