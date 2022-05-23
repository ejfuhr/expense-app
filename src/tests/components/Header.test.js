
import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should handle Header correctly', () => {

    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();

/*     const renderer = new ReactShallowRenderer()
    renderer.render(<Header/>)

    expect(renderer.getRenderOutput()).toMatchSnapshot()
    console.log(renderer.getRenderOutput()) */

})

/*
test('should should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout}/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
*/