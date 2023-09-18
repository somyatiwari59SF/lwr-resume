import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./timeslot.css";

import _implicitScopedStylesheets from "./timeslot.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M70.95 20H29.19a7.93 7.93 0 00-8 7.81v44.38A7.9 7.9 0 0029.05 80h41.9a7.9 7.9 0 007.83-7.81V27.81A7.73 7.73 0 0070.95 20zM31.8 33a2.7 2.7 0 012.61-2.6h13.32a2.7 2.7 0 012.61 2.6v2.6a2.7 2.7 0 01-2.61 2.6H34.41a2.7 2.7 0 01-2.61-2.6zM68 67a2.7 2.7 0 01-2.61 2.6H52.17a2.7 2.7 0 01-2.61-2.6v-2.6a2.7 2.7 0 012.61-2.6h13.32A2.58 2.58 0 0168 64.38zm.51-12.39a2.83 2.83 0 01-2.75 2.6H34.41a2.7 2.7 0 01-2.61-2.6v-9.07a2.7 2.7 0 012.61-2.6h31.45a2.7 2.7 0 012.61 2.6z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-62fst18sq0n";
freezeTemplate(tmpl);
