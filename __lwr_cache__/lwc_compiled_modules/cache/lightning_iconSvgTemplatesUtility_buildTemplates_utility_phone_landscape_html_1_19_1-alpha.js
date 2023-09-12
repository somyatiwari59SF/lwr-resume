import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./phone_landscape.css";

import _implicitScopedStylesheets from "./phone_landscape.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M52 13c0-2.2-1.8-4-4-4H4c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h44c2.2 0 4-1.8 4-4V13zM5 29c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm39 6.5c0 .8-.7 1.5-1.5 1.5h-31c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5h31c.8 0 1.5.7 1.5 1.5v19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7p4g003rjlb";
freezeTemplate(tmpl);
