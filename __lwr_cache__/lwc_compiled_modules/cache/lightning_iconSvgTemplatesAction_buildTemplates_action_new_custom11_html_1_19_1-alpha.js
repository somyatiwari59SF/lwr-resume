import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom11.css";

import _implicitScopedStylesheets from "./new_custom11.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M27.8 3.1l6.4 13.5 14.2 2.2c1.6.2 2.2 2.3 1 3.4L39.1 32.8l2.4 14.8c.2 1.7-1.4 3-2.8 2.2l-12.7-7-12.7 7c-1.4.8-3.1-.5-2.8-2.2l2.4-14.8L2.6 22.2c-1.1-1.2-.5-3.2 1-3.4l14.2-2.2 6.4-13.5c.8-1.5 2.9-1.5 3.6 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1k58pao0iha";
freezeTemplate(tmpl);
