import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./nft_studio.css";

import _implicitScopedStylesheets from "./nft_studio.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M53.33 20.89a6.64 6.64 0 00-6.65 0L26.46 32.57a6.64 6.64 0 00-3.32 5.76v23.35a6.66 6.66 0 003.32 5.76l20.22 11.68a6.64 6.64 0 006.65 0l20.22-11.68a6.64 6.64 0 003.32-5.76V38.33a6.66 6.66 0 00-3.32-5.76L53.33 20.89zM32.34 42.94h6.28c.63 0 1.18.55 1.18 1.18V66.1c0 .63-.55 1.18-1.18 1.18H34.3c-1.73 0-3.14-1.41-3.14-3.14V44.12c0-.63.55-1.18 1.18-1.18zm11.77 0h23.55c.63 0 1.18.55 1.18 1.18v20.02c0 1.73-1.41 3.14-3.14 3.14H44.11c-.63 0-1.18-.55-1.18-1.18V44.12c0-.63.55-1.18 1.18-1.18zm-9.81-10.2h31.4c1.73 0 3.14 1.41 3.14 3.14v2.75c0 .63-.55 1.18-1.18 1.18H32.34c-.63 0-1.18-.55-1.18-1.18v-2.75c0-1.73 1.41-3.14 3.14-3.14z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3akrkvg5lsj";
freezeTemplate(tmpl);
