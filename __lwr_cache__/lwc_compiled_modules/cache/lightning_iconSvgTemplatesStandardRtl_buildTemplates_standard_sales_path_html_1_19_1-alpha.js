import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_path.css";

import _implicitScopedStylesheets from "./sales_path.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M84.7 68.8c0 .6-.4 1-1 1H63c-.5 0-1.1-.3-1.4-.7l-14.8-18c-.4-.7-.4-1.5 0-2.1l14.9-18c.3-.5.8-.7 1.4-.7h20.7c.5 0 1 .4 1 1 0 .2-.1.4-.2.6l-14.2 17c-.4.6-.4 1.4 0 2.1l14.2 17.2c.1.1.2.4.1.6zm-31.5 0c0 .6-.4 1-1 1H31.5c-.5 0-1.1-.3-1.4-.7l-14.8-18c-.4-.7-.4-1.5 0-2.1l14.9-18c.3-.5.8-.7 1.4-.7h20.7c.5 0 1 .4 1 1 0 .2-.1.4-.2.6l-14.2 17c-.4.6-.4 1.4 0 2.1L53 68.2c.1.1.2.4.2.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7vff5a0tob0";
freezeTemplate(tmpl);
