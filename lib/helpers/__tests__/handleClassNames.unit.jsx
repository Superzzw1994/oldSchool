import classes from '../handleClassNames'
describe('classes', () => {
  it('接收用户的className', () => {
    const result = classes('test')
    expect(result).toEqual('test')
  })
  it('接收多个className', () => {
    const result = classes('test', 'doubleTest')
    expect(result).toEqual('test doubleTest')
  })
  it('接收的className中存在undefined', () => {
    const result = classes('test', undefined)
    expect(result).toEqual('test')
  })
  it('接收的className中存在多个空值', () => {
    const result = classes(null, undefined, '')
    expect(result).toEqual('')
  })
  it('接收的className中存在多个空值且存在中文', () => {
    const result = classes(null, undefined, '', '中文')
    expect(result).toEqual('中文')
  })
})