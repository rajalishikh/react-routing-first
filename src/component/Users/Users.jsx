import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css';
const Users = () => {
    const users=useLoaderData()
    return (
        <div>
            <h3>Here is Our Total Users:{users.length}</h3>
            <div className='style2'>
            {
                users.map(item=><User item={item}></User>)
            }
            </div>
            
        </div>
    );
};

export default Users;