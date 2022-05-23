import React from 'react';
import { shallow } from 'enzyme';

import Provider from 'react-redux';
import ExpenseListFilters from '../../components/ExpenseListFilters';
//import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/test-filters';

import { store } from '../../store/configureStore'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

});

test('should render ExpenseListFilters correctly', () => {


    wrapper = shallow(
      <Provider store={store}>
      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      </Provider>
    );

  expect(wrapper).toMatchSnapshot();
});