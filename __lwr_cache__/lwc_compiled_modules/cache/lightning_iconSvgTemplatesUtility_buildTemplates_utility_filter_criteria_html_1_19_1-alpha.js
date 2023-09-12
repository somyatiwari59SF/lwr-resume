import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter_criteria.css";

import _implicitScopedStylesheets from "./filter_criteria.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M16.35 10.4h18.89A1.74 1.74 0 0037 8.67V5.2A5.22 5.22 0 0031.77 0h-12a5.22 5.22 0 00-5.2 5.2v3.47a1.87 1.87 0 001.78 1.73z"${3}/><path d="M8.55 4.33a.82.82 0 01.86.87v3.47a6.94 6.94 0 006.85 6.93h18.89A6.88 6.88 0 0042 8.67V5.2a.82.82 0 01.87-.87h1.73a5.22 5.22 0 015.2 5.2V46.8a5.22 5.22 0 01-5.2 5.2H6.81a5.2 5.2 0 01-5.11-5.2V9.53a5.2 5.2 0 015.11-5.2h1.74zm27 19.94h-19.2a.75.75 0 00-.61 1.21l8.41 9.88a2 2 0 01.43 1.13v6.24a.75.75 0 00.69.69h1.3a.67.67 0 00.61-.69v-6.24a1.39 1.39 0 01.52-1.13l8.49-9.88a.73.73 0 00-.6-1.21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4do81ckglr";
freezeTemplate(tmpl);
