import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Post from "../pages/Post";
import {routes} from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    path={route.path}
                    element={route.element}
                />
            )}

            <Route path='/' element={<Posts/>}/>
        </Routes>
    );
};

export default AppRouter;