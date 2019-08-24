function add (a: number, b: number): number {
  return a + b
}

describe('first test', () => {
  it('1 = 1', () => {
    expect(add(1, 3)).toEqual(4);
  })
})