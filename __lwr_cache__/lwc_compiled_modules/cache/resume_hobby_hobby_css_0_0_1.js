function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "hr" + shadowSelector + " {margin: 5px 0px;}.hobby-card" + shadowSelector + "{page-break-inside: avoid;}.hobbies-section" + shadowSelector + "{page-break-inside: avoid;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];