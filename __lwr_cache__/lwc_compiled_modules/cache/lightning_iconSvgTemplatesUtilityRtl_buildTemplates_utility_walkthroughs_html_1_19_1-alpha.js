import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./walkthroughs.css";

import _implicitScopedStylesheets from "./walkthroughs.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M14 4.47c0-1.4.98-2.47 2.25-2.47h31.5C49.02 2 50 3.07 50 4.47v25.19c0 1.4-.98 2.47-2.25 2.47H44V10.74c0-1.4-.98-2.47-2.25-2.47H14V4.48z" fill-rule="evenodd"${3}/><path d="M4.25 14.52C2.98 14.52 2 15.59 2 16.99v25.19c0 1.4.98 2.47 2.25 2.47h10.88l2.7 4.28c.75 1.15 2.1 1.4 3.15.58.15-.17.3-.33.45-.5l3.15-4.37h11.18c1.27 0 2.25-1.07 2.25-2.47V16.98c0-1.4-.98-2.47-2.25-2.47H4.25z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4g6st5u4477";
freezeTemplate(tmpl);
