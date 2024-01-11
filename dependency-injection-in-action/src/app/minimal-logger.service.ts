// Class used as a "narrowing" interface that exposes a minimal logger
// Other members of the actual implementation are invisible
export abstract class MinimalLogger {
  abstract logs: string[];
  abstract logInfo: (msg: string) => void;
}

/*
// Transpiles to:
  var MinimalLogger = (function () {
    function MinimalLogger() {}
    return MinimalLogger;
  }());
  exports("MinimalLogger", MinimalLogger);
*/

// See https://stackoverflow.com/questions/43154832/unexpected-token-export-in-angular-app-with-systemjs-and-typescript/
export const _ = 0;
