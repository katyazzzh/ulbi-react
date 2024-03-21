import React, {useMemo, useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aa', content: 'bb'},
        {id: 2, title: 'yy', content: 'jj'},
        {id: 3, title: 'dd', content: 'aa'}
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return posts.toSorted((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    }, [searchValue, sortedPosts])

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    type="text"
                    placeholder='Поиск...'
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Сортировка'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'content', name: 'По содержимому'}
                    ]}
                />
            </div>
            {sortedAndSearchedPosts.length !== 0
                ?
                <PostList remove={removePost} title='Посты про JS' posts={sortedAndSearchedPosts}/>
                :
                <h1 style={{textAlign: "center"}}>
                    Посты не найдены
                </h1>
            }
        </div>
    );
}

export default App;
