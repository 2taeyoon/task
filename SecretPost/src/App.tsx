import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Upload from './pages/Upload/Upload';
import Mypage from './pages/Mypage/Mypage';
import Login from './pages/Login/Login';
import { isLoggedInProps } from './models/PropsType';


const App: React.FC = () => {
    //const location = useLocation();
    //const showFooter: boolean = location.pathname !== '/';
    const isLoggedIn = useSelector((state: isLoggedInProps) => state.isLoggedIn);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/home"
                        element={ isLoggedIn ? <Home /> : <Navigate to="/" replace /> }
                    />
                    <Route
                        path="/post"
                        element={ isLoggedIn ? <Post /> : <Navigate to="/" replace /> }
                    />
                    <Route
                        path="/upload"
                        element={ isLoggedIn ? <Upload /> : <Navigate to="/" replace /> }
                    />
                    <Route
                        path="/mypage"
                        element={ isLoggedIn ? <Mypage /> : <Navigate to="/" replace /> }
                    />
                </Routes>
            </BrowserRouter>
            { isLoggedIn && <Footer />}
        </div>
    );
}

export default App;