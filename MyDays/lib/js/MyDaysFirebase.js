import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCm61JzZJansIuyg35MWcqfrlqP8iQXvE",
    authDomain: "mydays-portfolio.firebaseapp.com",
    projectId: "mydays-portfolio",
    storageBucket: "mydays-portfolio.appspot.com",
    messagingSenderId: "825574572940",
    appId: "1:825574572940:web:f3383cf02cbb2e9526cca9"
};

const app = initializeApp(firebaseConfig); // Firebase를 사용하기 위한 초기화
const database = getDatabase(app, 'https://mydays-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/'); // Firebase Realtime Database

const uidUserJSON = localStorage.getItem('loginUserUid');
const uidUser = JSON.parse(uidUserJSON);
const userNickname = document.getElementById('user_nickname');

console.log('uidUser',uidUser);

const userListRef = ref(database, 'users');
get(userListRef)
    .then((userCredential) => {
        const userList = userCredential.val();
        console.log('파이어베이스에 저장된 아이디 리스트', userList[uidUser]);
        userNickname.innerHTML = `${userList[uidUser].nickName}님 환영합니다`;
    })
    .catch((error) => {
        console.error("사용자 리스트를 가져오는 도중 오류가 발생했습니다.", error);
    });

