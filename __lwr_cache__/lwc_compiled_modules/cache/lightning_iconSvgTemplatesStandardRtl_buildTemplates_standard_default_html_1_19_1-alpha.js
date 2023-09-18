import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./default.css";

import _implicitScopedStylesheets from "./default.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path opacity=".5" d="M44.6 32.8c2.1-2.1 4.9-3.4 8.1-3.4 4.2 0 7.9 2.3 9.9 5.7 1.7-.7 3.6-1.2 5.6-1.2C75.8 34 82 40.1 82 47.6c0 7.6-6.2 13.7-13.8 13.7-.9 0-1.8-.1-2.7-.3-1.7 3-5 5.1-8.8 5.1-1.6 0-3.1-.4-4.4-1-1.8 4-5.8 6.9-10.6 6.9-5 0-9.2-3.1-10.8-7.4-.7.1-1.4.2-2.2.2-5.9 0-10.7-4.7-10.7-10.6 0-3.9 2.1-7.4 5.3-9.2-.7-1.5-1-3.1-1-4.8 0-6.7 5.6-12.2 12.4-12.2 4.1 0 7.7 1.9 9.9 4.8"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ru2s4rb2e6";
freezeTemplate(tmpl);
