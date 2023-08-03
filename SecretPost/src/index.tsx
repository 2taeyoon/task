import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './fonts/pretendard.css';
import './index.css';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Mypage from './pages/Mypage/Mypage';
import Upload from './pages/Upload/Upload';
import Login from './pages/Login/Login';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            { index:true, path: '/', element: <Login/> },
            { path: '/home', element: <Home/> },
            { path: '/upload', element: <Upload/> },
            { path: '/post', element: <Post/> },
            { path: '/mypage', element: <Mypage/> }
        ]
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);