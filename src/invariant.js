import _ from 'lodash'
import stringify from 'json-stable-stringify'

export default function invariant (condition, message) {
  if (!condition) {
    const err = Error(message)
    err.name = 'Invariant Violation'
    err.framesToPop = 1
    throw err
  }
}

const invariantFns = {
  fail (message) {
    invariant(false, message)
  },

  equal (expected, actual, message) {
    if (!_.isEqual(expected, actual)) {
      invariant.fail(`${message}\n  Expected: ${stringify(expected)}\n  Actual:   ${stringify(actual)}`)
    }
  }
}

for (let fnName in invariantFns) {
  invariant[fnName] = invariantFns[fnName]
}
