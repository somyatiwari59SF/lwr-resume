import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./home.css";

import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M78.8 51.2h-6.3v27.5c0 .8-.5 1.2-1.3 1.2H58.8c-.8 0-1.3-.5-1.3-1.2V57.5h-15v21.2c0 .8-.5 1.2-1.3 1.2H28.8c-.8 0-1.3-.5-1.3-1.2V51.2h-6.3c-.5 0-1-.2-1.1-.8-.3-.5-.1-1 .3-1.4l28.8-28.8c.5-.5 1.4-.5 1.8 0L79.8 49c.4.4.4.9.3 1.4s-.8.8-1.3.8z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6tki2eq2q7k";
freezeTemplate(tmpl);
