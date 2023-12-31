export const nodeOptionsToArgv = (no: string | undefined): string[] => {
  if (!no) return []
  const argv = []
  let escaping = false
  let inquote = false
  let tokStart = 0
  let tok = ''
  for (let i = 0; i < no.length; i++) {
    const c = no.charAt(i)
    switch (c) {
      case '"':
        if (escaping) {
          tok += no.slice(tokStart, i - 1) + '"'
          tokStart = i + 1
          escaping = false
        } else if (inquote) {
          tok += no.slice(tokStart, i)
          tokStart = i + 1
          inquote = false
        } else {
          inquote = true
          tok += no.slice(tokStart, i)
          tokStart = i + 1
        }
        continue

      case '\\':
        if (inquote) {
          escaping = true
        }
        continue

      case ' ':
        if (inquote) continue
        tok += no.slice(tokStart, i)
        tokStart = i + 1
        argv.push(tok)
        tok = ''
        continue

      default:
        escaping = false
        continue
    }
  }
  if (inquote) {
    return []
  }
  tok += no.slice(tokStart)
  argv.push(tok)
  return argv
}
