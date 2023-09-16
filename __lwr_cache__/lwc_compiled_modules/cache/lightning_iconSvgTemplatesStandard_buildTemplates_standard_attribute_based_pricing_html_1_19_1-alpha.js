import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./attribute_based_pricing.css";

import _implicitScopedStylesheets from "./attribute_based_pricing.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M65.06 21.13c.39-.67 1.36-.67 1.75 0L79.49 43c.39.68-.09 1.52-.87 1.52H53.26c-.78 0-1.27-.85-.88-1.52l12.68-21.87h-.01z"${3}/><path d="M45.35 51.49H34.92c-.67-.05-1.24.28-1.71.76L20.45 65.08c-1.09 1.09-1.09 2.91 0 4.05l10.09 10.1c1.09 1.09 2.91 1.09 4.05 0l12.9-12.97c.48-.48.76-1.24.72-1.9V54.35c0-1.57-1.29-2.86-2.85-2.86h-.01zM35.07 72.48l-.67.67c-.38.38-.95.38-1.34 0l-6.47-6.48c-.38-.38-.38-.95 0-1.34l.67-.67c.38-.38.95-.38 1.34 0l6.47 6.48c.38.38.38.95 0 1.34zm3.81-3.82l-.67.67c-.38.38-.95.38-1.34 0l-6.47-6.48c-.38-.38-.38-.95 0-1.34l.67-.67c.38-.38.95-.38 1.34 0l6.47 6.48c.38.38.38.95 0 1.34zm2.66-8.11c-1.34 0-2.38-1.05-2.38-2.38s1.04-2.38 2.38-2.38 2.38 1.05 2.38 2.38-1.04 2.38-2.38 2.38z"${3}/><circle cx="66.43" cy="67.42" r="12.95"${3}/><rect x="20.63" y="20.62" width="23.9" height="23.9" rx="2.02" ry="2.02"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-21bptlod7js";
freezeTemplate(tmpl);
