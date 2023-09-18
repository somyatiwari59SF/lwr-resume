import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_request.css";

import _implicitScopedStylesheets from "./product_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M22 78.1c-1.4 0-2.4-1.1-2.3-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h37c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2H22c-.1 0-.1 0 0 0zm50.6 0c-1.2-.1-2.2-1.1-2.1-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h4.7c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2h-4.6-.2zm-27-20.5H21.9c-1.2 0-2.2-1.1-2.2-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h23.7c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2zM21.9 37.1c-1.2 0-2.2-1.1-2.2-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h14.9c1.2 0 2.2 1.1 2.2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2H21.9zm54.8 23.1h-1.9c-.8-.2-1.9-1.2-1.9-1.9.7-7.6-5.9-16.4-13.7-17.9l-1.6-.3c-.3-.1-.6 0-.8.2-.5.3-.5 1-.2 1.4l4.4 6.7v.1c.5.6.3 1.6-.4 2l-2.5 1.7H58c-.6.5-1.6.3-2-.4L45 35.6v-.1c-.5-.6-.3-1.6.4-2l16.1-10.9h.1c.6-.5 1.6-.3 2 .4l1.7 2.5v.1c.5.6.4 1.5-.3 2l-6.7 4.5c-.2.1-.4.3-.4.6-.1.6.3 1.1.8 1.2l2.7.6c10 1.9 18.4 13 17.2 23.7 0 .9-1 2.1-1.9 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-795o9ntpg5t";
freezeTemplate(tmpl);
