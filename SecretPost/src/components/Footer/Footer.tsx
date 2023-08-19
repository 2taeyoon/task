import React from 'react'
import './Footer.scss';
import FooterWrap from './FooterWrap';


const Footer = () => {
    const userstring = localStorage.getItem('user');
    const user = userstring ? JSON.parse(userstring) : null;
    console.log('user', user)

    return (
        <div className='Footer'>
            <FooterWrap/>
        </div>
    )
}

export default Footer