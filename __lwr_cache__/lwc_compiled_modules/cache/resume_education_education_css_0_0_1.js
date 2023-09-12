function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".education-section" + shadowSelector + " {margin: 2rem 0;}.slds-truncate" + shadowSelector + " {text-overflow: clip !important;white-space: normal !important;}.education-card" + shadowSelector + " {page-break-inside: avoid;}.education-section" + shadowSelector + " {page-break-inside: avoid;}hr" + shadowSelector + " {margin: 2px 0px;}.my-icon" + shadowSelector + " {--slds-c-icon-color-foreground-default: orange;--slds-c-icon-color-background: white;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];