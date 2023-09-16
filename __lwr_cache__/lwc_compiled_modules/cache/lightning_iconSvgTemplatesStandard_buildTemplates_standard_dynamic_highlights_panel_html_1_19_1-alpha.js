import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dynamic_highlights_panel.css";

import _implicitScopedStylesheets from "./dynamic_highlights_panel.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M77.95 38.25h-55.9c-1.09 0-2.05.9-2.05 1.94v31.65c0 2.84 2.45 5.17 5.45 5.17h49.09c3 0 5.45-2.33 5.45-5.17V40.19c0-1.03-.95-1.94-2.05-1.94zM74.99 22H25c-2.75 0-5 2.25-5 5v4.37c0 1 .87 1.87 1.87 1.87h56.25c1 0 1.87-.87 1.87-1.87V27c0-2.75-2.25-5-5-5z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ung623ii8u";
freezeTemplate(tmpl);
