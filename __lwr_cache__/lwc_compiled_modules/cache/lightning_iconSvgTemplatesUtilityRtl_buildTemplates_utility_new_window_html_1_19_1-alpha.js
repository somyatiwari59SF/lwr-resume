import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_window.css";

import _implicitScopedStylesheets from "./new_window.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 3.4v19c0 .8.7 1.7 1.5 1.7h2.9c.8 0 1.6-.9 1.6-1.7v-7.9c0-.9 1-1.3 1.6-.7l17 17c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-17-17c-.7-.6-.2-1.6.7-1.6h7.9c.9 0 1.6-.9 1.6-1.7v-3c0-.8-.8-1.3-1.6-1.3H3.3C2.5 2 2 2.5 2 3.4zm12 22.8V46c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4H26.2c-.9 0-1.3 1.1-.7 1.7l3.4 3.4c.5.6 1.3.9 2.1.9h11.5c.8 0 1.5.7 1.5 1.5v21c0 .8-.7 1.5-1.5 1.5h-21c-.8 0-1.5-.7-1.5-1.5V31.1c0-.8-.3-1.5-.9-2.1l-3.4-3.5c-.6-.6-1.7-.2-1.7.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2reemvtbn40";
freezeTemplate(tmpl);
