import React from "react";
import Header from "./Header";
import ExpenseListFilters from "./ExpenseListFilters";

import ExpenseList from "./ExpenseList";



const ExpenseDashboardPage = () => (
    <div>
    <ExpenseListFilters />
    <ExpenseList />
    
    </div>
);

export default ExpenseDashboardPage;