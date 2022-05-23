import selectExpenses from '../../selectors/expenses'
import moment from "moment";
const expenses = [{
    id: '1',
    description: 'Gum', 
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent', 
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf() // 4 days before. need valueOf to get the regular timestamp back (a number)
},
{
    id: '3',
    description: 'Credit Card', 
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf() // 4 days after
}]

export default [
];


test('should filter by text value', () => {
    const filters ={
        text: 'e', //to see if the description has the letter 'e' in it
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);

    //console.log('resuly', result)
});

test('should filter by startDate', ()=>{
    const filters = {
        text: '', 
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', ()=>{
    const filters = {
        text: '', 
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', ()=>{
    const filters = {
        text: '', 
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0],expenses[1]]);
});


test('should sort by amount', ()=>{
    const filters = {
        text: '', 
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});