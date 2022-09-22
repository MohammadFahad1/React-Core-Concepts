import React from 'react';
import './DisplayPost.css';

const DisplayPost = (posts) => {
    const { title, body } = posts.posts;
    console.log(posts);
    return (
        <div className='post'>
            <h2><b>Title:</b> {title}</h2>
            <p><b>Description:</b> {body}</p>
        </div>
    );
};

export default DisplayPost;