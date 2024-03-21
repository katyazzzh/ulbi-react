import React, {useRef, useState} from 'react';
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

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            content
        }
        //Меняем массив постов. Сначала стай прые посты ...posts, затем новыост newPost
        setPosts([...posts, newPost])
        setTitle('')
        setContent('')
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    type="text"
                    placeholder='Название поста'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <MyInput
                    type="text"
                    placeholder='Содержимое поста'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList title='Посты про JS' posts={posts}></PostList>
        </div>
    );
}

export default App;
