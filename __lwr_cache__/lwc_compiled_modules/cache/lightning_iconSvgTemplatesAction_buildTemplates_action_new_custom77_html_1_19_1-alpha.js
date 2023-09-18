import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom77.css";

import _implicitScopedStylesheets from "./new_custom77.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M11.5 19.6h3.1c.5 0 .8-.3.8-.8v-1.2c0-6.1 4.5-10.8 10.2-10.8s10.2 4.7 10.2 10.8v1.2c0 .5.3.8.8.8h3.1c.5 0 .8-.3.8-.8v-1.2C40.5 8.9 34 2 25.6 2S10.7 8.9 10.7 17.6v1.2c0 .5.3.8.8.8zM41.3 24.4H10.7c-2.6 0-4.7 2.2-4.7 4.8v16c0 2.6 2.1 4.8 4.7 4.8h30.6c2.6 0 4.7-2.2 4.7-4.8v-16c0-2.6-2.1-4.8-4.7-4.8zM29.8 37.3c-.7 1.1-1.1 2.4-.8 3.7l.5 2.4c.2.9-.5 1.8-1.4 1.8h-5c-.9 0-1.6-1-1.4-1.8l.5-2.5c.3-1.3-.1-2.6-.8-3.6-.7-1-1-2.3-.8-3.6.4-1.9 2-3.4 3.9-3.8 3.2-.6 6 1.8 6 4.7 0 1-.3 1.9-.7 2.7z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-ssct14ki4n";
freezeTemplate(tmpl);
