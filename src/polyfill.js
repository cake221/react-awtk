/* global globalThis */
// import * as os from 'os'
globalThis.process = { env: { NODE_ENV: 'development' } }
// globalThis.setTimeout = os.setTimeout
globalThis.setTimeout = function(callback, after, arg1, arg2, arg3){ callback() }
globalThis.console.warn = console.log
globalThis.console.error = () => {}
