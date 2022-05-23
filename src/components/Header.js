import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'

//import '../styles/styles.scss'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/"         
            className={({ isActive }) => isActive ? 'is-active' : undefined}
        >Dashboard</NavLink>
        <NavLink to="/create"
            className={({ isActive }) => isActive ? 'is-active' : undefined}
        >Create Expense</NavLink>
        <NavLink to="/edit" 
            className={({ isActive }) => isActive ? 'is-active' : undefined}
        >Edit Expense</NavLink>
        <NavLink to="/help" 
            className={({ isActive }) => isActive ? 'is-active' : undefined}
        >Help</NavLink>
        <NavLink to="/countState" 
            className={({ isActive }) => isActive ? 'is-active' : undefined}
        > **CountState</NavLink>
        <NavLink to="/anotherPage" 
            className={({ isActive }) => isActive ? 'is-active' : undefined}
        > **AnotherPage</NavLink>
    </header>
)

export default Header;

