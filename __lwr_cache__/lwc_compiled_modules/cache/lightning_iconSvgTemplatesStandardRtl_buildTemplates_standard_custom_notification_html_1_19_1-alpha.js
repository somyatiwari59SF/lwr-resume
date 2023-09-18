import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom_notification.css";

import _implicitScopedStylesheets from "./custom_notification.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M53.77 21.87L50 40.11a1 1 0 001.12 1.12h19.52a2 2 0 011.62 2.87L51 79a1.85 1.85 0 01-3.5-.87l3.75-21.48c0-.75-.62-.5-1.37-.5H29.42c-1.37 0-2.37-2-1.62-3.25L50.28 21a1.86 1.86 0 013.49.87z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ghjin48iq0";
freezeTemplate(tmpl);
