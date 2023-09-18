import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./voicemail_drop.css";

import _implicitScopedStylesheets from "./voicemail_drop.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39 14.8c-6.1 0-11.2 5-11.2 11.2 0 2.2.7 4.3 1.8 6.1h-7.2c1.2-1.8 1.8-3.8 1.8-6.1 0-6.1-5-11.2-11.2-11.2-6.1 0-11.2 5-11.2 11.2 0 6.1 5 11.2 11.2 11.2h25.9c6.1 0 11.2-5 11.2-11.2.1-6.2-4.9-11.2-11.1-11.2zM7.2 25.9c0-3.3 2.7-6 5.9-6 3.3 0 5.9 2.7 5.9 6s-2.7 6-5.9 6-5.9-2.6-5.9-6zM39 32c-3.3 0-5.9-2.7-5.9-6s2.7-6 5.9-6c3.3 0 5.9 2.7 5.9 6 .1 3.3-2.6 6-5.9 6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1cbho4suqrc";
freezeTemplate(tmpl);
