import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./topic2.css";

import _implicitScopedStylesheets from "./topic2.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78.2 34.3h-7.9l3.4-13V21c0-.5-.4-1-1-1h-6.3c-.5 0-.9.4-1 .8L62 34.3H46.2l3.4-13V21c0-.5-.4-1-1-1h-6.3c-.5 0-.9.4-1 .8l-3.5 13.4H29c-.5 0-.8.3-1 .7l-1.6 6v.2c0 .5.4 1 1 1h8.3l-3.9 15.2h-8.5c-.5 0-.8.3-1 .7l-1.6 6v.2c0 .5.4 1 1 1h8l-3.4 13.2v.2c0 .5.4 1 1 1h6.3c.5 0 .9-.3 1-.8l3.5-13.7h15.7l-3.4 13.2v.2c0 .5.4 1 1 1h6.3c.5 0 .9-.3 1-.8L62.2 65h8.7c.5 0 .9-.3 1-.8l1.6-6V58c0-.5-.4-1-1-1h-8.2l3.9-15.2h8.4c.5 0 .9-.3 1-.8l1.6-6v-.2c0-.1-.5-.5-1-.5zM56 57.5H40.2l3.9-15.2h15.7L56 57.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7gh30ic4qsp";
freezeTemplate(tmpl);
