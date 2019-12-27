const expect = require('chai').expect
const { theTimeOfSpanBy } = require('../dist/index')

describe('theTimeOfSpanBy function test', () => {
  it('should return 2019-12-20', () => {
    const result = theTimeOfSpanBy('date', -7)
    expect(result).to.equal('2019-12-20')
  })
  it('should return 2019-12-31', () => {
    const result = theTimeOfSpanBy('date', 4)
    expect(result).to.equal('2019-12-31')
  })
  it('should return 2019-12-27 12:23', () => {
    const result = theTimeOfSpanBy('hour', -2)
    expect(result).to.equal('2019-12-27 12:23')
  })
  it('should return 2019-06', () => {
    const result = theTimeOfSpanBy('month', -6)
    expect(result).to.equal('2019-06')
  })
})
