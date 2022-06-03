import { deepCopy } from './../../src/helpers'

describe('testing some individual functions', () => {
  const emptyArr = []
  const emptyObj = {}
  const difficultObj = { a: 'a', b: ['c', 'd', { e: 'e' }], f: { g: 'g' } }
  const difficultArray = ['a', ['b', { c: 'c', d: ['e', 'f'] }]]

  test('should be the another but similar', () => {
    const emptyArrCopy = deepCopy(emptyArr)
    expect(emptyArrCopy).not.toBe(emptyArr)
    expect(emptyArrCopy).toEqual(emptyArr)

    const emptyObjCopy = deepCopy(emptyObj)
    expect(emptyObjCopy).not.toBe(emptyObj)
    expect(emptyObjCopy).toEqual(emptyObj)

    const difficultObjCopy = deepCopy(difficultObj)
    expect(difficultObjCopy).not.toBe(difficultObj)
    expect(difficultObjCopy.b[2]).not.toBe(difficultObj.b[2])
    expect(difficultObjCopy).toEqual(difficultObj)

    const difficultArrayCopy = deepCopy(difficultArray)
    expect(difficultArrayCopy).not.toBe(difficultArray)
    expect(difficultArrayCopy[1][1]).not.toBe(difficultArray[1][1])
    expect(difficultArrayCopy).toEqual(difficultArray)
  })
})
