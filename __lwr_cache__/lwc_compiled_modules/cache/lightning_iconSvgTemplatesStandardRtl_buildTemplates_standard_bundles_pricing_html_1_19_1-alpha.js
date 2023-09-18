import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bundles_pricing.css";

import _implicitScopedStylesheets from "./bundles_pricing.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.8 29.92c-.8 0-1.5-.4-1.8-1.1l-3.8-7.41c-.3-.6.2-1.4.9-1.4h19.8c.7 0 1.2.7.9 1.4l-4 7.41c-.3.7-1 1.1-1.8 1.1H44.8zm-.8 6.01h11.9c9.9 0 18.1 8.11 18.1 18.03v20.03C74 77.3 71.2 80 67.9 80H32c-3.3 0-6-2.7-6-6.01V53.96c0-9.92 8.1-18.03 18-18.03zm11.8 8.22L48.4 44c-.3 0-.59.05-.87.16-.27.11-.52.28-.73.49L34.64 56.8c-.41.42-.64.99-.64 1.58s.23 1.15.64 1.58l13.41 13.41c.42.41.99.64 1.58.64s1.15-.23 1.58-.64l12.15-12.16c.21-.21.38-.46.49-.73s.17-.57.16-.87l-.2-7.45c0-.29-.06-.57-.17-.84-.11-.27-.27-.51-.48-.71l-5.8-5.8c-.44-.37-.98-.6-1.55-.65h-.01zM43.09 57l1.2-1.15a.474.474 0 01.59-.14c.07.03.12.08.17.14l7.15 7.05c.06.05.11.11.15.18.03.07.05.15.05.22s-.02.15-.05.22-.09.13-.15.18L51 64.9c-.05.06-.11.11-.18.15-.07.03-.15.05-.22.05s-.15-.02-.22-.05a.517.517 0 01-.18-.15l-7.1-7.1a.655.655 0 01-.15-.18c-.03-.07-.05-.15-.05-.22s.02-.15.05-.22.09-.13.15-.18zm3.35-3.35l1.2-1.2c.11-.1.25-.15.4-.15s.29.05.4.15l7.1 7.1c.06.05.11.11.15.18.03.07.05.15.05.22s-.02.15-.05.22-.09.13-.15.18l-1.2 1.2c-.05.06-.11.11-.18.15s-.15.05-.22.05-.15-.02-.22-.05-.13-.09-.18-.15l-7.1-7.1c-.06-.05-.11-.11-.15-.18s-.05-.15-.05-.22.02-.15.05-.22.09-.13.15-.18zm11.52-5.36c.43.09.83.3 1.14.61.41.42.64.99.64 1.58s-.23 1.15-.64 1.58c-.31.31-.71.52-1.14.61s-.88.04-1.29-.13c-.41-.17-.75-.45-1-.82-.24-.37-.37-.8-.37-1.24s.13-.87.37-1.24.59-.65 1-.82.85-.21 1.29-.13z" fill-rule="evenodd"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1aude4pipfk";
freezeTemplate(tmpl);
