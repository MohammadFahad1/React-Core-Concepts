import React, { useEffect, useState } from 'react';
import DisplayPost from '../DisplayPost/DisplayPost';
import './LoadPosts.css';

const LoadPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div>
            <h1>Available Posts: {posts.length}</h1>
            <div className='posts'>
                {
                    posts.map(post => <DisplayPost posts={post}></DisplayPost>)
                }
            </div>
        </div>
    );
};

export default LoadPosts;