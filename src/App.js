import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

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
                <MyButton>Создать пост</MyButton>
            </form>
            <PostList title='Посты про JS' posts={posts}></PostList>
        </div>
    );
}

export default App;
