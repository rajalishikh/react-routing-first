import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const UserDetails=useLoaderData()
    console.log(UserDetails)
    const{name}=UserDetails
    return (
        <div>
            <h2>Here is the Users Details:{name}</h2>
            
        </div>
    );
};

export default UserDetails;