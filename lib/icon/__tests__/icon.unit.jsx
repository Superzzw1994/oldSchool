import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme'
import React from 'react'
import Icon from '../icon'

describe('icon', () => {
  it('Icon组件快照测试', () => {
    const json = renderer.create(<Icon/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('测试点击事件', () => {
    const fn = jest.fn()
    const component = mount(<Icon name='zzw' onClick={fn}></Icon>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})