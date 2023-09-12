import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./project.css";

import _implicitScopedStylesheets from "./project.scoped.css?scoped=true";

import _lightningBadge from "lightning/badge";
import _lightningCard from "lightning/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-page-header${0}"${2}><div class="slds-page-header__row${0}"${2}><div class="slds-page-header__col-title${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><div class="slds-page-header__name${0}"${2}><div class="slds-page-header__name-title${0}"${2}><h1${3}><span class="slds-page-header__title slds-truncate${0}" title="Rohde Corp - 80,000 Widgets"${2}>Projects</span></h1></div></div><p class="slds-page-header__name-meta${0}"${2}>20+ Projects Worked Upon</p></div></div></div></div></div>`;
const $fragment2 = parseFragment`<b${3}>Objective/Scope:</b>`;
const $fragment3 = parseFragment`<hr${3}>`;
const $fragment4 = parseFragment`<b${3}>Responsibilities:</b>`;
const stc0 = {
  classMap: {
    "project-section": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical": true
  },
  key: 3
};
const stc2 = {
  "experiance-card": true,
  "slds-m-top_medium": true,
  "slds-p-top_xx-small": true
};
const stc3 = {
  classMap: {
    "slds-p-horizontal_small": true
  },
  key: 5
};
const stc4 = {
  key: 6
};
const stc5 = {
  key: 13
};
const stc6 = {
  attrs: {
    "slot": "footer"
  },
  key: 15
};
const stc7 = {
  "slds-badge_inverse": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, c: api_custom_element} = $api;
  return [api_element("section", stc0, [api_static_fragment($fragment1(), 2), api_element("div", stc1, api_iterator($cmp.projects, function (proj) {
    return api_custom_element("lightning-card", _lightningCard, {
      classMap: stc2,
      props: {
        "title": proj.title
      },
      key: api_key(4, proj.title)
    }, [api_element("div", stc3, [api_element("div", stc4, [api_static_fragment($fragment2(), 8), api_text(" " + api_dynamic_text(proj.objective)), api_static_fragment($fragment3(), 10), api_static_fragment($fragment4(), 12), api_element("ul", stc5, api_iterator(proj.responsibilities, function (resp) {
      return api_element("li", {
        key: api_key(14, resp)
      }, [api_text(api_dynamic_text(resp))]);
    }))])]), api_element("p", stc6, api_iterator(proj.clouds, function (cloud) {
      return api_custom_element("lightning-badge", _lightningBadge, {
        classMap: stc7,
        props: {
          "label": cloud
        },
        key: api_key(16, cloud)
      });
    }))]);
  }))])];
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
tmpl.stylesheetToken = "lwc-6i70ho9r7pp";
freezeTemplate(tmpl);
