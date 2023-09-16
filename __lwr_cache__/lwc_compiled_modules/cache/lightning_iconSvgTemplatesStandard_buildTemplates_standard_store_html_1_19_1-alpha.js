import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./store.css";

import _implicitScopedStylesheets from "./store.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M71.5 54.4h-.3c-2-.2-3.6-.8-5.2-1.9l-.2-.2c-.7-.6-1.4-.3-1.7-.1l-.1.1c-1.9 1.4-4 2.1-6.5 2.1-2.6 0-4.8-.8-6.8-2.3-.7-.5-1.2 0-1.2 0-2 1.6-4.3 2.4-6.9 2.4-2.5 0-4.7-.7-6.6-2.2-.1-.1-.2-.1-.3-.2-.6-.5-1.2 0-1.2 0-1.9 1.5-4 2.3-6.4 2.4 0 0-.8 0-.8.9V74c0 .4.2 1.3 1.4 1.5h23.2c1.2-.2 1.4-1.1 1.4-1.5v-3.6-9.6c.1-.4.3-.8 1.3-.8h11.1c.4.1.8.4.8 1.3v12.5c0 1.4 1 1.6 1.3 1.6h3.5c.3 0 1.3-.2 1.3-1.6V55.7c-.2-1-.7-1.2-1.1-1.3zm-25 14.4v.4c0 .5-.3 1.3-1.5 1.3H34.8c-1.1 0-1.4-.5-1.5-1V69v-7.1c0-1.8 1-1.9 1.4-1.9h10.6c.4 0 1.2.3 1.2 1.6v7.2zM70.4 49.4c2.7.7 5.1.2 7.1-1.7 1.3-1.2 2.1-2.7 2.3-4.4v-.2c-.2-.6-.5-1.3-.7-1.7-3-5.4-5.9-10.8-8.8-16.2-.4-.7-1.2-.7-1.5-.7h-38s-1.1 0-1.5.7c-3 5.4-5.9 10.9-8.8 16.2-.2.4-.5 1.1-.5 1.8v.2c.2 1.7 1 3.2 2.3 4.4 2.2 2 4.8 2.5 7.7 1.5 1.6-.6 2.8-1.6 3.8-3.1.1-.1.2-.3.4-.4.6-.4 1.4-.3 1.9.4.5.8 1.1 1.5 1.9 2 2.1 1.6 4.5 1.9 7 1.1 1.6-.5 2.9-1.6 3.8-3.1.5-.8 1.7-.9 2.3 0l.6.9c1.3 1.5 2.9 2.4 4.8 2.6 1.8.2 3.5-.2 5.1-1.3.9-.6 1.6-1.4 2.1-2.2.6-.8 1.7-.8 2.2 0 1 1.6 2.3 2.6 4.1 3.1l.4.1z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-lsueis4shn";
freezeTemplate(tmpl);
