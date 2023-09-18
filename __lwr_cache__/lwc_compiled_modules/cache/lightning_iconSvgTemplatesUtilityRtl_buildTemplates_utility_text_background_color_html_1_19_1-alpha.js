import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_background_color.css";

import _implicitScopedStylesheets from "./text_background_color.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M25.9 16l4.3 10h-9l3.9-10h.8zM48 8v36c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4h36c2.2 0 4 1.8 4 4zm-5.5 32.7L30.5 11c-.3-.6-.8-1-1.5-1h-7.1c-.6 0-1.2.4-1.4 1l-11 29.7c-.2.6.2 1.3.9 1.3h4.1c.6 0 1.2-.5 1.4-1.1l3.2-8.9h13.4l3.5 8.9c.2.6.8 1.1 1.4 1.1h4.1c.7 0 1.2-.7 1-1.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4tn49l0cpan";
freezeTemplate(tmpl);
