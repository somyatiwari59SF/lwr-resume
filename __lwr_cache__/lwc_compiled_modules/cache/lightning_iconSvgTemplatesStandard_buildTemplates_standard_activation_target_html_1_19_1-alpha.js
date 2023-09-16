import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./activation_target.css";

import _implicitScopedStylesheets from "./activation_target.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M75 20.37H57.81a5 5 0 00-5 5v17a5 5 0 005 5H75a5 5 0 005-5v-17a5 5 0 00-5-5zm-1 6v15H58.82v-15zM28 51a1.64 1.64 0 00-1.56 1.71l-.08 3.51A1.64 1.64 0 0028 57.83h6.2a1.08 1.08 0 01.82.33 1.18 1.18 0 01.08 1.71L20.54 74.34a1.68 1.68 0 00-.09 2.37l2.47 2.45a2.12 2.12 0 002.55.08l14.68-14.55a.88.88 0 01.58-.25 1.28 1.28 0 011.4 1.06l.08 5.22a1.64 1.64 0 001.64 1.63l3.54.09A1.65 1.65 0 0049 70.8v-18a1.65 1.65 0 00-1.65-1.64z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3sps0r9kcqk";
freezeTemplate(tmpl);
