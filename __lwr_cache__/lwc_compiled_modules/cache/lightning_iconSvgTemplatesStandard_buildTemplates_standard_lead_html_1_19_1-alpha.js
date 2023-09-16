import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead.css";

import _implicitScopedStylesheets from "./lead.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><circle cx="50" cy="29" r="9"${3}/><path d="M78 44H22c-2 0-2.8 2.5-1.1 3.6L35.5 57c.7.5 1.1 1.4.8 2.2l-5.5 18.3c-.6 2 2 3.4 3.5 1.9l14.2-15c.8-.9 2.2-.9 3 0l14.2 15c1.4 1.5 4 .1 3.5-1.9l-5.5-18.3c-.2-.8.1-1.7.8-2.2l14.6-9.4c1.7-1.1.9-3.6-1.1-3.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3a4vmddss7h";
freezeTemplate(tmpl);
