import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./kanban.css";

import _implicitScopedStylesheets from "./kanban.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M56.5 38.3c0-1-.9-1.9-1.9-1.9H43.4c-1 0-1.9.9-1.9 1.9V72c0 1 .9 1.9 1.9 1.9h11.2c1 0 1.9-.9 1.9-1.9V38.3zm-22.5 0c0-1-.9-1.9-1.9-1.9H20.9c-1 0-1.9.9-1.9 1.9V77c0 1 .9 1.9 1.9 1.9h11.2c1 0 1.9-.9 1.9-1.9V38.3zm45 0c0-1-.9-1.9-1.9-1.9H65.9c-1 0-1.9.9-1.9 1.9V67c0 1 .9 1.9 1.9 1.9h11.2c1 0 1.9-.9 1.9-1.9V38.3zm0-17.5c0-1-.9-1.9-1.9-1.9H20.9c-1 0-1.9.9-1.9 1.9V27c0 1 .9 1.9 1.9 1.9h56.2c1 0 1.9-.9 1.9-1.9v-6.2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2kl1vd549ri";
freezeTemplate(tmpl);
