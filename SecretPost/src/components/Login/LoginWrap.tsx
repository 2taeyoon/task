import React from 'react'
import LoginIcon from './LoginIcon';
import SecretLogo from './SecretLogo';
import { googleLogin, githubLogin } from '../../api/firebase';


const LoginWrap = () => {
    const stringUser: string | null = localStorage.getItem('user');
    const user = stringUser ? JSON.parse(stringUser) : null
    console.log('user',user);

    return (
        <div className='login_wrap'>
            <SecretLogo />
            <LoginIcon
                bgStyle={{ border: '1px solid #eaebee' }}
                logoStyle={{ background: 'url(./image/google_logo.png) no-repeat center center / cover' }}
                text='구글로 시작하기'
                googleLoginHandler={ googleLogin } />
            <LoginIcon
                bgStyle={{ background: '#000' }}
                logoStyle={{ background: 'url(./image/github_logo.png) no-repeat center center / cover' }}
                colorStyle={{ color: '#fdfdfd' }}
                text='깃헙으로 시작하기'
                githubLoginHandler={ githubLogin } />
        </div>
    )
}

export default LoginWrap