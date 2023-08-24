import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Upload from './pages/Upload/Upload';
import Mypage from './pages/Mypage/Mypage';
import Login from './pages/Login/Login';


const App: React.FC = () => {
    const stringUser: string | null = localStorage.getItem('user');
    const userInfo = stringUser ? JSON.parse(stringUser) : null;

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={ <Login /> }
                    />
                    <Route
                        path="/home"
                        element={ userInfo ? <Home /> : <Navigate to="/" replace /> }
                    />
                    <Route
                        path="/post"
                        element={ userInfo ? <Post /> : <Navigate to="/" replace /> }
                    />
                    <Route
                        path="/upload"
                        element={ userInfo ? <Upload /> : <Navigate to="/" replace /> }
                    />
                    <Route
                        path="/mypage"
                        element={ userInfo ? <Mypage /> : <Navigate to="/" replace /> }
                    />
                    
                </Routes>
                { userInfo && <Footer/>}
            </BrowserRouter>
        </div>
    );
}

export default App;