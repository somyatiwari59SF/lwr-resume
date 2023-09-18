import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./refresh.css";

import _implicitScopedStylesheets from "./refresh.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M3.9 5.5v18.2c0 .7.6 1.3 1.3 1.3h18.3c.8 0 1.4-.6 1.4-1.4v-3.1c0-.8-.7-1.5-1.5-1.5h-7c-.9 0-1.6-.4-1.3-1.2.3-.5.7-1 1.2-1.4 2.8-2.8 6.6-4.4 10.6-4.4 5.2 0 10.1 2.7 12.9 7.6.7 1.2 1.3 2.5 1.6 3.8 1.6 6.6-1.1 13.2-6.8 16.7-1.2.7-2.5 1.3-3.8 1.6-4.9 1.2-9.8 0-13.4-3-.6-.5-1.5-.4-2 .1l-2.1 2.1c-.6.6-.6 1.6.1 2.2 3.8 3.2 8.6 5 13.7 5 5.8 0 11.2-2.3 15.2-6.5 3.8-3.9 5.9-9.3 5.8-14.7-.1-7-3.6-13.5-9.7-17.5-2.1-1.4-4.5-2.4-7-2.9-7.2-1.4-14.2.7-19.2 5.7-.4.3-.7.6-1 1-.7.6-1.2.2-1.2-.7v-7C10 4.7 9.3 4 8.5 4h-3c-.8 0-1.5.7-1.6 1.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5e5f5dvpspa";
freezeTemplate(tmpl);
