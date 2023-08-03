import React from 'react';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';


const App:React.FC = () => {
    const location = useLocation();
    const showFooter:boolean = location.pathname !== '/';

    return (
        <div className="App">
            <Outlet/>
            { showFooter && <Footer/> }
        </div>
    );
}

export default App;