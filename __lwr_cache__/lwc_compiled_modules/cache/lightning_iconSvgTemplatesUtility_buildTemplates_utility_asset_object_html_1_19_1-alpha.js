import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_object.css";

import _implicitScopedStylesheets from "./asset_object.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45.49 2H6.51a2.318 2.318 0 00-2.26 2.26v38.97a2.318 2.318 0 002.26 2.26h4.99v2.26a2.318 2.318 0 002.26 2.26h2.58a2.318 2.318 0 002.26-2.26v-2.34h14.82v2.34a2.318 2.318 0 002.26 2.26h2.58a2.318 2.318 0 002.26-2.26v-2.34h4.99a2.318 2.318 0 002.26-2.26V4.26A2.318 2.318 0 0045.51 2zM13.11 17.62c-.03-.42.29-.78.71-.81H17.14c.42-.03.78.29.81.71V29.7c.03.42-.29.78-.71.81H13.92a.761.761 0 01-.81-.71V17.62zm25.77 16.03c.03.42-.29.78-.71.81H13.92a.761.761 0 01-.81-.71v-.91c-.03-.42.29-.78.71-.81h24.26c.42-.03.78.29.81.71v.91zM19.55 29.7V17.62c-.03-.42.29-.78.71-.81H21.97c.42-.03.78.29.81.71V29.7c.03.42-.29.78-.71.81H20.36a.761.761 0 01-.81-.71v-.1zm5.64 0V17.62c-.03-.42.29-.78.71-.81H29.22c.42-.03.78.29.81.71V29.7c.03.42-.29.78-.71.81H26a.761.761 0 01-.81-.71v-.1zm6.36 0V17.62c0-.44.36-.81.81-.81s.81.36.81.81V29.7c0 .44-.36.81-.81.81s-.81-.36-.81-.81zm3.95 0V17.62c-.03-.42.29-.78.71-.81H37.92c.42-.03.78.29.81.71V29.7c.03.42-.29.78-.71.81H36.31a.761.761 0 01-.81-.71v-.1zm3.38-15.3c.03.42-.29.78-.71.81H13.92a.761.761 0 01-.81-.71v-.91c-.03-.42.29-.78.71-.81h24.26c.42-.03.78.29.81.71v.91z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-63p1ouu0r9i";
freezeTemplate(tmpl);
