import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./experience.css";

import _implicitScopedStylesheets from "./experience.scoped.css?scoped=true";

import _lightningCard from "lightning/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-page-header${0}"${2}><div class="slds-page-header__row${0}"${2}><div class="slds-page-header__col-title${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><div class="slds-page-header__name${0}"${2}><div class="slds-page-header__name-title${0}"${2}><h1${3}><span class="slds-page-header__title slds-truncate${0}" title="Rohde Corp - 80,000 Widgets"${2}>Experience</span></h1></div></div><p class="slds-page-header__name-meta${0}"${2}>4.5+ Year Experience</p></div></div></div></div></div>`;
const $fragment2 = parseFragment`<b${3}>Location:</b>`;
const $fragment3 = parseFragment`<b${3}>Tenure:</b>`;
const $fragment4 = parseFragment`<div class="slds-card__header slds-grid${0}"${2}><header class="slds-media slds-media_center slds-has-flexi-truncate${0}"${2}><div class="slds-media__body${0}"${2}><h2 class="slds-card__header-title${0}"${2}><a href="javascript:void(0);" class="slds-card__header-link slds-truncate${0}" title="[object Object]"${2}><span${3}>Experiance</span></a></h2></div></header></div>`;
const $fragment5 = parseFragment`<thead${3}><tr class="slds-text-title_caps${0}"${2}><th scope="col"${3}><div class="slds-truncate${0}" title="Position"${2}>Position</div></th><th scope="col"${3}><div class="slds-truncate${0}" title="Company"${2}>Company</div></th><th scope="col"${3}><div class="slds-truncate${0}" title="Image"${2}>From - To</div></th><th scope="col"${3}><div class="slds-truncate${0}" title="Image"${2}>Location</div></th></tr></thead>`;
const $fragment6 = parseFragment`<h3 class="slds-text-heading_small slds-p-bottom_small slds-border_bottom${0}"${2}>Description</h3>`;
const $fragment7 = parseFragment`<b${3}>Location:</b>`;
const $fragment8 = parseFragment`<b${3}>Tenure:</b>`;
const $fragment9 = parseFragment`<button class="slds-button slds-button_neutral${0}"${2}>Close</button>`;
const $fragment10 = parseFragment`<div class="slds-page-header slds-page-header_object-home${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><div class="slds-grid slds-grid_vertical-align-start slds-grid_align-spread${0}"${2}><div class="slds-col${0}"${2}><h1 class="slds-page-header__title slds-truncate${0}" title="Certifications"${2}>Experiance</h1></div></div><ul class="slds-m-top_small${0}"${2}><li class="slds-list_horizontal slds-wrap${0}"${2}><span class="slds-badge slds-theme_success slds-m-right_x-small${0}"${2}>4.5+ Years as a Professional</span><span class="slds-badge slds-theme_success slds-m-right_x-small${0}"${2}>10+ Years as a Developer by Heart</span></li></ul></div></div></div>`;
const $fragment11 = parseFragment`<b${3}>Location:</b>`;
const $fragment12 = parseFragment`<b${3}>Tenure:</b>`;
const stc0 = {
  classMap: {
    "experience-section": true
  },
  key: 1
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical": true
  },
  key: 4
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
  key: 6
};
const stc4 = {
  key: 7
};
const stc5 = {
  attrs: {
    "slot": "footer"
  },
  key: 9
};
const stc6 = {
  classMap: {
    "slds-card": true,
    "slds-m-around_medium": true,
    "nested-card": true
  },
  key: 15
};
const stc7 = {
  classMap: {
    "slds-table": true,
    "slds-table_fixed-layout": true,
    "slds-table_bordered": true,
    "slds-no-row-hover": true,
    "slds-table_cell-buffer": true
  },
  key: 18
};
const stc8 = {
  key: 21
};
const stc9 = {
  attrs: {
    "scope": "row",
    "data-label": "Position"
  },
  key: 23
};
const stc10 = {
  "slds-truncate": true
};
const stc11 = {
  attrs: {
    "data-label": "Company"
  },
  key: 25
};
const stc12 = {
  attrs: {
    "data-label": "From - To"
  },
  key: 27
};
const stc13 = {
  attrs: {
    "data-label": "Location"
  },
  key: 29
};
const stc14 = {
  "slds-modal": true,
  "slds-fade-in-open": true,
  "slds-hide": true,
  "jobDescriptionModal": true
};
const stc15 = {
  classMap: {
    "slds-modal__container": true
  },
  key: 32
};
const stc16 = {
  classMap: {
    "slds-modal__header": true
  },
  key: 33
};
const stc17 = {
  "slds-text-heading_medium": true,
  "slds-hyphenate": true
};
const stc18 = {
  "slds-modal__content": true,
  "slds-p-around_medium": true
};
const stc19 = {
  classMap: {
    "slds-size_1-of-1": true,
    "slds-p-around_small": true
  },
  key: 36
};
const stc20 = {
  classMap: {
    "slds-card": true,
    "experience-card": true,
    "slds-p-around_medium": true,
    "slds-box": true,
    "slds-box_elevation-small": true
  },
  key: 37
};
const stc21 = {
  classMap: {
    "slds-text-heading_small": true,
    "slds-p-bottom_small": true,
    "slds-border_bottom": true
  },
  key: 38
};
const stc22 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true,
    "slds-p-top_medium": true
  },
  key: 39
};
const stc23 = {
  key: 40
};
const stc24 = {
  key: 43
};
const stc25 = {
  "slds-p-bottom_x-small": true
};
const stc26 = {
  classMap: {
    "slds-card__footer": true,
    "slds-border_top": true,
    "slds-p-top_small": true
  },
  key: 45
};
const stc27 = {
  classMap: {
    "slds-text-color_weak": true
  },
  key: 46
};
const stc28 = {
  classMap: {
    "slds-modal__footer": true
  },
  key: 51
};
const stc29 = {
  "slds-backdrop": true,
  "slds-backdrop_open": true,
  "slds-hide": true,
  "jobDescriptionModalBackdrop": true
};
const stc30 = {
  classMap: {
    "experience-section": true,
    "slds-m-top_x-large": true
  },
  key: 56
};
const stc31 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 60
};
const stc32 = {
  "slds-size_1-of-1": true,
  "slds-medium-size_1-of-2": true,
  "slds-p-around_small": true
};
const stc33 = {
  classMap: {
    "slds-card": true,
    "experience-card": true,
    "slds-p-around_medium": true,
    "slds-box": true,
    "slds-box_elevation-small": true
  },
  key: 62
};
const stc34 = {
  classMap: {
    "slds-text-heading_small": true,
    "slds-p-bottom_small": true,
    "slds-border_bottom": true
  },
  key: 63
};
const stc35 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true,
    "slds-p-top_medium": true
  },
  key: 64
};
const stc36 = {
  key: 65
};
const stc37 = {
  classMap: {
    "slds-card__footer": true,
    "slds-border_top": true,
    "slds-p-top_small": true
  },
  key: 67
};
const stc38 = {
  classMap: {
    "slds-text-color_weak": true
  },
  key: 68
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, c: api_custom_element, fr: api_fragment, b: api_bind, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [$cmp.printFormat ? api_fragment(0, [api_element("section", stc0, [api_static_fragment($fragment1(), 3), api_element("div", stc1, api_iterator($cmp.experiences, function (exp) {
    return api_custom_element("lightning-card", _lightningCard, {
      classMap: stc2,
      props: {
        "title": exp.title2
      },
      key: api_key(5, exp.title2)
    }, [api_element("div", stc3, [api_element("ul", stc4, api_iterator(exp.description, function (desc) {
      return api_element("li", {
        key: api_key(8, desc)
      }, [api_text(api_dynamic_text(desc))]);
    }))]), api_element("p", stc5, [api_static_fragment($fragment2(), 11), api_text(" " + api_dynamic_text(exp.location) + " | "), api_static_fragment($fragment3(), 13), api_text(" " + api_dynamic_text(exp.dates))])]);
  }))])], 0) : null, $cmp.tableFormat ? api_fragment(14, [api_element("div", stc6, [api_static_fragment($fragment4(), 17), api_element("table", stc7, [api_static_fragment($fragment5(), 20), api_element("tbody", stc8, api_iterator($cmp.experiences, function (exper) {
    return api_element("tr", {
      key: api_key(22, exper.title)
    }, [api_element("th", stc9, [api_element("div", {
      classMap: stc10,
      attrs: {
        "title": exper.title,
        "data-id": exper.id
      },
      key: 24,
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.openModal))
      }
    }, [api_text(api_dynamic_text(exper.title))])]), api_element("td", stc11, [api_element("div", {
      classMap: stc10,
      attrs: {
        "title": exper.company
      },
      key: 26
    }, [api_text(api_dynamic_text(exper.company))])]), api_element("td", stc12, [api_element("div", {
      classMap: stc10,
      attrs: {
        "title": exper.dates
      },
      key: 28
    }, [api_text(api_dynamic_text(exper.dates))])]), api_element("td", stc13, [api_element("div", {
      classMap: stc10,
      attrs: {
        "title": exper.location
      },
      key: 30
    }, [api_text(api_dynamic_text(exper.location))])])]);
  }))])])], 0) : null, api_element("div", {
    classMap: stc14,
    attrs: {
      "tabindex": "-1",
      "role": "dialog",
      "id": api_scoped_id("jobDescriptionModal")
    },
    key: 31
  }, [api_element("div", stc15, [api_element("header", stc16, [api_element("h2", {
    classMap: stc17,
    attrs: {
      "id": api_scoped_id("modal-heading-01")
    },
    key: 34
  }, [api_text("Job Description")])]), api_element("div", {
    classMap: stc18,
    attrs: {
      "id": api_scoped_id("modal-content-id-1")
    },
    key: 35
  }, [api_element("div", stc19, [api_element("div", stc20, [api_element("h2", stc21, [api_text(api_dynamic_text($cmp.selectedJob.title2))]), api_element("div", stc22, [api_element("div", stc23, [api_static_fragment($fragment6(), 42), api_element("ul", stc24, api_iterator($cmp.selectedJob.description, function (desc) {
    return api_element("li", {
      classMap: stc25,
      key: api_key(44, desc)
    }, [api_text(api_dynamic_text(desc))]);
  }))])]), api_element("footer", stc26, [api_element("p", stc27, [api_static_fragment($fragment7(), 48), api_text(" " + api_dynamic_text($cmp.selectedJob.location) + " | "), api_static_fragment($fragment8(), 50), api_text(api_dynamic_text($cmp.selectedJob.dates))])])])])]), api_element("footer", stc28, [api_static_fragment($fragment9(), 53, {
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.closeModal))
    }
  })])])]), api_element("div", {
    classMap: stc29,
    attrs: {
      "id": api_scoped_id("jobDescriptionModalBackdrop")
    },
    key: 54
  }), $cmp.webFormat ? api_fragment(55, [api_element("section", stc30, [$cmp.webFormat ? api_fragment(57, [api_static_fragment($fragment10(), 59)], 0) : null, api_element("div", stc31, api_iterator($cmp.experiences, function (exp) {
    return api_element("div", {
      classMap: stc32,
      key: api_key(61, exp.title2)
    }, [api_element("div", stc33, [api_element("h2", stc34, [api_text(api_dynamic_text(exp.title2))]), api_element("div", stc35, [api_element("ul", stc36, api_iterator(exp.description, function (desc) {
      return api_element("li", {
        classMap: stc25,
        key: api_key(66, desc)
      }, [api_text(api_dynamic_text(desc))]);
    }))]), api_element("footer", stc37, [api_element("p", stc38, [api_static_fragment($fragment11(), 70), api_text(" " + api_dynamic_text(exp.location) + " | "), api_static_fragment($fragment12(), 72), api_text(" " + api_dynamic_text(exp.dates))])])])]);
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
tmpl.stylesheetToken = "lwc-32davs42nl2";
freezeTemplate(tmpl);
