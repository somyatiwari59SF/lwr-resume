import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./rules.css";

import _implicitScopedStylesheets from "./rules.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2.3 26.9l8.1 8c.4.4 1.1.4 1.5 0l1.5-1.5c.4-.4.4-1.1 0-1.5l-2.6-2.5c-.4-.4-.1-1.2.5-1.2h22.1l-13.2 13c-.5.4-1.2.1-1.2-.5v-3.6c0-.6-.4-1-1-1h-2.1c-.6 0-1 .4-1 1v11.5c0 .6.4 1 1 1h11.4c.6-.1 1-.6 1-1.1v-2c0-.6-.4-1-1-1h-3.6c-.6 0-.9-.8-.5-1.2l16.1-16.1h10c.5 0 1.1-.5 1.1-1.1V25c0-.6-.4-1.1-1-1.1h-9.9L23.3 7.7c-.4-.5-.1-1.2.5-1.2h3.6c.6 0 1-.4 1-1v-2c0-.6-.5-1.1-1-1.1H16c-.6 0-1 .4-1 1V15c0 .6.4 1 1 1h2.1c.6 0 1-.4 1-1v-3.6c0-.6.8-.9 1.2-.5L33.5 24H11.4c-.6 0-.9-.8-.5-1.2l2.5-2.5c.4-.4.4-1.1 0-1.5l-1.5-1.5c-.4-.4-1.1-.4-1.5 0l-8.1 8.1c-.4.4-.4 1 0 1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2lghgms050o";
freezeTemplate(tmpl);
