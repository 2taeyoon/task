import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCm61JzZJansIuyg35MWcqfrlqP8iQXvE",
    authDomain: "mydays-portfolio.firebaseapp.com",
    projectId: "mydays-portfolio",
    storageBucket: "mydays-portfolio.appspot.com",
    messagingSenderId: "825574572940",
    appId: "1:825574572940:web:f3383cf02cbb2e9526cca9"
};

const app = initializeApp(firebaseConfig); // Firebase를 사용하기 위한 초기화
const auth = getAuth(); // 사용자 인증 정보 가져오기

// 회원가입 폼 제출 시 이벤트 처리
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // 폼 제출 시 새로고침 방지

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // 회원가입 성공 시 처리
            const user = userCredential.user;
            
            // 이메일 인증 코드 발송
            sendEmailVerification(user)
                .then(() => {
                    alert("이메일 인증을 진행해주세요.");
                })
                .catch(() => {
                    alert("이메일 인증 발송에 실패하였습니다.");
                });
        })
        .catch((error) => {
            // 회원가입 실패 시 처리
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorMessage',errorMessage)
            console.log('errorCode',errorCode)
            //alert(`회원가입에 실패했습니다. 오류: ${errorCode}`);
            if(!email){
                return alert("이메일을 적어주세요.");
            } else if(!password){
                return alert("비밀번호를 적어주세요.");
            } else if(errorCode === "auth/invalid-email"){
                return alert("올바른 이메일 주소를 입력해주세요.");
            } else if(errorCode === "auth/weak-password"){
                return alert("비밀번호는 최소 6자 이상이어야 합니다.");
            } else if(errorCode === "auth/email-already-in-use"){
                return alert("이미 가입된 이메일입니다.");
            }
        });
});


// 로그인 폼 제출 시 이벤트 처리
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // 폼 제출 시 새로고침 방지

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            // 로그인 성공 시 처리
            const user = userCredential.user;

            if(user.emailVerified === false){
                return alert("이메일 인증을 진행해주세요.");
            } else {
                location.href = './index.html';
            }
        })
        .catch((error) => {
            // 로그인 실패 시 처리
            const errorCode = error.code;
            const errorMessage = error.message;
            //alert(`로그인에 실패했습니다. 오류: ${errorCode}`);
            console.log('errorMessage',errorMessage)
            console.log('errorCode',errorCode)

            if(!loginEmail){
                return alert("이메일을 적어주세요.");
            } else if(!loginPassword){
                return alert("비밀번호를 적어주세요.");
            } else if(errorCode === "auth/invalid-email"){
                return alert("올바른 이메일 주소를 입력해주세요.");
            } else if(errorCode === "auth/weak-password"){
                return alert("비밀번호는 최소 6자 이상이어야 합니다.");
            } else if(errorCode === "auth/user-not-found"){
                return alert("가입되지 않은 이메일입니다.");
            }
        });
});