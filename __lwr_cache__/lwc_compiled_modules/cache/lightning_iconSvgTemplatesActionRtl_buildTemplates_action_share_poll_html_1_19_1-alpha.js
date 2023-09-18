import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_poll.css";

import _implicitScopedStylesheets from "./share_poll.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 5.2v6.4c0 1.8 1.4 3.2 3.2 3.2h41.6c1.8 0 3.2-1.4 3.2-3.2V5.2C50 3.4 48.6 2 46.8 2H5.2C3.4 2 2 3.4 2 5.2zm3.2 6.4V5.2h20v6.4h-20zM2 22.8v6.4c0 1.8 1.4 3.2 3.2 3.2h41.6c1.8 0 3.2-1.4 3.2-3.2v-6.4c0-1.8-1.4-3.2-3.2-3.2H5.2C3.4 19.6 2 21 2 22.8zm3.2 6.4v-6.4h27.2v6.4H5.2zM2 40.4v6.4C2 48.6 3.4 50 5.2 50h41.6c1.8 0 3.2-1.4 3.2-3.2v-6.4c0-1.8-1.4-3.2-3.2-3.2H5.2c-1.8 0-3.2 1.4-3.2 3.2zm3.2 6.4v-6.4H18v6.4H5.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-64b3afr2fph";
freezeTemplate(tmpl);
