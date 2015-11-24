# kibble

[![TravisCI shield](https://img.shields.io/travis/pavlovml/kibble.svg)](https://travis-ci.org/pavlovml/kibble) [![npm shield](https://img.shields.io/npm/v/kibble.svg)](https://www.npmjs.com/package/kibble) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Useful JavaScript utilities.

## Installation

    $ npm install kibble --save

## Usage

```javascript
import { invariant, hash } from 'kibble'

// Specify runtime invariants.
invariant(2 + 2 === 4, "You're doing something very wrong.")

// Generate deterministic hashes for JSON values.
hash({ foo: 'bar', baz: 'qux' }) // => 'e206c130fcd88e647754337f071e98097d80a408c25a40ca61d3fb2d06c7dc47'

// More coming soon...
```

## Development

Kibble uses [JavaScript Standard Style](https://github.com/feross/standard), [Babel](https://babeljs.io/) for ES6+ support, and [Jest](http://facebook.github.io/jest/) for testing.

    $ git clone git@github.com:pavlovml/kibble.git
    $ npm test

To run the tests on file changes:

    $ npm test -- --watch

## License

[BSD 3-Clause](https://github.com/pavlovml/kibble/blob/master/LICENSE)
