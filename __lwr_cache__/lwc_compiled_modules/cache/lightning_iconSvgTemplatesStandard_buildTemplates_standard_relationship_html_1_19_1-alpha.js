import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./relationship.css";

import _implicitScopedStylesheets from "./relationship.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M71.25 70.002h-3.751V62.5h3.751c.749 0 1.25-.501 1.25-1.25v-32.5c0-.75-.501-1.25-1.25-1.25h-32.5c-.75 0-1.25.5-1.25 1.25v3.75H30v-3.75A8.696 8.696 0 0138.75 20h32.5A8.696 8.696 0 0180 28.75v32.5c0 4.876-3.872 8.752-8.75 8.752z"${3}/><path d="M57.5 37.5H25c-2.749 0-5 2.249-5 5V75c0 2.75 2.251 5 5 5h32.5c2.75 0 5-2.25 5-5V42.5c0-2.75-2.248-5-5-5z"${3}/></g></g>`;
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
tmpl.stylesheetToken = "lwc-3jkcd6nocs8";
freezeTemplate(tmpl);
