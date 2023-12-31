import { fileURLToPath } from 'url'

const p = process as NodeJS.Process & {
  _eval?: string
}

export const fakeMains = ['<eval>', '<repl>', '<unknown>']

export const getMain = () => {
  const argv1 = p.argv[1]
  return argv1?.startsWith('file://')
    ? fileURLToPath(argv1)
    : typeof argv1 === 'string'
    ? argv1
    : p._eval
    ? '<eval>'
    : Object.getOwnPropertyDescriptor(globalThis, 'repl')
    ? '<repl>'
    : '<unknown>'
}
