import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    
    const errorHandle=useRouteError()
    console.log(errorHandle)
    return (
        <div>
            <h2>The page is not found oops {errorHandle.status}</h2>
            {
                errorHandle.status === 404 && <div>
                    <h2>Your come in wrong page Go back to the Home Page</h2>
                    <Link to={'/'}>
                    Home Page
                    </Link>
                    
                </div>
            }
            
        </div>
    );
};

export default Error;