import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'
import Header from "./Header";

const NotFoundPage = () => (
    <div>
      This is your 404! <Link to="/">Go home </Link>
      
    </div>
);

export default NotFoundPage