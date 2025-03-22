import React from 'react';
import './user.css';
const User = ({item}) => {
    console.log(item)
    const {name,phone,email}=item
    return (
        <div className='style'>
            <h2>Name:{name}</h2>
            <p>Phone Number:{phone}</p>
            <p>Email:{email}</p>
            
        </div>
    );
};

export default User;