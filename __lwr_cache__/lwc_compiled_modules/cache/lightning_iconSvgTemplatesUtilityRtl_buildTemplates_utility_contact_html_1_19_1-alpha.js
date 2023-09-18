import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact.css";

import _implicitScopedStylesheets from "./contact.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.2 9.1H6.8C4.16 9.1 2 11.26 2 13.9v23.2c0 2.64 2.16 4.8 4.8 4.8h38.4c2.64 0 4.8-2.16 4.8-4.8V13.9c0-2.64-2.16-4.8-4.8-4.8zM24.88 36.3H11.12c-1.52 0-2.72-1.68-2.72-3.28.08-2.4 2.56-3.84 5.2-5.04 1.84-.8 2.08-1.52 2.08-2.32s-.48-1.52-1.12-2.08c-1.04-.96-1.68-2.4-1.68-4 0-3.04 1.84-5.6 5.04-5.6s5.04 2.56 5.04 5.6c0 1.6-.56 3.04-1.68 4-.64.56-1.12 1.28-1.12 2.08s.24 1.52 2.08 2.24c2.64 1.12 5.12 2.72 5.2 5.12.16 1.6-1.04 3.28-2.56 3.28zm18.72-5.6c0 .88-.72 1.6-1.6 1.6h-7.2c-.88 0-1.6-.72-1.6-1.6v-2.4c0-.88.72-1.6 1.6-1.6H42c.88 0 1.6.72 1.6 1.6v2.4zm0-8.8c0 .88-.72 1.6-1.6 1.6H30c-.88 0-1.6-.72-1.6-1.6v-2.4c0-.88.72-1.6 1.6-1.6h12c.88 0 1.6.72 1.6 1.6v2.4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-elbc6voune";
freezeTemplate(tmpl);
