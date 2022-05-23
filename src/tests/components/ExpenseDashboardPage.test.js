import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('should handle ExpenseDashboardPage correctly', () => {

    const wrapper = shallow(<ExpenseDashboardPage />)
    //expect(wrapper.find('<Link ').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();

})