import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_required.css";

import _implicitScopedStylesheets from "./product_required.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><rect x="43.93" y="68.27" width="36.07" height="7.99" rx="2" ry="2"${3}/><rect x="43.93" y="50.42" width="36.07" height="7.99" rx="2" ry="2"${3}/><rect x="49.92" y="32.57" width="30.08" height="7.99" rx="2" ry="2"${3}/><path d="M33.82 76.26h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a1.9 1.9 0 01-2 2zM33.82 58.41h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a1.9 1.9 0 01-2 2z" fill-rule="evenodd"${3}/><path d="M47.55 26.33l-2.12-2.12a1.44 1.44 0 00-2.12 0L30.08 37.32l-5.37-5.24a1.44 1.44 0 00-2.12 0l-2.12 2.12a1.44 1.44 0 000 2.12l7.36 7.36a3 3 0 004.24 0l15.48-15.22a1.69 1.69 0 000-2.13z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5i1alh5c3mu";
freezeTemplate(tmpl);
