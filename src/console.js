
const isDebug = true;

console.debug = () => {};
console.info = () => {};
if( isDebug ) {
  console.debug = console.log.bind(window.console, "%cDebug", "background: #222; color: #ff0000");
  console.info  = console.log.bind(window.console, "%cInfo", "background: #222; color: #00ff00");
  console.warn  = console.log.bind(window.console, "%cWarn", "background: #222; color: #ff5555");
}