import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outcome_activity.css";

import _implicitScopedStylesheets from "./outcome_activity.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M41.72 30.03c.01-.1-.02-.21-.1-.28 0 .1.1.2.1.28zM41.72 29.76c0 .09.09.19.09.28.13.35.29.68.48 1 2.17 4.26 7.38 5.96 11.65 3.82 1.4-.73 2.59-1.82 3.43-3.15a20.658 20.658 0 0113.38 15.47c.38 0 .76-.1 1.14-.1 1.62.01 3.24.27 4.78.77a26.104 26.104 0 00-18.05-21.72c-.11-1-.4-1.97-.86-2.86a8.71 8.71 0 00-11.65-3.82c-3.46 1.69-5.38 5.48-4.68 9.26.1.39.19.77.29 1.06zM36.84 57.54a8.664 8.664 0 00-6.81-4.68c-.09-.6-.12-1.2-.1-1.81.01-6.29 2.9-12.24 7.84-16.14-.29-.38-.48-.86-.77-1.24a17.53 17.53 0 01-1.43-4.3 26.43 26.43 0 00-11.43 21.68c0 1 .09 2.1.19 3.14-4.02 2.63-5.15 8.01-2.52 12.03 2.63 4.02 8.01 5.15 12.03 2.52 3.71-2.43 5.01-7.26 3-11.21zM79.43 57.54a8.66 8.66 0 00-11.75-3.46c-4.02 2.19-5.64 7.14-3.7 11.29.1.19.29.48.39.67a20.124 20.124 0 01-23.21 3.24 12.41 12.41 0 01-4.2 4.2c4.09 2.46 8.78 3.75 13.55 3.72 6.94 0 13.59-2.75 18.52-7.64 2.2.8 4.63.63 6.69-.48 4.2-2.12 5.89-7.25 3.77-11.45-.02-.03-.03-.07-.05-.1zM41.81 58.09c-.06.21.06.42.27.48.07.02.14.02.21 0l3.24-1.34c.22-.12.49-.08.67.1 1.37.88 2.96 1.34 4.58 1.33 5.06 0 9.17-3.91 9.17-8.58s-4.11-8.59-9.17-8.59c-4.86-.08-8.89 3.74-9.06 8.59a8.47 8.47 0 001.15 4.1c.12.2.15.44.09.67l-1.15 3.24z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5oub8eeo3f";
freezeTemplate(tmpl);
