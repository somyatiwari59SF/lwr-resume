import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_order.css";

import _implicitScopedStylesheets from "./work_order.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M65.2 52.2c-3.6 1.4-5 4.8-5.2 5.3-.3.7-.8.8-.8.8h-18c-.3 0-.6-.4-.8-.7-1.5-3.5-5-6.1-9-6.1-3.7 0-6.9 2-8.6 5-.2.4-.8.5-1.2.2-1-.9-1.6-2.2-1.6-3.6 0 0-.6-11.6 3.3-17.6.7-1 1.2-1.4 2.1-1.4h38c.4 0 .8 0 1.2.3 0 0 4.2 6.4 4.8 7 .5.5 1 .9 2.3 1.2.8.2 8.1 2.8 8.1 2.8.4.2.3.7.3 1.1V53c0 1.4-.4 2.7-1.4 3.6-.4.3-.9.2-1.1-.2-1.7-3-4.8-5-8.5-5-1.5 0-2.7.3-3.9.8"${3}/><circle cx="69" cy="61.1" r="4.9"${3}/><circle cx="31.5" cy="61.1" r="4.9"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6o5qkenrgsv";
freezeTemplate(tmpl);
