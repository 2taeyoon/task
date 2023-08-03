import React from 'react'
import { LoginIconProps } from '../../models/LoginType'


const LoginIcon = ( {bgStyle, logoStyle, colorStyle, text, loginHandler}: LoginIconProps ) => {
    return (
        <div className='login_icon' style={bgStyle} onClick={loginHandler}>
            <div className='login_logo' style={logoStyle}></div>
            <div className='login_text' style={colorStyle}>{text}</div>
        </div>
    )
}

export default LoginIcon