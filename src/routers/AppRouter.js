import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import CountStateHook from '../components/CountStateHook';

import '../styles/styles.scss'
import AnotherDullPage from '../components/AnotherDullPage';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
       <Route path="/" element={<ExpenseDashboardPage />} />

        <Route path="create" element={<AddExpensePage />} />
        <Route path="/edit/:id" element={<EditExpensePage />} />

        <Route path="help" element={<HelpPage />} />
        <Route path="countState" element={<CountStateHook />} />
        <Route path="anotherPage" element={<AnotherDullPage />} />

        <Route path='header' element={<Header />} />
        <Route path="*" element={<NotFoundPage />} />

    </Routes>
    </div>
</BrowserRouter>
)

export default AppRouter;

