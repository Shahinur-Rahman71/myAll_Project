import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../Auth';

const Navbar = () => {
    const style={
        color: 'green',
        fontWeight: 'bold'
    }
    return (
        <nav>
            <NavLink activeStyle={style} exact to="/"> Home </NavLink>
            <NavLink activeStyle={style} to="/contact"> Contact </NavLink>
            <NavLink activeStyle={style} to="/about"> About </NavLink>
            { Auth.isLogin ? <NavLink activeStyle={style} to="/logout"> Logout </NavLink>: null }
        </nav>
    );
};

export default Navbar;