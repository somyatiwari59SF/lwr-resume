import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quote.css";

import _implicitScopedStylesheets from "./quote.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M35 23H17c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1zM33 32H19c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1z"${3}/><path d="M45.8 12.3l-9.6-9.2c-.8-.7-1.8-1.1-2.8-1.1H18.6c-1 0-2 .4-2.8 1.1l-9.6 9.2c-.8.8-1.2 1.8-1.2 2.9V46c0 2.2 1.8 4 4 4h34c2.2 0 4-1.8 4-4V15.2c0-1.1-.4-2.1-1.2-2.9zM26 5c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm15 37.5c0 .8-.7 1.5-1.5 1.5h-27c-.8 0-1.5-.7-1.5-1.5v-25c0-.8.7-1.5 1.5-1.5h27c.8 0 1.5.7 1.5 1.5v25z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-5e5fuqpogk7";
freezeTemplate(tmpl);
