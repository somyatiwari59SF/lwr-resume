import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./swarm_request.css";

import _implicitScopedStylesheets from "./swarm_request.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><circle cx="20.15" cy="9.99" r="4.28"${3}/><circle cx="31.84" cy="9.99" r="4.28"${3}/><circle cx="11.36" cy="19.96" r="5.42"${3}/><circle cx="40.78" cy="19.96" r="5.42"${3}/><circle cx="26.07" cy="23.06" r="5.42"${3}/><path d="M32.19 46.29a2.79 2.79 0 002.17-.93 3.1 3.1 0 00.93-2.17v-7a4.66 4.66 0 00-4.64-4.64h-9.3a4.66 4.66 0 00-4.64 4.64v7a3.18 3.18 0 003.1 3.1zM12 43.19v-7a9.13 9.13 0 012.63-6.42.81.81 0 00-.08-1.13.79.79 0 00-.46-.19H6.65A4.66 4.66 0 002 33.12v7a3.18 3.18 0 003.1 3.1zM46.9 43.19a2.84 2.84 0 002.17-.93 3.1 3.1 0 00.93-2.17v-7a4.66 4.66 0 00-4.65-4.65h-7.43a.77.77 0 00-.54 1.32A9.28 9.28 0 0140 36.22v7z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-47v9714uhsp";
freezeTemplate(tmpl);
