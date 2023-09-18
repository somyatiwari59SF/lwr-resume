import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./waits.css";

import _implicitScopedStylesheets from "./waits.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 40.5c0-1-.9-1.9-1.9-1.9H51.9c-1 0-1.9.9-1.9 1.9v3.7c0 1 .9 1.9 1.9 1.9h17.8L50.4 69.8s0 .1-.1.1c-.2.3-.4.7-.4 1.1v3.7c0 1 .9 1.9 1.9 1.9h26.3c1 0 1.9-.9 1.9-1.9V71c0-1-.9-1.9-1.9-1.9H60.6l19-23.3c.3-.4.4-.8.3-1.3v-4z"${3}/><path d="M50 25.3c0-1-.9-1.9-1.9-1.9H21.9c-1 0-1.9.9-1.9 1.9V29c0 1 .9 1.9 1.9 1.9h17.8L20.4 54.6s0 .1-.1.1c-.2.3-.3.6-.3 1v3.7c0 1 .9 1.9 1.9 1.9h26.3c1 0 1.9-.9 1.9-1.9v-3.7c0-1-.9-1.9-1.9-1.9H30.6l19-23.3c.3-.4.4-.8.3-1.3V25.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ucedk1vvl4";
freezeTemplate(tmpl);
