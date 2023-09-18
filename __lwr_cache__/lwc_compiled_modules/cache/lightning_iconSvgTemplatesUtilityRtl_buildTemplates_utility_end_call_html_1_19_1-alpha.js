import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./end_call.css";

import _implicitScopedStylesheets from "./end_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M48.5 5.6l-2.1-2.1c-.6-.6-1.7-.5-2.4.3L20.5 27.3l-5-5.6c-.6-.6-.6-1.4-.2-2.1l3.8-5.2c1.1-1.4 1-3.4-.1-4.8l-4.9-6.1c-1.5-1.8-4.2-2-5.9-.3L3 8.4c-.8.8-1.2 1.9-1.2 3 .5 9.2 4.2 18 10 24.6l-8 8c-.7.7-.8 1.8-.3 2.4l2.1 2.1c.6.6 1.7.5 2.4-.3L48.2 8c.8-.7.9-1.8.3-2.4zM48.5 37.9L42.4 33c-1.4-1.1-3.4-1.2-4.8-.1l-5.2 3.8c-.6.5-1.5.4-2.1-.2l-2.4-2.2-8.5 8.5c6.1 4.1 13.4 6.8 21 7.2 1.1.1 2.2-.4 3-1.2l5.2-5.2c1.9-1.5 1.8-4.3-.1-5.7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-kvgmb0pb4j";
freezeTemplate(tmpl);
