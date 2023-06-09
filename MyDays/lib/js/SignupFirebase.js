import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCm61JzZJansIuyg35MWcqfrlqP8iQXvE",
    authDomain: "mydays-portfolio.firebaseapp.com",
    projectId: "mydays-portfolio",
    storageBucket: "mydays-portfolio.appspot.com",
    messagingSenderId: "825574572940",
    appId: "1:825574572940:web:f3383cf02cbb2e9526cca9"
};

const app = initializeApp(firebaseConfig); // Firebase initialize
const auth = getAuth(); // User authentication information
const database = getDatabase(app, 'https://mydays-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/'); // Firebase realtime database


// Signup form eevent start!
const signupForm = document.getElementById("signupForm");
if(signupForm){
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Refresh prevent
    
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const nickName = document.getElementById("nick_name").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signup form success
                const user = userCredential.user;
                const nickNameRef = ref(database, `users/${user.uid}/nickName`);
                set(nickNameRef, nickName);

                const emailRef = ref(database, `users/${user.uid}/email`);
                set(emailRef, user.email);

                // Send email authentication code
                sendEmailVerification(user)
                    .then(() => {
                        alert("이메일 인증을 진행해주세요.");
                    })
                    .catch(() => {
                        alert("이메일 인증 발송에 실패하였습니다.");
                    });
            })
            .catch((error) => {
                // Failed to signup
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorMessage',errorMessage);
                console.log('errorCode',errorCode);
                //alert(`회원가입에 실패했습니다. 오류: ${errorCode}`);
                if(!email){
                    return alert("이메일을 적어주세요.");
                } else if(!password){
                    return alert("비밀번호를 ㅋ주세요.");
                } else if(!nickName){
                    return alert("닉네임을 입력해주세요.");
                } else if(errorCode === "auth/invalid-email"){
                    return alert("올바른 이메일 주소를 입력해주세요.");
                } else if(errorCode === "auth/weak-password"){
                    return alert("비밀번호는 최소 6자 이상이어야 합니다.");
                } else if(errorCode === "auth/email-already-in-use"){
                    return alert("이미 가입된 이메일입니다.");
                }
            });
    });
}
// Signup form eevent end!


// Login form event start!
const loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Refresh prevent
    
        const loginEmail = document.getElementById("loginEmail").value;
        const loginPassword = document.getElementById("loginPassword").value;
    
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                // Login form success
                const user = userCredential.user;
                
                if(user.emailVerified === false){
                    return alert("이메일 인증을 진행해주세요.");
                } else {
                    // Email authentication success
                    const userListRef = ref(database, 'users');
                    get(userListRef)
                        .then((userCredential) => {
                            if (userCredential.exists()) {
                                // const userList = userCredential.val();
                                // const aaa = user;
                                const loginUserUid = user.uid; // Login user firebase UID
                                localStorage.setItem('loginUserUid', JSON.stringify(loginUserUid));
                                location.replace('./MyDays.html');
                            } else {
                                console.log("사용자 리스트가 존재하지 않습니다.");
                            }
                        })
                        .catch((error) => {
                            console.error("사용자 리스트를 가져오는 도중 오류가 발생했습니다.", error);
                        });
                        

                }
            })
            .catch((error) => {
                // Failed to login
                const errorCode = error.code;
                const errorMessage = error.message;
                //alert(`로그인에 실패했습니다. 오류: ${errorCode}`);
                console.log('errorMessage',errorMessage);
                console.log('errorCode',errorCode);
    
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
}
// Login form event end!


// Signup button start!
const signupBtn = document.getElementById('signup_btn');
if(signupBtn){
    signupBtn.addEventListener('click', ()=>{
        location.href = './signup.html';
    });
}
const signupBack = document.getElementById('signup_back');
if(signupBack){
    signupBack.addEventListener('click', ()=>{
        location.href = './index.html';
    });
}
// Signup button end!