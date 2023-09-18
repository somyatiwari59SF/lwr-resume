import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./panel_detail.css";

import _implicitScopedStylesheets from "./panel_detail.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M70 20H30c-5.52 0-10 4.48-10 10v40c0 5.52 4.48 10 10 10h40c5.52 0 10-4.48 10-10V30c0-5.52-4.48-10-10-10zm5 50c0 2.76-2.24 5-5 5H30c-2.76 0-5-2.24-5-5V30c0-2.76 2.24-5 5-5h40c2.76 0 5 2.24 5 5v40z"${3}/><path d="M65 40H55c-2.76 0-5 2.24-5 5v15c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V45c0-2.76-2.24-5-5-5zm0 19.17c0 .46-.37.83-.83.83h-8.33c-.46 0-.83-.37-.83-.83v-3.33c0-.46.37-.83.83-.83h8.33c.46 0 .83.37.83.83v3.33zm0-10c0 .46-.37.83-.83.83h-8.33c-.46 0-.83-.37-.83-.83v-3.33c0-.46.37-.83.83-.83h8.33c.46 0 .83.37.83.83v3.33zM67.5 30h-35a2.5 2.5 0 000 5h35a2.5 2.5 0 000-5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3gfjs93a0j";
freezeTemplate(tmpl);
