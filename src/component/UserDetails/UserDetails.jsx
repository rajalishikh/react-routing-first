import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const UserDetails=useLoaderData()
    console.log(UserDetails)
    const{name,email}=UserDetails
    return (
        <div>
            <h2>Here is the Users Details:{name}</h2>
            <p>Here is the User Email:{email}</p>
            
        </div>
    );
};

export default UserDetails;