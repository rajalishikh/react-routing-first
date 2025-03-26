import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './postDetails.css';
const PostDetails = ({item}) => {
    const{title,body,id}=item
    const navigate=useNavigate()
    const navigate2=useNavigate()

    function handleDetails(){
        navigate(`/PostDetails/${id}`)

    }
    function navigate2Handle(){
        navigate2(`/PostDetails/${id}`)
    }
    return (
        <div className='postD'>
            <h1>My Bio is {title}</h1>
            <p>{body}</p>
            <Link to={`/PostDetails/${id}`}>
            <button>Post Details</button>
            </Link>
            <button onClick={handleDetails} >See Details</button>
            <button onClick={navigate2Handle}>Use Navigate</button>
            
            
        </div>
    );
};

export default PostDetails;