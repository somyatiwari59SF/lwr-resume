import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./partner_fund_request.css";

import _implicitScopedStylesheets from "./partner_fund_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M43.7 58.3c3.7-2.1 7.2-3.1 11.1-3.1 1.1 0 2.2.1 3.2.2.5.1.6-.1.1-.4-1.9-1.1-4-2.1-6.2-3-4.3-1.8-4.9-3.4-4.9-5.2 0-1.8 1.2-3.4 2.6-4.7 2.5-2.3 3.9-5.4 3.9-9.1 0-6.9-4.3-12.8-11.9-12.8s-12 5.9-12 12.8c0 3.7 1.4 6.9 3.9 9.1 1.4 1.3 2.6 3 2.6 4.7 0 1.7-.7 3.4-4.9 5.2C25 54.6 19.1 57.6 19 63.3c0 3.7 2.8 7 6.3 7h14.2c1.1 0 2-.9 2-2v-6.5c.2-1.4.9-2.8 2.2-3.5z"${3}/><path d="M76.3 64.3c-9.4 2.9-16.8-6-27.2-1.8-.8.3-1.2 1-1.2 1.9v10.7c0 1.4 1.2 2.3 2.5 1.9 10.2-3.1 17.6 5.8 27.3 1.8.7-.3 1.3-1 1.3-1.9V66.2c0-1.3-1.4-2.3-2.7-1.9zm-12.6 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1acs50efpff";
freezeTemplate(tmpl);
