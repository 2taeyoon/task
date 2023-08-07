import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

export const googleLogin = async (/*homeLocation*/) => {
    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            // 구글 Access Token을 가져올 수 있습니다. 이를 사용하여 구글 API에 접근할 수 있습니다.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            //window.location.replace('/home');
            //window.history.replaceState(null, '', '/home');
            
            const userUid = result.user; // firebase user uid
            //const userPhotoURL = result.user.photoURL; // firebase user photoURL
            // const user = {
            //     userUid,
            //     userPhotoURL
            // }
            localStorage.setItem('user', JSON.stringify(userUid)); // 로컬스토리지에 넣겠다 문자열로
            window.location.replace('/home');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('에러 코드',errorCode);
            console.log('에러 메시지',errorMessage);
            // 사용된 계정의 이메일
            //const email = error.customData.email;
            //console.log('email',email);
            // 사용된 AuthCredential 유형
            //const credential = GoogleAuthProvider.credentialFromError(error);
            //console.log('credential',credential)
        });
};

export const githubLogin = async () => {
    return signInWithPopup(auth, githubProvider)
        .then((result) => {
            const userUid = result.user; // firebase user uid
            //const userPhotoURL = result.user.photoURL; // firebase user photoURL
            // const user = {
            //     userUid,
            //     userPhotoURL
            // }
            localStorage.setItem('user', JSON.stringify(userUid)); // 로컬스토리지에 넣겠다 문자열로
            window.location.replace('/home');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('에러 코드', errorCode);
            console.log('에러 메시지', errorMessage);
        });
}



//localStorage.removeItem('user');