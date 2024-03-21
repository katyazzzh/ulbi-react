import React, {useState} from 'react';
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', content: 'JS - язык программирования'},
        {id: 2, title: 'Javascript', content: 'JS - язык программирования'},
        {id: 3, title: 'Javascript', content: 'JS - язык программирования'}
    ])

    return (
        <div className="App">
            <form>
                <input type="text" placeholder='Название поста'/>
                <input type="text" placeholder='Содержимое поста'/>
                <button>Создать пост</button>
            </form>
            <PostList title='Посты про JS' posts={posts}></PostList>
        </div>
    );
}

export default App;
