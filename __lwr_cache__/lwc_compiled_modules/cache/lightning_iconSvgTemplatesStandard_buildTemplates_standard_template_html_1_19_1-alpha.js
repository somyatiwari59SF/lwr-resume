import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./template.css";

import _implicitScopedStylesheets from "./template.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zM42.3 69.1c0 .8-.8 1.4-1.6 1.4H30.4c-.8 0-1.4-.8-1.4-1.6V48.8c0-.8.8-1.4 1.6-1.4H41c.8 0 1.4.8 1.4 1.6v20.1zm28.4.2c0 .8-.8 1.4-1.6 1.4H49.9c-.8 0-1.4-.8-1.4-1.6V48.8c0-.8.8-1.4 1.6-1.4h19.3c.8 0 1.4.8 1.4 1.6v20.3zm.2-29.4c0 .8-.8 1.4-1.6 1.4H30.4c-.8 0-1.4-.8-1.4-1.6v-9c0-.8.8-1.4 1.6-1.4h38.9c.8 0 1.4.8 1.4 1.6v9z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4209tr2m38c";
freezeTemplate(tmpl);
