import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_item.css";

import _implicitScopedStylesheets from "./contract_line_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M41 32V21.4c0-.8-.6-1.4-1.4-1.4-.4 0-.7.1-1 .4L25.4 33.6c-.3.3-.4.6-.4 1 0 .8.6 1.4 1.4 1.4H37c2.2 0 4-1.8 4-4zM25 44v30c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6H49c-1.1 0-2 .9-2 2v14c0 3.3-2.7 6-6 6H27c-1.1 0-2 .9-2 2zm37.3 21c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1zm0-12c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1s-3.1-1.3-3.1-3.1zm-2.2-12.8l-4.4 2.3c-.3.2-.7-.1-.6-.4l.8-4.9c0-.2 0-.3-.1-.4l-3.6-3.5c-.3-.2-.1-.6.2-.7l4.9-.7c.1 0 .2-.1.3-.2l2.2-4.5c.2-.3.6-.3.8 0l2.2 4.5c0 .1.2.2.3.2l4.9.7c.3.1.5.5.4.7l-3.6 3.5c-.1.1-.1.3-.1.4l.8 4.9c.1.3-.3.6-.6.4l-4.4-2.3c-.1-.1-.3-.1-.4 0zM33 64c0-1.1.9-2 2-2h20.3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2zm0-12c0-1.1.9-2 2-2h20.3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6dq1uiv4log";
freezeTemplate(tmpl);
