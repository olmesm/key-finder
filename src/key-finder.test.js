/* eslint-env jest */
const keyFinder = require('./index')

const key = 'my-key'
let keyObject

describe('keyFinder', () => {
  beforeEach(() => {
    keyObject = {
      'sample-key-1': undefined,
      'sample-key-2': undefined,
      'sample-key-3': undefined
    }
  })

  test('returns undefined if no key exists', () => {
    expect(keyFinder(keyObject, key)).toEqual(undefined)
  })

  test('returns key name if key exists', () => {
    keyObject[key] = undefined
    expect(keyFinder(keyObject, key)).toEqual(key)
  })

  test('returns object key name even if in different case', () => {
    const upperCaseKey = key.toUpperCase()
    keyObject[upperCaseKey] = undefined

    expect(keyFinder(keyObject, key)).toEqual(upperCaseKey)
  })
})
