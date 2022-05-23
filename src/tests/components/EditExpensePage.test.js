import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/test-expenses-data';
import { useNavigate,useParams } from 'react-router-dom';

let onSubmit, startEditExpense, startRemoveExpense, history, navigate, wrapper;

beforeEach(()=>{
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
        editExpense={editExpense}
        removeExpense={removeExpense} 
            //navigate={navigate}
            history={history}
            expense={expenses[2]} 
        />
    );
}); 

test('should render EditExpensePage correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  });