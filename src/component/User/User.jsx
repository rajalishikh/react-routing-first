import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './user.css';
const User = ({item}) => {
    
    const {name,phone,email,id}=item;
    const navigate=useNavigate()
    function handleDetails(){
        navigate(-1)

    }
    return (
        <div className='style'>
            <h2>Name:{name}</h2>
            <p>Phone Number:{phone}</p>
            <p>Email:{email}</p>
            <Link to={`/user/${id}`}>
            <button>Click me</button>
            </Link>
            <button onClick={handleDetails}>Previous page </button>

            
        </div>
    );
};

export default User;