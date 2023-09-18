import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./strategy.css";

import _implicitScopedStylesheets from "./strategy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46.9 18.7h-8.1c-1.8 0-3.2 1.4-3.2 3.2v2h-7.5V8.1c0-.5-.5-1-1-1H16.6V5.2c0-1.8-1.4-3.2-3.2-3.2H5.3C3.6 2 2.1 3.4 2.1 5.2v8.1c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2v-1.9H24v12.5h-7.4V22c0-1.8-1.4-3.2-3.2-3.2H5.3c-1.8 0-3.2 1.4-3.2 3.2v8c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2v-1.9H24v12.5h-7.4v-1.8c0-1.8-1.4-3.2-3.2-3.2H5.3c-1.8 0-3.2 1.4-3.2 3.2v8.1c0 1.8 1.4 3.2 3.2 3.2h8.1c1.8 0 3.2-1.4 3.2-3.2V45h10.6c.6 0 1-.6 1-1V28.2h7.5V30c0 1.8 1.4 3.2 3.2 3.2H47c1.8 0 3.2-1.4 3.2-3.2v-8.1c-.1-1.8-1.5-3.2-3.3-3.2zm-34.4-6.3H6.2V6h6.3v6.4zm0 10.4v6.3H6.2v-6.3h6.3zm0 23.2H6.2v-6.3h6.3V46zm33.6-23.2v6.3h-6.3v-6.3h6.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ub8dijdfd0";
freezeTemplate(tmpl);
