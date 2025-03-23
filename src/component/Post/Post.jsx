import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';
import './post.css';

const Post = () => {
    const post=useLoaderData();
    return (
        <div>
            <h2>My All post are available here{post.length} </h2>
            <div className='post'>
                {
                    post.map(item=><PostDetails item={item}></PostDetails>)
                }

            </div>
        </div>
    );
};

export default Post;