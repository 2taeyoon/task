import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './fonts/pretendard.css';
import './index.css';
import App from './App';
import { store } from './api/reducers';


// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App/>,
//         errorElement: <NotFound/>,
//         children:[
//             { index:true, path: '/', element: <Login/> },
//             { path: '/home', element: <Home/> },
//             { path: '/upload', element: <Upload/> },
//             { path: '/post', element: <Post/> },
//             { path: '/mypage', element: <Mypage/> }
//         ]
//     }
// ])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);