import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_transforms.css";

import _implicitScopedStylesheets from "./data_transforms.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M50 3.46C50 2.68 49.34 2 48.6 2h-14c-.74 0-1.4.68-1.4 1.46v10.68c0 .78.66 1.46 1.4 1.46h14c.74 0 1.4-.68 1.4-1.46V3.46zm-31.2 34.4c0-.78-.66-1.46-1.4-1.46h-14c-.74 0-1.4.68-1.4 1.46v10.69c0 .78.66 1.46 1.4 1.46h14c.74 0 1.4-.68 1.4-1.46V37.86zm22.65-12.49c.32-.22.79-.22 1.11 0l6.43 6.14c.48.37.08 1.04-.71 1.04h-3.89c0 6.66-5.64 11.85-12.78 11.85v-4.44c4.77 0 8.02-2.96 8.02-7.41h-3.82c-.79 0-1.19-.59-.71-1.04l6.35-6.14zM9.44 26.63c.32.22.79.22 1.11 0l6.35-6.14c.48-.45.08-1.04-.71-1.04h-3.82c0-4.44 3.26-7.41 8.02-7.41V7.6c-7.15 0-12.78 5.18-12.78 11.85H3.73c-.79 0-1.19.66-.71 1.04l6.43 6.14zm14.2-.61c0-1.27 1.01-2.28 2.28-2.28s2.28 1.01 2.28 2.28-1.01 2.28-2.28 2.28-2.28-1.01-2.28-2.28zm7.3.91l1.06.88c.34.29.46.8.2 1.11l-.42.74a.94.94 0 01-.82.46c-.11 0-.22-.03-.34-.06l-1.22-.48c-.51.48-1.11.82-1.76 1.06l-.22 1.37c-.09.46-.48.8-.94.8h-.91c-.48 0-.86-.31-.94-.77l-.22-1.37c-.6-.2-1.17-.51-1.68-.97l-1.31.48a.928.928 0 01-1.13-.4l-.46-.8c-.22-.4-.11-.91.22-1.19l1.06-.88a5.306 5.306 0 010-1.94l-1.06-.88a.906.906 0 01-.22-1.19l.46-.8a.94.94 0 01.82-.46c.1 0 .17.02.26.04.02 0 .04 0 .06.02l1.31.48c.51-.42 1.08-.77 1.7-.97l.22-1.31c.09-.46.48-.71.94-.71h.91c.46 0 .86.26.94.71l.22 1.34c.6.2 1.17.51 1.68.97l1.31-.48a.928.928 0 011.13.4l.46.8c.22.4.11.91-.22 1.19l-1.06.88a5.306 5.306 0 010 1.94z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1diudmc38bd";
freezeTemplate(tmpl);
