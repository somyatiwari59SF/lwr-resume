import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom55.css";

import _implicitScopedStylesheets from "./new_custom55.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M12.5 33.3h9.8c.8 0 1.5-.7 1.5-1.5V9.9c0-1.6-1.5-2.9-3-2.9h-8c-1 0-1.7.7-1.7 1.7v23.2c-.1.7.6 1.4 1.4 1.4z"${3}/><path d="M45.5 11.4v23.4c0 1.6-1.4 2.9-3 2.9h-33c-1.7 0-3-1.3-3-2.9V11.4c-2.5 0-4.5 2-4.5 4.4v21.9c0 2.4 2 4.4 4.5 4.4h14.2c.8 0 1.5.7 1.5 1.5s.7 1.5 1.5 1.5h4.5c.8 0 1.5-.7 1.5-1.5s.7-1.5 1.5-1.5h14.2c2.5 0 4.5-2 4.5-4.4V15.8c.1-2.4-1.9-4.4-4.4-4.4z"${3}/><path d="M29.8 33.3h9.5c1 0 1.7-.7 1.7-1.7V8.5c0-.8-.7-1.5-1.5-1.5h-8.2c-1.5 0-3 1.3-3 2.9v21.9c-.1.8.6 1.5 1.5 1.5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-2c7qqguhv92";
freezeTemplate(tmpl);
