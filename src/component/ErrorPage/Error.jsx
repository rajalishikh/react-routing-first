import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError();
    console.log(error)

    return (
        <div>
            <p>Page is not found </p>
            <p>{  error.statusText || error.message}</p>
            {
                error.status === 404 && <div>

                    <h2>The address is not found</h2>
                    <Link to={'/'}><p>Go back where you from </p></Link>
                </div>
            }
        
            
        </div>
    );
};

export default Error;