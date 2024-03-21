import React, {useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', content: 'JS - язык программирования'},
        {id: 2, title: 'Javascript', content: 'JS - язык программирования'},
        {id: 3, title: 'Javascript', content: 'JS - язык программирования'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList remove={removePost} title='Посты про JS' posts={posts}></PostList>
        </div>
    );
}

export default App;
