import React from 'react';
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {

    return (
        <div className="App">
            <PostItem post={{id: 1, title: 'Javascript', content: 'JS - язык программирования'}}></PostItem>
        </div>
    );
}

export default App;
