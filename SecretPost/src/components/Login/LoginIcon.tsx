import React from 'react'
import { LoginIconProps } from '../../models/PropsType'


const LoginIcon = ( {bgStyle, logoStyle, colorStyle, text, GoogleLoginHandler, GithubLoginHandler}: LoginIconProps ) => {
    const handleLoginClick = () => {
        if(GoogleLoginHandler){
            GoogleLoginHandler();
        } else if(GithubLoginHandler){
            GithubLoginHandler();
        }
    };
    return (
        <div className='login_icon' style={bgStyle} onClick={ handleLoginClick }>
            <div className='login_logo' style={logoStyle}></div>
            <div className='login_text' style={colorStyle}>{text}</div>
        </div>
    )
}

export default LoginIcon