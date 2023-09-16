import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apex.css";

import _implicitScopedStylesheets from "./apex.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78 67.5H44.4c-1 0-1.9.9-1.9 1.9v3.7c0 1 .9 1.9 1.9 1.9H78c1 0 1.9-.9 1.9-1.9v-3.7c0-1.1-.9-1.9-1.9-1.9zM49.2 44.8L25.1 25.4c-.7-.6-1.9-.5-2.5.4l-2.1 3c-.6.9-.4 2 .4 2.6L38 45.1c.6.5.6 1.5 0 2L20.8 60.9c-.7.6-1 1.9-.4 2.6l2.1 3.2c.6.9 1.7 1 2.5.4l24.2-19.3c1-.8 1-2.3 0-3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3oqsmbrau3n";
freezeTemplate(tmpl);
