import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./add_source.css";

import _implicitScopedStylesheets from "./add_source.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M12.58 5.38c.44-.44 1.15-.44 1.59 0l17 17.02.6.6h8.9c.6 0 .89-.79.5-1.19l-2.48-2.48c-.4-.4-.4-1.09 0-1.49l1.49-1.49c.4-.4 1.09-.4 1.49 0l8.03 8.03c.4.4.4.99 0 1.49l-8.03 7.93c-.4.4-1.09.4-1.49 0l-1.49-1.49c-.4-.4-.4-1.09 0-1.49l2.58-2.48c.4-.4.07-1.19-.5-1.19h-8.39l-1.2 1.2-17.02 17.04c-.44.44-1.15.44-1.59 0l-1.4-1.4c-.44-.44-.44-1.15 0-1.59l12.46-12.46c1.02-1.02.3-2.77-1.15-2.77H3.08c-.61 0-1.09-.5-1.09-1.09V24c0-.6.42-1.05 1.02-1.05 6.29 0 12.56.02 18.84.03 1.45 0 2.17-1.75 1.15-2.77L11.17 8.37c-.44-.44-.44-1.15 0-1.59l1.4-1.4z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6lu1b8mejnm";
freezeTemplate(tmpl);
