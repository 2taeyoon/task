import React from 'react'
import LoginIcon from './LoginIcon';
import SecretLogo from './SecretLogo';
import { githubLogin } from '../../api/firebase';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import { setUser, store } from '../../api/reducers';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { UserProps } from '../../models/PropsType';


const LoginWrap = () => {
    // const stringUser: string | null = localStorage.getItem('user');
    // const user = stringUser ? JSON.parse(stringUser) : null
    // console.log('user',user);

    const dispatch = useDispatch();

    const GoogleLoginHandler = async () => {
        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const { uid, photoURL } = result.user;
            const userInfo: UserProps = {
                uid,
                photoURL
            }
            dispatch(setUser(userInfo)); // Redux store에 사용자 정보 저장

            //console.log('store.getState', dispatch(setUser(user)));
        } catch (error) {
            console.error('Error message:', error);
        }
    }
    
    const user:UserProps = useSelector((state: DefaultRootState) => state.user);
    console.log('user',user)
    
    return (
        <div className='login_wrap'>
            <SecretLogo />
            <LoginIcon
                bgStyle={{ border: '1px solid #eaebee' }}
                logoStyle={{ background: 'url(./image/google_logo.png) no-repeat center center / cover' }}
                text='구글로 시작하기'
                GoogleLoginHandler={ GoogleLoginHandler } />
            <LoginIcon
                bgStyle={{ background: '#000' }}
                logoStyle={{ background: 'url(./image/github_logo.png) no-repeat center center / cover' }}
                colorStyle={{ color: '#fdfdfd' }}
                text='깃헙으로 시작하기'
                GithubLoginHandler={ githubLogin } />
        </div>
    )
}

export default LoginWrap