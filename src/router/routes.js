import Posts from "../pages/Posts";
import About from "../pages/About";
import Post from "../pages/Post";

export const routes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <Post/>}
]