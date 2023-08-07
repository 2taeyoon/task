import React from 'react'
import { LoginIconProps } from '../../models/PropsType'


const LoginIcon = ( {bgStyle, logoStyle, colorStyle, text, googleLoginHandler, githubLoginHandler}: LoginIconProps ) => {
    return (
        <div className='login_icon' style={bgStyle} onClick={ googleLoginHandler || githubLoginHandler }>
            <div className='login_logo' style={logoStyle}></div>
            <div className='login_text' style={colorStyle}>{text}</div>
        </div>
    )
}

export default LoginIcon