// commonjs style loader hook, modifying require.extensions
import { addHook } from 'pirates'
import { getExclude } from './get-exclude.js'
import { getProcessInfo } from './get-process-info.js'
import { saveLineLengths } from './line-lengths.js'

const kRegisterRequire = Symbol.for('@tapjs/processinfo.registerRequire')
const g = global as typeof globalThis & {
  [kRegisterRequire]?: boolean
}

export const register = () => {
  if (g[kRegisterRequire]) return
  g[kRegisterRequire] = true
  // by default we include everything in processInfo.files
  const exclude = getExclude('_TAPJS_PROCESSINFO_EXCLUDE_', false)
  addHook(
    (code, filename) => {
      getProcessInfo().files.push(filename)
      saveLineLengths(filename, code)
      return code
    },
    {
      exts: ['.js', '.cjs', '.ts', '.cts', '.jsx', '.tsx'],
      matcher: filename => !exclude.test(filename),
    }
  )
}
