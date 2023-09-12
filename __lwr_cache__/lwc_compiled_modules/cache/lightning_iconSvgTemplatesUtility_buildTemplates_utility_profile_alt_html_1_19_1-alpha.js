import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./profile_alt.css";

import _implicitScopedStylesheets from "./profile_alt.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 2C12.75 2 2 12.75 2 26s10.75 24 24 24 24-10.75 24-24S39.25 2 26 2zm0 9c4.12 0 7.44 3.69 7.44 8.25S30.13 27.5 26 27.5s-7.44-3.69-7.44-8.25S21.87 11 26 11zm15 27c0 1.62-1.38 3-3 3H14c-1.62 0-3-1.38-3-3v-1.38c0-3.62 4.25-5.88 8.25-7.62l.38-.19c.31-.12.62-.12.94.06 1.62 1.06 3.44 1.62 5.38 1.62s3.81-.62 5.38-1.62c.31-.19.62-.19.94-.06l.38.19c4.12 1.75 8.38 3.94 8.38 7.62V38z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1m312sgrv4p";
freezeTemplate(tmpl);
