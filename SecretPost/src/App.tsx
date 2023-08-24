import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import Upload from './pages/Upload/Upload';
import Mypage from './pages/Mypage/Mypage';
import Login from './pages/Login/Login';
import { UserState, setUser } from './api/reducers';


const App: React.FC = () => {

    //const dispatch = useDispatch();
    const stringUser: string | null = localStorage.getItem('user');
    const userInfo = stringUser ? JSON.parse(stringUser) : null;
    
    
    // console.log('aaaaaaaaaa',isAuthenticated)
    // if(userInfo){
    //     dispatch(setUser(userInfo));
    // }

    // useEffect(() => {
    //     if (userInfo) {
    //         dispatch(setUser(userInfo));
    //     }
    // }, [userInfo, dispatch]);

    //const isAuthenticated = useSelector((state: { user: UserState }) => state.user.isAuthenticated)
    
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/home"
                        // element={ isAuthenticated ? <Home /> : <Navigate to="/" replace /> }
                        element={<Home />}
                    />
                    <Route
                        path="/post"
                        //element={ isAuthenticated ? <Post /> : <Navigate to="/" replace /> }
                        element={<Home />}
                    />
                    <Route
                        path="/upload"
                        //element={ isAuthenticated ? <Upload /> : <Navigate to="/" replace /> }
                        element={<Home />}
                    />
                    <Route
                        path="/mypage"
                        //element={ isAuthenticated ? <Mypage /> : <Navigate to="/" replace /> }
                        element={<Home />}
                    />
                </Routes>
            </BrowserRouter>
            { /*<Footer />*/ }
        </div>
    );
}

export default App;