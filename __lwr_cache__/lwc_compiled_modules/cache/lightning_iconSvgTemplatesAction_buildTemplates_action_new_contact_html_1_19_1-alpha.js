import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_contact.css";

import _implicitScopedStylesheets from "./new_contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M46 9H6c-2.7 0-5 2.2-5 5v24c0 2.7 2.3 5 5 5h40c2.8 0 5-2.2 5-5V14c0-2.8-2.2-5-5-5zM24.8 37.2H10.4c-1.6 0-2.8-1.7-2.8-3.4.1-2.5 2.7-4 5.4-5.2 1.9-.8 2.2-1.6 2.2-2.4 0-.8-.5-1.6-1.2-2.2-1.1-1-1.7-2.5-1.7-4.1 0-3.2 1.9-5.8 5.2-5.8s5.2 2.7 5.2 5.8c0 1.7-.6 3.2-1.7 4.1-.7.6-1.2 1.3-1.2 2.2 0 .8.2 1.6 2.2 2.3 2.7 1.2 5.3 2.8 5.4 5.3.3 1.7-1 3.4-2.6 3.4zm19.5-5.8c0 .9-.8 1.7-1.7 1.7h-7.5c-.9 0-1.7-.7-1.7-1.7v-2.5c0-.9.8-1.7 1.7-1.7h7.5c.9 0 1.7.7 1.7 1.7v2.5zm0-9.1c0 .9-.8 1.7-1.7 1.7H30.2c-.9 0-1.7-.7-1.7-1.7v-2.5c0-.9.8-1.7 1.7-1.7h12.5c.9 0 1.7.7 1.7 1.7v2.5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3hceb23cu3b";
freezeTemplate(tmpl);
