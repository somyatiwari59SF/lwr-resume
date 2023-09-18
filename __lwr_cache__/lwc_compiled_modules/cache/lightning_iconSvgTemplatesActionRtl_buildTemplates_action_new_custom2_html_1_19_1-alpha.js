import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom2.css";

import _implicitScopedStylesheets from "./new_custom2.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M33.3 3.5C30.9 1.9 22.2.4 18.9 5.9c-1.6 2.6.3 7.3 1.8 10.3.4.7 1.2 1.1 2 .8 1-.4 2.2-.6 3.5-.6.8 0 1.6.1 2.4.3.7.2 1.4-.2 1.8-.8.6-1 1.5-2.2 3.1-3.5 3.8-3.3 2.2-7.3-.2-8.9zM29.1 35.1c-1 .3-2 .5-3.1.5-1 0-1.9-.2-2.8-.4-.7-.2-1.5.2-1.8.8-.6 1-1.5 2.3-3.1 3.6-4 3.2-2.4 7.3 0 8.9s11.2 3.1 14.4-2.4c1.5-2.6-.2-7.2-1.7-10.2-.4-.7-1.2-1-1.9-.8zM46.1 18.7c-2.6-1.6-7.3.3-10.3 1.8-.7.4-1.1 1.2-.8 2 .4 1 .6 2.2.6 3.5 0 .8-.1 1.6-.3 2.4-.2.7.2 1.4.8 1.8 1 .6 2.2 1.5 3.5 3.1 3.2 4 7.2 2.4 8.8 0s3.2-11.3-2.3-14.6zM16.9 29c-.3-1-.5-2-.5-3.1 0-1 .2-1.9.4-2.8.2-.7-.2-1.5-.8-1.8-1-.6-2.3-1.5-3.6-3.1-3.2-4-7.3-2.4-8.9 0S.4 29.3 5.9 32.6c2.6 1.5 7.2-.2 10.2-1.7.7-.4 1-1.2.8-1.9z"${3}/><circle cx="26" cy="26" r="4.8"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3jt5b5s28ut";
freezeTemplate(tmpl);
