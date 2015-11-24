import stringify from 'json-stable-stringify'
import { createHash } from 'crypto'

export default function hash (val) {
  const s = stringify(val)
  return createHash('sha256').update(s).digest('hex')
}
