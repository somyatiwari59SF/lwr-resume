import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forward_up.css";

import _implicitScopedStylesheets from "./forward_up.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M8.2 49.6l31.5-31.5c.9-.9 2.3-.2 2.3.9v18.2c0 1.1.9 2 2 2h4.2c1.1 0 2-.9 2-2L50 4.1c0-1.1-.9-2-2-2H14.8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2H33c1.2.1 1.9 1.5 1 2.4L2.6 43.9c-.8.8-.9 2-.1 2.7l2.8 2.8c.8.8 2.1 1 2.9.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ps485avc6u";
freezeTemplate(tmpl);
