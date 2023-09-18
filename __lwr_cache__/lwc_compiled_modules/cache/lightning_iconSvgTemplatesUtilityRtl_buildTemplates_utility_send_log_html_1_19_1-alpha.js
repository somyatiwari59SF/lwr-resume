import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./send_log.css";

import _implicitScopedStylesheets from "./send_log.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M2 4.75c0-.41.34-.75.75-.75h32.5c.41 0 .75.34.75.75v4.5c0 .41-.34.75-.75.75H2.75C2.34 10 2 9.66 2 9.25v-4.5zM2.75 16c-.41 0-.75.34-.75.75v4.5c0 .41.34.75.75.75h32.5c.41 0 .75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75H2.75zm0 12c-.41 0-.75.34-.75.75v4.5c0 .41.34.75.75.75h17.63l-1.63-6h-16zM24.05 46.91l2.38-8.87h10.08c.27 0 .54-.27.54-.54v-1.09c0-.27-.27-.54-.54-.54H26.43l-2.33-8.71c-.05-.11-.11-.27-.11-.44 0-.38.38-.76.81-.71.11 0 .16.05.27.05l24.37 10.07c.33.11.54.44.54.76s-.22.6-.49.71L25.06 47.94c-.11.05-.22.05-.33.05-.43-.05-.76-.38-.76-.82 0-.11 0-.16.05-.27z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1iluorfssao";
freezeTemplate(tmpl);
