import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sparkles.css";

import _implicitScopedStylesheets from "./sparkles.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M34.87 27.18l-6.79 3.39a10.523 10.523 0 00-4.71 4.71l-3.39 6.79c-.48.97-1.87.97-2.35 0l-3.39-6.79a10.523 10.523 0 00-4.71-4.71l-6.79-3.39c-.97-.48-.97-1.87 0-2.35l6.79-3.39c2.04-1.02 3.69-2.67 4.71-4.71l3.39-6.79c.48-.97 1.87-.97 2.35 0l3.39 6.79c1.02 2.04 2.67 3.69 4.71 4.71l6.79 3.39c.97.48.97 1.87 0 2.35zm14.81 15.1l-2.91-1.46a4.488 4.488 0 01-2.02-2.02l-1.46-2.91c-.2-.42-.8-.42-1.01 0l-1.46 2.91c-.43.88-1.15 1.58-2.02 2.02l-2.91 1.46c-.42.2-.42.8 0 1.01l2.91 1.46c.88.43 1.58 1.15 2.02 2.02l1.46 2.91c.2.42.8.42 1.01 0l1.46-2.91c.43-.88 1.15-1.58 2.02-2.02l2.91-1.46c.42-.2.42-.8 0-1.01zm0-33.59l-2.91-1.46a4.488 4.488 0 01-2.02-2.02L43.29 2.3c-.2-.42-.8-.42-1.01 0l-1.46 2.91c-.43.88-1.15 1.58-2.02 2.02l-2.91 1.46c-.42.2-.42.8 0 1.01l2.91 1.46c.88.43 1.58 1.15 2.02 2.02l1.46 2.91c.2.42.8.42 1.01 0l1.46-2.91c.43-.88 1.15-1.58 2.02-2.02l2.91-1.46c.42-.2.42-.8 0-1.01z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1tdmn949iad";
freezeTemplate(tmpl);
