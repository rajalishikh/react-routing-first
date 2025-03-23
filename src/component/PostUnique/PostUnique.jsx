import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostUnique = () => {
    const postUnique=useLoaderData()
    const  {body} =postUnique
    return (
        <div>
            <h2>Here is the Post Unique details </h2>
            <p>{body}</p>
            
        </div>
    );
};

export default PostUnique;