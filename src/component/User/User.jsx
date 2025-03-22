import React from 'react';
import { Link } from 'react-router-dom';
import './user.css';
const User = ({item}) => {
    
    const {name,phone,email,id}=item
    return (
        <div className='style'>
            <h2>Name:{name}</h2>
            <p>Phone Number:{phone}</p>
            <p>Email:{email}</p>
            <Link to={`/user/${id}`}>
            <button>Click me</button>
            </Link>

            
        </div>
    );
};

export default User;