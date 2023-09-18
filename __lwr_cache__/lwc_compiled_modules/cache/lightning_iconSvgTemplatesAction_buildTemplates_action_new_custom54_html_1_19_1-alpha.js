import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom54.css";

import _implicitScopedStylesheets from "./new_custom54.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M7.8 26.9c5.2-.9 9.8-3 14.7-5.3 1.6-.7 4.6-2.1 6-2.7.5-.2.8-.7.6-1.3-.4-2.3-2.3-4.2-4.7-4.2h-1.6v-3c0-.9-.8-1.6-1.6-1.6V5.6c0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6.7-1.6 1.6v3.2c-.8 0-1.6.7-1.6 1.6v3h-1.6c-2.6 0-4.8 2.4-4.8 5.1V26c0 .6.5 1 1 .9zM43.6 42.7s5.8-9 6.4-21.6c0-.9-.7-1.7-1.7-1.7-19 .7-27.9 12.2-44.8 12.9-.9 0-1.5.8-1.5 1.6v6c0 2.6 2 4.6 4.5 4.8 8.4.5 26.4 1.7 36.7 3.4 1 .2 2-.8 1.8-1.8-.2-1.3-.6-2.7-1.4-3.6zm-.8-14.3c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-visgmhk5oq";
freezeTemplate(tmpl);
