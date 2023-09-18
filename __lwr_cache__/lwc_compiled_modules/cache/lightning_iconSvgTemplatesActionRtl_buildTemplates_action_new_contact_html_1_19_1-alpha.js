import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_contact.css";

import _implicitScopedStylesheets from "./new_contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M1 14v24c0 2.8 2.2 5 5 5h40c2.7 0 5-2.3 5-5V14c0-2.8-2.3-5-5-5H6c-2.8 0-5 2.2-5 5zm23.6 19.8c.1-2.5 2.7-4.1 5.4-5.3 2-.7 2.2-1.5 2.2-2.3 0-.9-.5-1.6-1.2-2.2-1.1-.9-1.7-2.4-1.7-4.1 0-3.1 1.9-5.8 5.2-5.8s5.2 2.6 5.2 5.8c0 1.6-.6 3.1-1.7 4.1-.7.6-1.2 1.4-1.2 2.2s.3 1.6 2.2 2.4c2.7 1.2 5.3 2.7 5.4 5.2 0 1.7-1.2 3.4-2.8 3.4H27.2c-1.6 0-2.9-1.7-2.6-3.4zM7.7 28.9c0-1 .8-1.7 1.7-1.7h7.5c.9 0 1.7.8 1.7 1.7v2.5c0 1-.8 1.7-1.7 1.7H9.4c-.9 0-1.7-.8-1.7-1.7v-2.5zm-.1-6.6v-2.5c0-1 .8-1.7 1.7-1.7h12.5c.9 0 1.7.8 1.7 1.7v2.5c0 1-.8 1.7-1.7 1.7H9.4c-.9 0-1.7-.8-1.8-1.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-o1f120h2nt";
freezeTemplate(tmpl);
