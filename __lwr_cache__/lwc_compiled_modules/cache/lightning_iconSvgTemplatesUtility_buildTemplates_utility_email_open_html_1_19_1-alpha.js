import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./email_open.css";

import _implicitScopedStylesheets from "./email_open.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.8 28.1c0-.8-1-1.3-1.7-.7L29.5 40.9c-1 .9-2.2 1.4-3.6 1.4s-2.6-.5-3.6-1.3L7.8 27.4c-.7-.6-1.7-.2-1.7.7-.1-.2-.1 18-.1 18 0 1.8 1.5 3.3 3.3 3.3h33.1c1.8 0 3.3-1.5 3.3-3.3v-18z"${3}/><path d="M45.6 20.6c.2-.2.3-.4.3-.6 0-.3-.1-.5-.3-.7L26.8 2c-.5-.5-1.2-.5-1.7 0L6.5 19.2c-.1.1-.1.2-.2.2v.1c0 .1-.1.2-.1.3 0 .3.1.5.3.7L25 37.7c.5.5 1.2.5 1.7 0l18.9-17.1c0 .1 0 0 0 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3eqmu751drs";
freezeTemplate(tmpl);
