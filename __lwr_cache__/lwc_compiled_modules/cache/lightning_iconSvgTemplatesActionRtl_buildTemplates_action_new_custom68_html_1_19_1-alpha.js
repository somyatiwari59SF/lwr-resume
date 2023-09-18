import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom68.css";

import _implicitScopedStylesheets from "./new_custom68.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 2C12.8 2 2 12.8 2 26s10.8 24 24 24 24-10.8 24-24S39.2 2 26 2zm19 21.6h-6.3c-.2-5.7-1.5-10.6-3.4-14.4 5.3 3 8.9 8.2 9.7 14.4zM23.6 7.8v15.8h-5.5c.4-7.5 2.8-13.4 5.5-15.8zm0 20.6v15.8c-2.7-2.3-5.1-8.2-5.5-15.8h5.5zm4.8 15.8V28.4h5.5c-.4 7.5-2.8 13.4-5.5 15.8zm0-20.6V7.8c2.7 2.3 5.1 8.2 5.5 15.8h-5.5zM16.7 9.2c-1.9 3.8-3.1 8.7-3.4 14.4H7c.8-6.2 4.4-11.4 9.7-14.4zM7 28.4h6.3c.2 5.7 1.5 10.6 3.4 14.4-5.3-3-8.9-8.2-9.7-14.4zm28.3 14.4c1.9-3.8 3.1-8.7 3.4-14.4H45c-.8 6.2-4.4 11.4-9.7 14.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1fk9d6g6usg";
freezeTemplate(tmpl);
