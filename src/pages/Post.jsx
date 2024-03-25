import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import MyLoader from "../components/UI/loader/MyLoader";
import PostList from "../components/PostList";

const Post = () => {
    const params = useParams()

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchCommentsByPostId, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsByPostId(params.id)
    }, []);

    return (
        <div>
            <h1>Пост с ID = {params.id}</h1>
            {error &&
                <h1>Произошла ошибка {error}</h1>
            }
            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <MyLoader/>
                </div>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии</h1>
            {isComLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <MyLoader/>
                </div>
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
        ;
};

export default Post;