import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom27.css";

import _implicitScopedStylesheets from "./new_custom27.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M6.5 35.6h39c.8 0 1.5-.7 1.5-1.5V10.4C47 8 45 6 42.5 6h-33C7 6 5 8 5 10.4v23.7c0 .9.7 1.5 1.5 1.5zm3-23.7c0-.8.7-1.5 1.5-1.5h30c.8 0 1.5.7 1.5 1.5v17.8c0 .8-.7 1.5-1.5 1.5H11c-.8 0-1.5-.7-1.5-1.5V11.9zM48.5 40.1H32c-.8 0-1.5.7-1.5 1.5s-.7 1.5-1.5 1.5h-6c-.8 0-1.5-.7-1.5-1.5s-.7-1.5-1.5-1.5H3.5c-.8 0-1.5.7-1.5 1.5C2 44 4 46 6.5 46h39c2.5 0 4.5-2 4.5-4.4 0-.9-.7-1.5-1.5-1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-73rrnhikal7";
freezeTemplate(tmpl);
