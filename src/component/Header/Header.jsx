import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <div>
            <h2>This is my Home page</h2>
            <ul >
                
                <Link className='style1' to={'/'}>Home</Link>
                <Link className='style1' to={'/Data'}>Data</Link>
                <Link className='style1' to={'/Contract'}>Contract</Link>
                <Link className='style1' to={'/About'}>About</Link>
            </ul>
            
        </div>
    );
};

export default Header;