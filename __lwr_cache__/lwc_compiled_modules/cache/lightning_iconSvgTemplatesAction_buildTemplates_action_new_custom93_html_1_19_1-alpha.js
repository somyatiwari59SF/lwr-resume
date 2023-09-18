import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom93.css";

import _implicitScopedStylesheets from "./new_custom93.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M20.1 26H44c.7 0 1.4-.5 1.5-1.2l4.4-14.9c.3-1-.5-2-1.5-2H11.5l-.6-2.2C10.5 4.7 9.5 4 8.5 4H4.6C3.3 4 2.1 4.9 2 6.2c-.1 1.3 1.1 2.5 2.4 2.5h2.3l7.6 25c.3 1 1.2 1.7 2.3 1.7h28.2c1.3 0 2.5-.9 2.6-2.2.1-1.3-1.1-2.5-2.4-2.5H20.2c-1.1 0-2-.7-2.3-1.6V29c-.5-1.5.7-3 2.2-3z"${3}/><ellipse cx="20.6" cy="44.1" rx="4" ry="3.9"${3}/><ellipse cx="40.1" cy="44.1" rx="4" ry="3.9"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3gc3b9hu8qo";
freezeTemplate(tmpl);
