import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_template.css";

import _implicitScopedStylesheets from "./text_template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42.5 63.8v-.2c.2-3.4 3-6.1 6.5-6.1h8.4c-1.4-2.4-1.1-5.5.9-7.7l.2-.2 2-1.9c1.1-1.2 2.7-1.9 4.3-2V25c0-2.7-2.2-5-5-5H25.1c-2.7 0-5 2.2-5 5v34.8c0 2.7 2.2 5 5 5h17.4v-1zM27.6 27.7c0-.7.5-1.2 1.2-1.2h7.5c.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2h-7.5c-.7 0-1.2-.5-1.2-1.2v-3.5zm0 10.9c0-.7.5-1.2 1.2-1.2h27.3c.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2H28.9c-.7 0-1.2-.5-1.2-1.2v-3.5zm0 14.4v-3.5c0-.7.5-1.2 1.2-1.2h22.4c.7 0 1.2.5 1.2 1.2V53c0 .7-.5 1.2-1.2 1.2H28.9c-.8.1-1.3-.4-1.3-1.2z"${3}/><path d="M66.3 51.1l-.1-.1c-.6-.5-1.5-.5-2 .1l-2.1 2c-.5.6-.5 1.5 0 2l5.5 5.5c.2.2.3.4.3.7 0 .6-.4 1-1 1H49c-.8 0-1.4.6-1.5 1.4v3c.1.8.7 1.4 1.5 1.6h17.9c.2 0 .4.1.5.2.4.3.5 1 .2 1.4l-5.5 5.5c-.5.6-.5 1.5 0 2l2 2.1c.6.5 1.5.5 2 0l13.2-13.2c.5-.6.5-1.5 0-2l-13-13.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5c3cse6l9ao";
freezeTemplate(tmpl);
