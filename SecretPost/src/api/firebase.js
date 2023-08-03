import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const googleLogin = async (homeLocation) => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            // 구글 Access Token을 가져올 수 있습니다. 이를 사용하여 구글 API에 접근할 수 있습니다.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            homeLocation('/home');

            // 로그인된 사용자 정보
            //const user = result.user;
        })
        .catch((error) => {
            // 에러 처리
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorCode',errorCode);
            console.log('errorMessage',errorMessage);
            // 사용된 계정의 이메일
            //const email = error.customData.email;
            //console.log('email',email);
            // 사용된 AuthCredential 유형
            //const credential = GoogleAuthProvider.credentialFromError(error);
            //console.log('credential',credential)
        });
};