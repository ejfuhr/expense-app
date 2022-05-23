import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('should handle NotFoundPage correctly', () => {

    const wrapper = shallow(<NotFoundPage />)
    //expect(wrapper.find('<Link ').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();

})