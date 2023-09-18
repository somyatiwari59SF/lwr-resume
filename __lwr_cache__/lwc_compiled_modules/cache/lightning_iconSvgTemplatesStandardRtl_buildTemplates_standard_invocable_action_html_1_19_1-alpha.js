import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./invocable_action.css";

import _implicitScopedStylesheets from "./invocable_action.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M62.8 71.2V79c0 .6.5 1.1 1.1 1.1.2 0 .5-.1.6-.2l15.1-12.3c.2-.2.3-.5.3-.8 0-.3-.2-.6-.4-.8L64.4 53.1c-.1-.1-.3-.1-.5-.1-.6 0-1.1.5-1.1 1.1v8.3c-9.3 2.5-16.9-5.7-16.9-5.7-.2-.2-.5-.3-.8-.3-.6 0-1.1.5-1.1 1.1v.2c3.8 15.7 18.8 13.5 18.8 13.5z"${3}/><path d="M38.2 58.9l-.2-.7V57.3c0-3.9 3.2-7.1 7.1-7.1 1.9 0 3.6.7 5 2.1l.1.1.1.1c.9 1 3.5 3.1 6.6 4V54c0-3.9 3.2-7.1 7.1-7.1 1.5 0 2.5.4 3.2.8l.7.3.6.5 8.5 7.2c2-2 3.2-4.8 3.2-7.8 0-6.2-5-11.2-11.2-11.2h-.6v-1c0-6.2-5.1-11.3-11.3-11.3-3 0-5.6 1.1-7.6 3-1.6-4.2-5.7-7.4-10.6-7.4-6.2 0-11.3 5.1-11.3 11.3 0 2.1.6 4 1.5 5.7-5 1.2-8.6 5.6-8.6 11 0 6.1 4.7 11 10.8 11.2h7.4c-.4-.1-.4-.2-.5-.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2h1maq5g3v1";
freezeTemplate(tmpl);
