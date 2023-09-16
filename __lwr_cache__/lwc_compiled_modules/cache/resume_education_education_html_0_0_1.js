import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./education.css";

import _implicitScopedStylesheets from "./education.scoped.css?scoped=true";

import _lightningProgressStep from "lightning/progressStep";
import _lightningProgressIndicator from "lightning/progressIndicator";
import _lightningIcon from "lightning/icon";
import _lightningCard from "lightning/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-page-header${0}"${2}><div class="slds-page-header__row${0}"${2}><div class="slds-page-header__col-title${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><div class="slds-page-header__name${0}"${2}><div class="slds-page-header__name-title${0}"${2}><h1${3}><span class="slds-page-header__title slds-truncate${0}" title="Rohde Corp - 80,000 Widgets"${2}>Education</span></h1></div></div></div></div></div></div></div>`;
const $fragment2 = parseFragment`<h1 class="slds-text-heading_large${0}"${2}>Education Summary</h1>`;
const $fragment3 = parseFragment`<hr class="slds-divider${0}"${2}>`;
const $fragment4 = parseFragment`<h3 class="slds-text-title slds-m-top_small slds-m-bottom_xx-small${0}"${2}>Achievements:</h3>`;
const stc0 = {
  classMap: {
    "education-section": true
  },
  key: 1
};
const stc1 = {
  classMap: {
    "slds-m-top_medium": true,
    "slds-p-top_xx-small": true,
    "slds-grid": true,
    "slds-grid_vertical": true
  },
  key: 4
};
const stc2 = {
  "slds-card": true,
  "education-card": true
};
const stc3 = {
  classMap: {
    "slds-card__header": true,
    "slds-grid": true
  },
  key: 6
};
const stc4 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true,
    "slds-has-flexi-truncate": true
  },
  key: 7
};
const stc5 = {
  classMap: {
    "slds-media__body": true
  },
  key: 8
};
const stc6 = {
  classMap: {
    "slds-card__header-title": true
  },
  key: 9
};
const stc7 = {
  classMap: {
    "slds-card__header-link": true,
    "slds-truncate": true
  },
  attrs: {
    "href": "#",
    "title": "Accounts"
  },
  key: 10
};
const stc8 = {
  key: 11
};
const stc9 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true
  },
  key: 12
};
const stc10 = {
  classMap: {
    "education-section": true,
    "slds-m-top_large": true
  },
  key: 14
};
const stc11 = {
  classMap: {
    "slds-page-header": true
  },
  key: 15
};
const stc12 = {
  classMap: {
    "slds-p-top_medium": true
  },
  key: 18
};
const stc13 = {
  props: {
    "variant": "shade",
    "type": "path",
    "currentStep": "January 2023 - December 2025"
  },
  key: 19
};
const stc14 = {
  classMap: {
    "slds-m-top_medium": true,
    "slds-p-top_medium": true,
    "slds-grid": true,
    "slds-wrap": true,
    "slds-gutters": true
  },
  key: 21
};
const stc15 = {
  "education-card": true,
  "slds-p-around_xx-small": true,
  "slds-medium-size_1-of-2": true
};
const stc16 = {
  attrs: {
    "slot": "title"
  },
  key: 23
};
const stc17 = {
  classMap: {
    "slds-media": true
  },
  key: 24
};
const stc18 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-account": true,
    "slds-m-right_small": true
  },
  key: 25
};
const stc19 = {
  classMap: {
    "my-icon": true
  },
  props: {
    "iconName": "utility:education",
    "alternativeText": "Education",
    "title": "Image"
  },
  key: 26
};
const stc20 = {
  classMap: {
    "slds-media__body": true
  },
  key: 27
};
const stc21 = {
  classMap: {
    "slds-card__header-title": true
  },
  key: 28
};
const stc22 = {
  classMap: {
    "slds-card__header-link": true,
    "slds-text-link_reset": true
  },
  attrs: {
    "href": "#"
  },
  key: 29
};
const stc23 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true
  },
  key: 30
};
const stc24 = {
  classMap: {
    "slds-text-title": true
  },
  key: 31
};
const stc25 = {
  classMap: {
    "slds-m-left_small": true,
    "slds-text-body_small": true,
    "slds-text-color_weak": true
  },
  key: 32
};
const stc26 = {
  classMap: {
    "slds-m-top_medium": true
  },
  key: 33
};
const stc27 = {
  key: 38
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, fr: api_fragment, c: api_custom_element} = $api;
  return [$cmp.printFormat ? api_fragment(0, [api_element("section", stc0, [api_static_fragment($fragment1(), 3), api_element("div", stc1, api_iterator($cmp.education, function (edu) {
    return api_element("article", {
      classMap: stc2,
      key: api_key(5, edu.institute)
    }, [api_element("div", stc3, [api_element("header", stc4, [api_element("div", stc5, [api_element("h2", stc6, [api_element("a", stc7, [api_element("span", stc8, [api_text(api_dynamic_text(edu.institute))])])])])])]), api_element("div", stc9, [api_text(api_dynamic_text(edu.degree) + " | " + api_dynamic_text(edu.duration))])]);
  }))])], 0) : null, $cmp.webFormat ? api_fragment(13, [api_element("section", stc10, [api_element("header", stc11, [api_static_fragment($fragment2(), 17), api_element("div", stc12, [api_custom_element("lightning-progress-indicator", _lightningProgressIndicator, stc13, api_iterator($cmp.timeline, function (edu) {
    return api_custom_element("lightning-progress-step", _lightningProgressStep, {
      props: {
        "label": edu.degree,
        "value": edu.duration
      },
      key: api_key(20, edu.duration)
    });
  }))])]), api_element("div", stc14, api_iterator($cmp.education, function (edu) {
    return api_custom_element("lightning-card", _lightningCard, {
      classMap: stc15,
      key: api_key(22, edu.institute)
    }, [api_element("div", stc16, [api_element("div", stc17, [api_element("div", stc18, [api_custom_element("lightning-icon", _lightningIcon, stc19)]), api_element("div", stc20, [api_element("h2", stc21, [api_element("a", stc22, [api_text(api_dynamic_text(edu.institute))])])])])]), api_element("div", stc23, [api_element("p", stc24, [api_text(api_dynamic_text(edu.degree) + " "), api_element("span", stc25, [api_text(api_dynamic_text(edu.duration))])]), edu.hasAchievement ? api_element("div", stc26, [api_static_fragment($fragment3(), 35), api_static_fragment($fragment4(), 37), api_element("ul", stc27, api_iterator(edu.achievements, function (resp) {
      return api_element("li", {
        key: api_key(39, resp)
      }, [api_text(api_dynamic_text(resp))]);
    }))]) : null])]);
  }))])], 0) : null];
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
tmpl.stylesheetToken = "lwc-3fh52teposc";
freezeTemplate(tmpl);
