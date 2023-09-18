import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_create.css";

import _implicitScopedStylesheets from "./record_create.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M68.4 27.1c.1 0 .1 0 0 0"${3}/><g${3}><path d="M39 32h22c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2z"${3}/><path d="M72 25h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 8-8 8H39c-4.4 0-8-3.6-8-8v-4c0-.6-.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V31c0-3.3-2.7-6-6-6zm-7.3 35.2c0 .5-.5 1-1 1h-11c-.4 0-.7.3-.7.7v11c0 .5-.5 1-1 1h-2c-.5 0-1-.5-1-1v-11c0-.4-.3-.7-.7-.7h-11c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h11c.4 0 .7-.3.7-.7v-11c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v11c0 .4.3.7.7.7h11c.5 0 1 .5 1 1v2z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-7rphpel5bec";
freezeTemplate(tmpl);
