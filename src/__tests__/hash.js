jest.dontMock('../hash')
jest.dontMock('crypto')
jest.dontMock('json-stable-stringify')
const hash = require('../hash').default

describe('hash', () => {
  it('hashes strings', () => {
    expect(hash('foo')).toBe('b2213295d564916f89a6a42455567c87c3f480fcd7a1c15e220f17d7169a790b')
    expect(hash('bar')).toBe('4c293ff010a730f0972761331d1b5678478d425c2dc5cefd16d8f20059e497f3')
  })

  it('hashes objects deterministically', () => {
    const ITERATIONS = 10
    for (let i = 0; i < ITERATIONS; i++) {
      const obj = {}
      for (let j = 0; j < ITERATIONS; j++) {
        obj[j] = j
      }
      obj[i] = i

      expect(hash(obj)).toBe('6d421d6a40549b046564e8a569ef8cb25e5096d2fe25d826ea88e6e5cfa534f0')
    }
  })
})
