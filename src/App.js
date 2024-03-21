import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', content: 'JS - язык программирования'},
        {id: 2, title: 'Javascript', content: 'JS - язык программирования'},
        {id: 3, title: 'Javascript', content: 'JS - язык программирования'}
    ])

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder='Название поста'/>
                <MyInput type="text" placeholder='Содержимое поста'/>
                <MyButton>Создать пост</MyButton>
            </form>
            <PostList title='Посты про JS' posts={posts}></PostList>
        </div>
    );
}

export default App;
