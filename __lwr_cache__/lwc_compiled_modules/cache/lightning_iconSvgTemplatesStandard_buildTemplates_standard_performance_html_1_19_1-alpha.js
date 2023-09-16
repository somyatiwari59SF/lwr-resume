import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./performance.css";

import _implicitScopedStylesheets from "./performance.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M30 20h-2c-3.3 0-6 3-6 6v48c0 3 2.7 6 6 6h2c1.1 0 2-.9 2-2V22c0-1.1-.9-2-2-2zM72 20H40c-1.1 0-2 .9-2 2v56c0 1.1.9 2 2 2h32c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6zm-2.2 26.8l-5.2 5.3c-.1.1-.2.4-.2.6l1.2 7.5c.1.5-.4.9-.9.7l-6.5-3.6c-.2-.1-.4-.1-.6 0l-6.5 3.6c-.5.2-1-.2-.9-.7l1.2-7.5c0-.2 0-.4-.2-.6L46 46.8c-.4-.4-.2-1 .3-1.1l7.2-1.1c.2 0 .4-.2.5-.4l3.2-6.9c.2-.5.9-.5 1.1 0l3.2 6.9c.1.2.3.3.5.4l7.2 1.1c.8.1 1 .7.6 1.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5me03bak5pb";
freezeTemplate(tmpl);
