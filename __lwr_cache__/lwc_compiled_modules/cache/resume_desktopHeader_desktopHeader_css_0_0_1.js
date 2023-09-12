function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".my-icon" + shadowSelector + " {--slds-c-icon-color-foreground-default: orange;--slds-c-icon-color-background: #eef4ff;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];