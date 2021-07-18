import { testFn } from './utils'

describe('testFn', () => {
  it('should pass', () => {
    const res = testFn()

    expect(res).toBe('testFn')
  })
})
