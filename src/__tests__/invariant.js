jest.dontMock('../invariant')
const invariant = require('../invariant').default

describe('invariant', () => {
  it('does nothing when the condition is truthy', () => {
    expect(() => invariant(true, 'test')).not.toThrow()
  })

  it('throws an error when the condition is falsy', () => {
    expect(() => invariant(false, 'test')).toThrow('test')
  })
})
