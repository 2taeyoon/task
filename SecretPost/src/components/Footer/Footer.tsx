import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    const userstring = localStorage.getItem('user');
    const user = userstring ? JSON.parse(userstring) : null;
    console.log('user',user)
    
    return (
        <div className='Footer'>
            <div className='footer_wrap'>
                <Link to='home'>Home</Link>
                <Link to='post'>post</Link>
                <Link to='upload'>upload</Link>
                <Link to='mypage'>mypage</Link>
            </div>
        </div>
    )
}

export default Footer