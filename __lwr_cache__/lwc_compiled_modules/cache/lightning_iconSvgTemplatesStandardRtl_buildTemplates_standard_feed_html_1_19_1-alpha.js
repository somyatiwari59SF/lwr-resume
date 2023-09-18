import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./feed.css";

import _implicitScopedStylesheets from "./feed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M49 72c-.4 0-.9-.1-1.4-.4-.8-.4-1.4-1.3-1.6-2.2l-7.8-31.2-6.5 14.9c-.4 1.2-1.5 1.9-2.7 1.9h-9c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h7l9.2-21.2c.5-1.2 1.7-1.9 3-1.8 1.3.1 2.4 1 2.7 2.3l7.9 31.6 10.4-23.1c.5-1.2 1.7-1.9 3-1.8 1.1.1 2.1.9 2.6 2L71 49h9c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H69c-1.2 0-2.3-.7-2.8-1.8l-3.3-7.7-11.2 24.7c-.5 1.1-1.5 1.8-2.7 1.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1jgl23vqhln";
freezeTemplate(tmpl);
