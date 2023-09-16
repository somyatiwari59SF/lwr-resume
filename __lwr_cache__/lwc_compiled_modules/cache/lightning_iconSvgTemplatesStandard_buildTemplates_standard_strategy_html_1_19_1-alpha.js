import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./strategy.css";

import _implicitScopedStylesheets from "./strategy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M76.1 40.8H66c-2.2 0-4 1.8-4 4v2.5h-9.4V27.6c0-.6-.6-1.3-1.3-1.3H38v-2.4c0-2.2-1.8-4-4-4H23.9c-2.2 0-4 1.8-4 4V34c0 2.2 1.8 4 4 4H34c2.2 0 4-1.8 4-4v-2.4h9.3v15.7H38V45c0-2.2-1.8-4-4-4H23.9c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4H34c2.2 0 4-1.8 4-4v-2.4h9.3v15.7H38V66c0-2.2-1.8-4-4-4H23.9c-2.2 0-4 1.8-4 4v10.1c0 2.2 1.8 4 4 4H34c2.2 0 4-1.8 4-4v-2.4H51.3c.7 0 1.3-.7 1.3-1.3V52.7H62v2.2c0 2.2 1.8 4 4 4h10.1c2.2 0 4-1.8 4-4V44.8c0-2.2-1.8-4-4-4zM34 34H23.9V23.9H34V34zm0 2v-2 2zm0 19H23.9V45H34v10zm0 2v-2 2zm0 19.1H23.9V66H34v10.1zm0 2v-2 2zm42.1-23.2H66V44.8h10.1v10.1zm0 2v-2 2z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-43kmlmjirnd";
freezeTemplate(tmpl);
