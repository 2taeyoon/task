import React from 'react'
import LoginIcon from './LoginIcon';
import SecretLogo from './SecretLogo';
import { githubLogin } from '../../api/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../api/reducers';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';


const LoginWrap = () => {
    // const stringUser: string | null = localStorage.getItem('user');
    // const user = stringUser ? JSON.parse(stringUser) : null
    // console.log('user',user);

    const dispatch = useDispatch();
    //const isAuthenticated = useSelector((state: { user: UserState }) => state.user.uid)

    // useEffect(() => {
    //     console.log('isAuthenticated:', isAuthenticated);
    // }, [isAuthenticated]);

    const GoogleLoginHandler = async () => {
        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const uid = result.user.uid;
            const userInfo = { uid: uid };
            dispatch(setUser(userInfo));
            localStorage.setItem('user', JSON.stringify(userInfo));
            const getUser: string | null = localStorage.getItem('user');
            const user = getUser ? JSON.parse(getUser) : null;

            if (user) {
                window.location.replace('/home');
            }
            //console.log('isAuthenticated after login:', userInfo.isAuthenticated);
            //console.log('result.user',result.user) // 확인하기 위한 용도
        } catch (error) {
            console.error('Error message:', error);
        }
    }

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