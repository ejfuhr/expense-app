import React, {useState} from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'



const CountStateHook = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
        <p>you clicked {count} times</p>
        <button onClick={
            () => setCount(count + 1)
        }>Click me to count</button>
        <p>
        This is your 404! statement  <Link to="/">Go home </Link>
        </p>
        </div>
    );
}


export default CountStateHook