function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".skills-container" + shadowSelector + " {gap: 0.5rem;}.skill-pill" + shadowSelector + " {border-radius: 15px;background-color: #0070d2;color: white;padding: 0.25rem 1rem;transition: all 0.2s;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);}.skill-pill:hover" + shadowSelector + " {background-color: #005fb2;box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);transform: translateY(-1px);}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];