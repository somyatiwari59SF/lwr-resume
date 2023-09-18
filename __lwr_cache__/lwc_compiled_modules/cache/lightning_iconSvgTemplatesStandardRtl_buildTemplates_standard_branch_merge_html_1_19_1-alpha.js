import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./branch_merge.css";

import _implicitScopedStylesheets from "./branch_merge.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M74.2 71.6L78 70c1.2-.5 1.3-1.6.8-2.7-3.6-7.7-9.3-13.6-16.2-17.3 6.8-3.7 12.6-9.6 16.2-17.2.6-1.1.3-2.2-.8-2.7l-3.8-1.6c-1-.4-2.2 0-2.6 1-3.4 7-9.5 11.9-16.3 14.5-2.4.9-5.2 1.6-7.9 1.9H43V32.2c0-1-1.4-1.6-2.2-1L19.6 48.5c-.8.5-.8 1.9 0 2.5l21.2 17.7c1 .7 2.2.1 2.2-1V54.1h4.4c2.6.3 5.3.9 7.9 1.9 6.9 2.5 12.9 7.5 16.3 14.5.4 1 1.6 1.5 2.6 1.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7k0eoj6vjh7";
freezeTemplate(tmpl);
