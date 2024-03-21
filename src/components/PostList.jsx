import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({title, posts}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    )
        ;
};

export default PostList;