import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share.css";

import _implicitScopedStylesheets from "./share.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 31.5V46c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4h-7.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h4c.8 0 1.5.7 1.5 1.5v21c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5zm13.4-17.6c-.9 0-1.3-1.1-.7-1.7l5.6-5.6c.6-.6.5-1.5-.1-2.1L18 2.4c-.6-.6-1.5-.6-2.1 0L2.4 15.9c-.6.6-.6 1.5 0 2.1L16 31.5c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-5.5-5.6c-.6-.6-.2-1.7.7-1.7H17c7.8 0 14.2 6.2 14.9 13.7.1.7.7 1.3 1.5 1.3h3c.9 0 1.6-.8 1.5-1.6C37.1 22.9 28 14 18 14c.1 0-2.6-.1-2.6-.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-12n46b1ubhk";
freezeTemplate(tmpl);
