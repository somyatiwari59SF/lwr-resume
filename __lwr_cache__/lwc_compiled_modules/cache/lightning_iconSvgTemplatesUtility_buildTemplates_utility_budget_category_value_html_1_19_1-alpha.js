import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./budget_category_value.css";

import _implicitScopedStylesheets from "./budget_category_value.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M40.67 1.8H5.25c-.34 0-.67.15-.91.4s-.38.58-.39.94v4.44a1.353 1.353 0 001.3 1.33h35.42c.34 0 .66-.15.9-.4s.38-.58.39-.93V3.14c0-.35-.15-.68-.39-.93-.24-.25-.56-.39-.9-.4zM13.03 12.47H5.25c-.34 0-.67.15-.91.4s-.38.58-.39.94v2.67a1.353 1.353 0 001.3 1.33h7.77c.34 0 .66-.15.9-.4s.38-.58.39-.93v-2.67c0-.35-.15-.68-.39-.93-.24-.25-.56-.39-.9-.4zm13.81 0h-7.77c-.34 0-.67.15-.91.4s-.38.59-.39.94v2.67a1.353 1.353 0 001.3 1.33h7.77c.34 0 .67-.15.91-.4s.38-.58.39-.93v-2.67c0-.35-.15-.69-.39-.94-.24-.25-.57-.39-.91-.4zm13.83 0h-7.78c-.34.01-.66.16-.9.4-.24.25-.38.58-.39.93v2.67c0 .35.15.68.39.93.24.25.56.39.9.4h7.78c.34 0 .66-.15.9-.4s.38-.58.39-.93V13.8c0-.35-.15-.68-.39-.93s-.56-.39-.9-.4zm-27.64 8.88H5.25c-.34 0-.67.15-.91.4s-.38.58-.39.94v2.67c.01.35.15.68.39.93s.57.39.91.4h7.77c.34-.01.66-.15.9-.4s.38-.58.39-.93v-2.67c0-.35-.15-.69-.39-.93-.24-.25-.57-.39-.91-.4zm13.81 0h-7.77c-.34 0-.67.15-.91.4s-.38.58-.39.94v2.67a1.353 1.353 0 001.3 1.33h7.77c.34 0 .67-.15.91-.4s.38-.58.39-.93v-2.67c0-.35-.15-.69-.39-.94-.24-.25-.57-.39-.91-.4zm13.83 0h-7.78c-.34 0-.67.15-.91.4s-.38.58-.39.93v2.67c.01.35.15.68.39.93.24.25.56.39.9.4h7.78c.34-.01.66-.15.9-.4s.38-.58.39-.93v-2.67c0-.35-.15-.69-.39-.93-.24-.25-.57-.39-.91-.4zm-27.64 8.89H5.25c-.34 0-.67.15-.91.4s-.38.58-.39.94v2.67c0 .35.15.69.39.93.24.25.57.39.91.4h7.77c.34 0 .66-.15.9-.4s.38-.58.39-.93v-2.67c0-.35-.15-.68-.39-.93-.24-.25-.56-.39-.9-.4zm0 8.89H5.25c-.34 0-.67.15-.91.4s-.38.58-.39.93v2.67a1.353 1.353 0 001.3 1.33h7.77c.34 0 .66-.15.9-.4s.38-.58.39-.93v-2.67c-.01-.35-.15-.68-.39-.93-.24-.25-.56-.39-.9-.4zm32.73-9.18H20.52c-1.6 0-2.9 1.29-2.9 2.9v14.07c0 1.6 1.29 2.9 2.9 2.9h25.23c1.6 0 2.9-1.29 2.9-2.9V32.85c0-1.6-1.29-2.9-2.9-2.9zM23.94 46.91c0-1.91-1.5-3.41-3.41-3.41v-7.24c1.91 0 3.41-1.5 3.41-3.41h18.41c0 1.91 1.5 3.41 3.41 3.41v7.24c-1.91 0-3.41 1.5-3.41 3.41H23.93zm14.07-7.29c0 2.68-2.18 4.86-4.86 4.86s-4.86-2.18-4.86-4.86 2.18-4.86 4.86-4.86 4.86 2.18 4.86 4.86z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4mvrm3m5bod";
freezeTemplate(tmpl);
