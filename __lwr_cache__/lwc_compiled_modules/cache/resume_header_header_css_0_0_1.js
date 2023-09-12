function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".resume-header" + shadowSelector + " {display: flex;justify-content: space-between;align-items: center;padding: 1rem;background-color: #f0f0f0;}.header-content" + shadowSelector + " h1" + shadowSelector + " {margin: 0;color: #333;}.header-content" + shadowSelector + " .subtitle" + shadowSelector + " {margin: 0;color: #666;}.contact-info" + shadowSelector + " {margin: 0;}.header-nav" + shadowSelector + " ul" + shadowSelector + " {list-style: none;padding: 0;margin: 0;display: flex;}.header-nav" + shadowSelector + " li" + shadowSelector + " {margin-right: 1rem;}.header-nav" + shadowSelector + " a" + shadowSelector + " {text-decoration: none;color: #333;}.slds-page-header__name-meta" + shadowSelector + " a" + shadowSelector + " {text-decoration: none;color: inherit;}.slds-page-header__name-meta" + shadowSelector + " a:hover" + shadowSelector + ", .slds-page-header__name-meta" + shadowSelector + " a:focus" + shadowSelector + " {text-decoration: underline;}@media print {.hide-details-on-print" + shadowSelector + " {display: none;}}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];