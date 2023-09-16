import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buyer_group_qualifier.css";

import _implicitScopedStylesheets from "./buyer_group_qualifier.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M76.24 52.55c-.21 0-.43.04-.62.14-.19.08-.37.21-.53.37L59.24 70.53s-.12.1-.18.12c-.06.02-.14.04-.21.04a.46.46 0 01-.35-.14l-5.48-5.38c-.14-.14-.31-.25-.51-.33-.19-.08-.39-.12-.58-.12s-.41.04-.58.12c-.19.08-.35.19-.51.33l-2.13 2.2c-.14.14-.25.31-.33.51s-.12.39-.12.58.04.41.12.58c.08.19.19.35.33.51l8.5 8.37c.49.47 1.13.72 1.79.72.35 0 .7-.08 1.03-.21s.6-.35.84-.62l18.72-20.57c.14-.16.23-.33.31-.51.08-.19.1-.39.1-.58s-.06-.39-.14-.58a1.69 1.69 0 00-.35-.49l-2.28-2.07c-.27-.27-.62-.43-.99-.45zM36.03 42.73c-1.33-2.11-2.09-4.6-2.09-7.33 0-4.6 1.93-8.5 5.03-10.84-1.17-1.95-3.1-3.2-5.81-3.2-4.48 0-6.96 3.59-6.96 7.8 0 2.26.78 4.13 2.24 5.54.86.78 1.54 1.79 1.54 2.89s-.39 2.03-2.94 3.12c-3.65 1.64-6.96 3.74-7.04 7.18 0 2.26 1.46 3.9 3.57 3.9h3.33c.55 0 1.09-.31 1.33-.78 1.62-2.96 4.64-4.84 7.2-6.08.86-.39 1.17-1.4.62-2.18h-.02zM65.61 40.7c-2.55-1.09-2.94-2.11-2.94-3.12 0-1.09.7-2.11 1.54-2.89 1.46-1.4 2.24-3.28 2.24-5.54 0-4.21-2.48-7.8-6.96-7.8-2.71 0-4.64 1.25-5.81 3.2 3.1 2.34 5.03 6.16 5.03 10.84 0 2.73-.7 5.23-2.09 7.33-.55.78-.23 1.79.62 2.26 2.55 1.25 5.58 3.12 7.2 6.08.23.47.78.78 1.33.78h3.33c2.09 0 3.57-1.64 3.57-3.9-.08-3.43-3.41-5.62-7.04-7.25h-.02z"${3}/><path d="M53.05 48.19c-2.79-1.17-3.18-2.26-3.18-3.43s.78-2.34 1.7-3.2c1.62-1.48 2.55-3.67 2.55-6.16 0-4.6-2.79-8.58-7.74-8.58s-7.74 3.98-7.74 8.58c0 2.5.94 4.6 2.55 6.16.94.86 1.7 2.03 1.7 3.2s-.47 2.26-3.18 3.43c-4.17 1.72-8.05 3.74-8.13 7.49 0 2.5 1.77 4.68 4.09 4.68h21.22c2.32 0 4.09-2.18 4.09-4.68-.08-3.74-3.94-5.77-7.98-7.49h.04z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6cjquo78ppn";
freezeTemplate(tmpl);
