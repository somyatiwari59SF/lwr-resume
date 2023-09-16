import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./impact_strategy.css";

import _implicitScopedStylesheets from "./impact_strategy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M77 20H23c-1.66 0-3 1.34-3 3v11.9c0 1.66 1.34 3 3 3h54c1.66 0 3-1.34 3-3V23c0-1.66-1.34-3-3-3zm-22.1 9c0 2.7-2.2 4.89-4.9 4.9-2.76.05-5.04-2.14-5.1-4.9s2.14-5.04 4.9-5.1a5.01 5.01 0 015.1 4.9v.2zM77 41H23c-1.66 0-3 1.34-3 3v11.9c0 1.66 1.34 3 3 3h54c1.66 0 3-1.34 3-3V44c0-1.66-1.34-3-3-3zm-30.1 8.9c.11 2.65-1.96 4.89-4.62 5H42a5.01 5.01 0 01-5.1-4.9 5.01 5.01 0 014.9-5.1 5.01 5.01 0 015.1 4.9v.1zm15 0c.11 2.65-1.96 4.89-4.62 5H57a5.01 5.01 0 01-5.1-4.9 5.01 5.01 0 014.9-5.1 5.01 5.01 0 015.1 4.9v.1zM77 62H23c-1.66 0-3 1.34-3 3v12c0 1.66 1.34 3 3 3h54c1.66 0 3-1.34 3-3V65c0-1.66-1.34-3-3-3zm-37.1 8.9c.11 2.65-1.96 4.89-4.62 5H35a5.01 5.01 0 01-5.1-4.9 5.01 5.01 0 014.9-5.1 5.01 5.01 0 015.1 4.9v.1zm15 0c.11 2.65-1.96 4.89-4.62 5H50a5.01 5.01 0 01-5.1-4.9 5.01 5.01 0 014.9-5.1 5.01 5.01 0 015.1 4.9v.1zm15 0c.11 2.65-1.96 4.89-4.62 5H65a5.01 5.01 0 01-5.1-4.9 5.01 5.01 0 014.9-5.1 5.01 5.01 0 015.1 4.9v.1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-73llg3ionh";
freezeTemplate(tmpl);
