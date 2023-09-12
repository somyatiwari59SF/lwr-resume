import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./layout_tile.css";

import _implicitScopedStylesheets from "./layout_tile.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 7.52a2.88 2.88 0 012.88-2.88h42.24A2.88 2.88 0 0150 7.52v19.2a2.88 2.88 0 01-2.88 2.88H4.88A2.88 2.88 0 012 26.72zm7.2 28.8a2.39 2.39 0 012.4-2.4h27.84a2.4 2.4 0 110 4.8H11.6a2.39 2.39 0 01-2.4-2.4zm8.16 6.24a2.4 2.4 0 100 4.8h16.32a2.4 2.4 0 000-4.8z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1qtsampvk1s";
freezeTemplate(tmpl);
