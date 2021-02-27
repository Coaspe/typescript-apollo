import React from 'react';
import { Post } from '../../../../common/interfaces/post.interface';

const PostsGridItem:React.FC<{post : Post}> = ({post} : {post:Post}) => {
    return(
        <div>
            <p>{post.id}</p>
            <p>{post.body}</p>
            <p>{post.title}</p>
        </div>
    );
}

export default PostsGridItem;