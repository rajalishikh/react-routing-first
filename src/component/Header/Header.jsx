import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <div>
            <h2>This is my Home page</h2>
            <nav >
                
                <NavLink  to={'/'}>Home</NavLink>
                <NavLink  to={'/Data'}>Data</NavLink>
                <NavLink  to={'/Contract'}>Contract</NavLink>
                <NavLink  to={'/About'}>About</NavLink>
                <NavLink  to={'/Users'}>Users</NavLink>
                <NavLink  to={'/Post'}>Post</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;