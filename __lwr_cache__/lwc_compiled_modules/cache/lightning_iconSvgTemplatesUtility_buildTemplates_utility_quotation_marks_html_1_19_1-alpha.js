import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quotation_marks.css";

import _implicitScopedStylesheets from "./quotation_marks.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M44.3 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.4v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6zM19.5 6.5c-9 0-15.9 7-15.9 16V44c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.6v-3c0-5 4.9-10 9.9-10h2.6c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5h-2.6z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3t4bvobegf1";
freezeTemplate(tmpl);
