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


const App: React.FC = () => {
    // type isLoggedInProps = {
    //     isLoggedIn: boolean;
    // }
    //const isLoggedIn = useSelector((state: isLoggedInProps) => state.isLoggedIn);
    //console.log('isLoggedIn',isLoggedIn)

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/home"
                        // element={ isLoggedIn ? <Home /> : <Navigate to="/" replace /> }
                        element={<Home />}
                    />
                    <Route
                        path="/post"
                        //element={ isLoggedIn ? <Post /> : <Navigate to="/" replace /> }
                        element={<Home />}
                    />
                    <Route
                        path="/upload"
                        //element={ isLoggedIn ? <Upload /> : <Navigate to="/" replace /> }
                        element={<Home />}
                    />
                    <Route
                        path="/mypage"
                        //element={ isLoggedIn ? <Mypage /> : <Navigate to="/" replace /> }
                        element={<Home />}
                    />
                </Routes>
            </BrowserRouter>
            {/* isLoggedIn && <Footer />*/}
        </div>
    );
}

export default App;