import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sort.css";

import _implicitScopedStylesheets from "./sort.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50.9 37.7c.7-.7.7-1.9 0-2.6L36.6 20.7c-.7-.7-1.9-.7-2.6 0L19.7 35.1c-.7.7-.7 1.9 0 2.6l2.6 2.6c.7.7 1.9.7 2.6 0l4.5-4.5c.7-.7 2.1-.2 2.1.9v26.4c0 1 .9 1.9 1.9 1.9h3.7c1 0 1.9-1 1.9-1.9V36.7c0-1.1 1.4-1.6 2.1-.9l4.5 4.5c.7.7 1.9.7 2.6 0l2.7-2.6zm27.4 24.9l-2.6-2.5c-.7-.7-1.9-.7-2.6 0l-4.5 4.5c-.7.7-2.1.2-2.1-.9V37.1c0-1-.9-1.9-1.9-1.9h-3.7c-1 0-1.9 1-1.9 1.9v26.4c0 1.1-1.4 1.6-2.1.9l-4.5-4.5c-.7-.7-1.9-.7-2.6 0l-2.6 2.7c-.7.7-.7 1.9 0 2.6l14.3 14.3c.7.7 1.9.7 2.6 0l14.3-14.3c.7-.7.7-2-.1-2.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7fj7vpf47kp";
freezeTemplate(tmpl);
