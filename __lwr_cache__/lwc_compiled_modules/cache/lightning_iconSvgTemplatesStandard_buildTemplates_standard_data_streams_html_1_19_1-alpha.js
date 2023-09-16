import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_streams.css";

import _implicitScopedStylesheets from "./data_streams.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M68.8 20.3a10.9 10.9 0 11-10.5 13.9h-.4a5 5 0 00-5 5v4.3l6.3 6.3a1.93 1.93 0 010 2.8L57.9 54a1.93 1.93 0 01-2.8 0L53 51.9v9a10.85 10.85 0 01-10.5 10.9h-.8a10.91 10.91 0 11-10.5-13.9 11 11 0 0110.5 7.9h.4a5 5 0 005-5v-8.7L45.3 54a1.93 1.93 0 01-2.8 0l-1.4-1.4a1.93 1.93 0 010-2.8l5.9-5.9v-4.7a10.85 10.85 0 0110.5-10.9h.8a10.83 10.83 0 0110.5-8zM31.2 63.9a5 5 0 00-5 5 5 5 0 0010 0 5 5 0 00-5-5zm37.6-37.7a5 5 0 00-5 5 5 5 0 1010 0 5 5 0 00-5-5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2nt7ui6mp3p";
freezeTemplate(tmpl);
