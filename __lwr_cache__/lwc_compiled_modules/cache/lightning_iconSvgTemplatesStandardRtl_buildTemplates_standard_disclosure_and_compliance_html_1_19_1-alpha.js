import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./disclosure_and_compliance.css";

import _implicitScopedStylesheets from "./disclosure_and_compliance.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M72.13 23.77h-2.05c-.64 0-1.02.38-1.02 1.02v4.09c0 4.48-3.58 8.19-8.06 8.19H39c-4.48 0-8.06-3.71-8.06-8.19v-4.09c0-.64-.38-1.02-1.02-1.02h-2.05c-3.33 0-6.01 2.81-6.01 6.14v44.01c0 3.33 2.69 6.14 6.01 6.14h44.26c3.33 0 6.01-2.81 6.01-6.14V29.91c0-3.33-2.69-6.14-6.01-6.14zM49.98 48.89c0-.55.43-.97.97-.97h12.73c.55 0 .97.43.97.97v1.95c0 .55-.43.97-.97.97H50.95c-.55 0-.97-.43-.97-.97v-1.95zm-14.37.85c-.3-.3-.3-.73 0-1.04l1.04-1.04c.3-.3.73-.3 1.04 0l2.62 2.56 6.45-6.39c.3-.3.73-.3 1.04 0l1.04 1.04c.24.3.24.79 0 1.04l-7.55 7.43c-.3.3-.67.43-1.04.43s-.73-.12-1.04-.43l-3.59-3.59zm29.05 18.51c0 .55-.43.97-.97.97h-23.5c-.55 0-.97-.43-.97-.97V66.3c0-.55.43-.97.97-.97h23.5c.55 0 .97.43.97.97v1.95zm0-8.71c0 .55-.43.97-.97.97h-23.5c-.55 0-.97-.43-.97-.97v-1.95c0-.55.43-.97.97-.97h23.5c.55 0 .97.43.97.97v1.95z"${3}/><path d="M39 32.34h22.13c1.15 0 2.05-.9 2.05-2.05V26.2c0-3.33-2.69-6.14-6.01-6.14H43.1c-3.33 0-6.01 2.81-6.01 6.14v4.09c-.13 1.15.77 2.05 1.92 2.05z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-75uao72kobf";
freezeTemplate(tmpl);
