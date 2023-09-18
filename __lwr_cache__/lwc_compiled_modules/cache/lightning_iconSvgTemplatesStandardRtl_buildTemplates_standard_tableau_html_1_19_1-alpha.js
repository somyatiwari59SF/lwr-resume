import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tableau.css";

import _implicitScopedStylesheets from "./tableau.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M60 51.6h-8.3V61h-3.3v-9.4H40v-3.3h8.3V39h3.3v9.4H60zM43 63.3h-7.1V55h-2.7v8.3H26v2.5h7.2V74h2.7v-8.2H43zM74 34.2h-7.2V26h-2.7v8.2H57v2.6h7.2V45h2.7v-8.2H74zM56 71.8h-4.8V66h-2.3v5.8H44v2.3h4.9V80h2.3v-5.9H56zM43 34.2h-7.2V26h-2.6v8.2H26v2.5h7.2V45h2.6v-8.3H43zM80 48.8h-4.8V43h-2.3v5.8H68v2.3h4.9V57h2.3v-5.8H80zM74 63.3h-7.2V55h-2.7v8.3H57v2.5h7.2V74h2.7v-8.2H74zM56 25.7h-5.1V20H49v5.7h-5v1.7h5.1V33H51v-5.6h5zM32 49.2h-5.1V44H25v5.2h-5v1.6h5.1V56H27v-5.2h5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-qofj802d2h";
freezeTemplate(tmpl);
