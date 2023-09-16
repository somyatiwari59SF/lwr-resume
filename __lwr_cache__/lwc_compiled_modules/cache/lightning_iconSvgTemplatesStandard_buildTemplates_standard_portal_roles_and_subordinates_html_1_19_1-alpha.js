import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./portal_roles_and_subordinates.css";

import _implicitScopedStylesheets from "./portal_roles_and_subordinates.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M68 49.1c0 1.1-.9 2-2 2H47.4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2H66c1.1 0 2 .9 2 2v3zM39.4 49.1c0 1.1-.9 2-2 2H34c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3.4c1.1 0 2 .9 2 2v3z"${3}/><path d="M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zm-26.4 7.4c0-.8.8-1.4 1.6-1.4h23.4c.8 0 1.4.8 1.4 1.6v3c0 .8-.8 1.4-1.6 1.4H48.8c-.8 0-1.4-.8-1.4-1.6v-3zm-8-1.4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM29 26c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm45 46.6c0 .8-.8 1.4-1.6 1.4H68V59.1c0-1.1-.9-2-2-2H34c-1.1 0-2 .9-2 2V74h-4.6c-.8 0-1.4-.8-1.4-1.6v-33c0-.8.8-1.4 1.6-1.4h45c.8 0 1.4.8 1.4 1.6v33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7v5aujic00e";
freezeTemplate(tmpl);
