import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./certification.css";

import _implicitScopedStylesheets from "./certification.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-page-header${0}"${2}><div class="slds-page-header__row${0}"${2}><div class="slds-page-header__col-title${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><h2 class="slds-page-header__title slds-truncate${0}" title="Certifications"${2}>Certifications</h2><p class="slds-text-body_small${0}"${2}>12x SF Certified</p><p class="slds-text-body_small${0}"${2}>2x PLC Accredited</p><p class="slds-text-body_small${0}"${2}>2x Copado Certified</p></div></div></div></div></div>`;
const $fragment2 = parseFragment`<div class="slds-page-header slds-page-header_object-home${0}"${2}><div class="slds-media${0}"${2}><div class="slds-media__body${0}"${2}><div class="slds-grid slds-grid_vertical-align-start slds-grid_align-spread${0}"${2}><div class="slds-col${0}"${2}><h1 class="slds-page-header__title slds-truncate${0}" title="Certifications"${2}>Certifications</h1></div></div><ul class="slds-m-top_small${0}"${2}><li class="slds-list_horizontal slds-wrap${0}"${2}><span class="slds-badge slds-theme_success slds-m-right_x-small${0}"${2}>12x SF Certified</span><span class="slds-badge slds-theme_success slds-m-right_x-small${0}"${2}>2x PLC Accredited</span><span class="slds-badge slds-theme_success slds-m-right_x-small${0}"${2}>2x Copado Certified</span></li></ul></div></div></div>`;
const $fragment3 = parseFragment`<div class="slds-card__header slds-grid${0}"${2}><header class="slds-media slds-media_center slds-has-flexi-truncate${0}"${2}><div class="slds-media__body${0}"${2}><h2 class="slds-card__header-title${0}"${2}><a href="javascript:void(0);" class="slds-card__header-link slds-truncate${0}" title="[object Object]"${2}><span${3}>Certifications</span></a></h2></div></header></div>`;
const $fragment4 = parseFragment`<thead${3}><tr class="slds-text-title_caps${0}"${2}><th scope="col"${3}><div class="slds-truncate${0}" title="Certificate Name"${2}>Certificate Name</div></th><th scope="col"${3}><div class="slds-truncate${0}" title="Issue Date"${2}>Issue Date</div></th><th scope="col"${3}><div class="slds-truncate${0}" title="Image"${2}>Certification Logo</div></th><th scope="col"${3}><div class="slds-truncate${0}" title="Image"${2}>Certificate Number</div></th></tr></thead>`;
const stc0 = {
  classMap: {
    "certification-section": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-m-top_medium": true,
    "slds-p-top_xx-small": true,
    "slds-grid": true,
    "slds-gutters": true,
    "slds-wrap": true
  },
  key: 8
};
const stc2 = {
  "slds-col": true,
  "slds-size_1-of-1": true,
  "slds-m-around_x-small": true,
  "cert-section": true
};
const stc3 = {
  classMap: {
    "slds-grid": true,
    "slds-gutters": true,
    "slds-wrap": true,
    "slds-grid_vertical-align-center": true
  },
  key: 10
};
const stc4 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-3": true,
    "slds-media": true,
    "slds-media_center": true,
    "slds-align_absolute-center": true
  },
  key: 11
};
const stc5 = {
  classMap: {
    "slds-col": true,
    "slds-size_2-of-3": true,
    "slds-align_absolute-center": true,
    "slds-text-align_left": true
  },
  key: 13
};
const stc6 = {
  key: 14
};
const stc7 = {
  classMap: {
    "cert-details": true
  },
  key: 17
};
const stc8 = {
  classMap: {
    "cert-details": true
  },
  key: 19
};
const stc9 = {
  classMap: {
    "slds-m-top_medium": true,
    "slds-p-top_xx-small": true,
    "flex-wrapper": true
  },
  key: 21
};
const stc10 = {
  classMap: {
    "grid-container": true
  },
  key: 22
};
const stc11 = {
  "cert-section": true
};
const stc12 = {
  classMap: {
    "slds-grid": true,
    "slds-gutters": true,
    "slds-wrap": true,
    "slds-grid_vertical-align-center": true
  },
  key: 24
};
const stc13 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-3": true,
    "slds-media": true,
    "slds-media_center": true,
    "slds-align_absolute-center": true
  },
  key: 25
};
const stc14 = {
  classMap: {
    "slds-col": true,
    "slds-size_2-of-3": true,
    "slds-align_absolute-center": true,
    "slds-text-align_left": true
  },
  key: 27
};
const stc15 = {
  key: 28
};
const stc16 = {
  classMap: {
    "cert-details": true
  },
  key: 31
};
const stc17 = {
  classMap: {
    "cert-details": true
  },
  key: 33
};
const stc18 = {
  classMap: {
    "slds-card": true,
    "slds-m-around_medium": true,
    "nested-card": true
  },
  key: 35
};
const stc19 = {
  classMap: {
    "slds-table": true,
    "slds-table_fixed-layout": true,
    "slds-table_bordered": true,
    "slds-no-row-hover": true,
    "slds-table_cell-buffer": true
  },
  key: 38
};
const stc20 = {
  key: 41
};
const stc21 = {
  attrs: {
    "scope": "row",
    "data-label": "Certificate Name"
  },
  key: 43
};
const stc22 = {
  "slds-truncate": true
};
const stc23 = {
  attrs: {
    "data-label": "Issue Date"
  },
  key: 45
};
const stc24 = {
  attrs: {
    "data-label": "Image"
  },
  key: 48
};
const stc25 = {
  attrs: {
    "data-label": "Issue Date"
  },
  key: 50
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, fr: api_fragment, k: api_key, h: api_element, d: api_dynamic_text, t: api_text, i: api_iterator} = $api;
  return [api_element("section", stc0, [$cmp.printFormat ? api_fragment(1, [api_static_fragment($fragment1(), 3)], 0) : null, $cmp.webFormat ? api_fragment(4, [api_static_fragment($fragment2(), 6)], 0) : null, $cmp.printFormat ? api_fragment(7, [api_element("div", stc1, api_iterator($cmp.certifications, function (cert) {
    return api_element("div", {
      classMap: stc2,
      key: api_key(9, cert.certNumber)
    }, [api_element("div", stc3, [api_element("div", stc4, [api_element("img", {
      attrs: {
        "width": "50px",
        "src": cert.certImgSrc
      },
      key: 12
    })]), api_element("div", stc5, [api_element("b", stc6, [api_text(api_dynamic_text(cert.certName))]), $cmp.printMode ? api_fragment(15, [cert.hascertNumber ? api_fragment(16, [api_element("div", stc7, [api_text(api_dynamic_text(cert.certNumber))])], 0) : null, cert.hasissueDate ? api_fragment(18, [api_element("div", stc8, [api_text(api_dynamic_text(cert.issueDate))])], 0) : null], 0) : null])])]);
  }))], 0) : null, $cmp.webFormat ? api_fragment(20, [api_element("div", stc9, [api_element("div", stc10, api_iterator($cmp.certifications, function (cert) {
    return api_element("div", {
      classMap: stc11,
      key: api_key(23, cert.certNumber)
    }, [api_element("div", stc12, [api_element("div", stc13, [api_element("img", {
      attrs: {
        "width": "100px",
        "src": cert.certImgSrc
      },
      key: 26
    })]), api_element("div", stc14, [api_element("b", stc15, [api_text(api_dynamic_text(cert.certName))]), $cmp.printMode ? api_fragment(29, [cert.hascertNumber ? api_fragment(30, [api_element("div", stc16, [api_text(api_dynamic_text(cert.certNumber))])], 0) : null, cert.hasissueDate ? api_fragment(32, [api_element("div", stc17, [api_text(api_dynamic_text(cert.issueDate))])], 0) : null], 0) : null])])]);
  }))])], 0) : null, $cmp.tableFormat ? api_fragment(34, [api_element("div", stc18, [api_static_fragment($fragment3(), 37), api_element("table", stc19, [api_static_fragment($fragment4(), 40), api_element("tbody", stc20, api_iterator($cmp.certifications, function (cert) {
    return api_element("tr", {
      key: api_key(42, cert.certNumber)
    }, [api_element("th", stc21, [api_element("div", {
      classMap: stc22,
      attrs: {
        "title": cert.certName
      },
      key: 44
    }, [api_text(api_dynamic_text(cert.certName))])]), api_element("td", stc23, [cert.hasissueDate ? api_fragment(46, [api_element("div", {
      classMap: stc22,
      attrs: {
        "title": cert.issueDate
      },
      key: 47
    }, [api_text(api_dynamic_text(cert.issueDate))])], 0) : null]), api_element("td", stc24, [api_element("img", {
      attrs: {
        "src": cert.certImgSrc,
        "alt": cert.certName,
        "width": "50"
      },
      key: 49
    })]), api_element("td", stc25, [cert.hascertNumber ? api_fragment(51, [api_element("div", {
      classMap: stc22,
      attrs: {
        "title": cert.issueDate
      },
      key: 52
    }, [api_text(api_dynamic_text(cert.certNumber))])], 0) : null])]);
  }))])])], 0) : null])];
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
tmpl.stylesheetToken = "lwc-5v6fll4re2a";
freezeTemplate(tmpl);
