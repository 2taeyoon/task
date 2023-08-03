import React from 'react'
import LoginIcon from './LoginIcon';
import SecretLogo from './SecretLogo';
import { googleLogin } from '../../api/firebase';


const LoginWrap = () => {

    const loginHandler = () => {
        googleLogin((homeLocation: string) => {
            window.location.pathname = homeLocation;
        })
    };
    
    return (
        <div className='login_wrap'>
            <SecretLogo />
            <LoginIcon
                bgStyle={{ border: '1px solid #eaebee' }}
                logoStyle={{ background: 'url(./image/google_logo.png) no-repeat center center / cover' }}
                text='구글로 시작하기'
                loginHandler={ loginHandler } />
            <LoginIcon
                bgStyle={{ background: '#000' }}
                logoStyle={{ background: 'url(./image/apple_logo.png) no-repeat center center / cover' }}
                colorStyle={{ color: '#fdfdfd' }}
                text='애플로 시작하기'
                loginHandler={ loginHandler } />
        </div>
    )
}

export default LoginWrap