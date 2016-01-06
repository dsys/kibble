import stringify from 'json-stable-stringify'
import { createHash } from 'crypto'

export default function hash (val) {
  const data = Buffer.isBuffer(val) ? val : stringify(val)
  return createHash('sha256').update(data).digest('hex')
}
