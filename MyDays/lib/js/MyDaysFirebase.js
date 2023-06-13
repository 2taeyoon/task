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

const app = initializeApp(firebaseConfig); // Firebase initialize
const database = getDatabase(app, 'https://mydays-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/'); // Firebase realtime database

const uidUserJSON = localStorage.getItem('loginUserUid');
const uidUser = JSON.parse(uidUserJSON);
const userNickname = document.getElementById('user_nickname');


console.log('localStorage users uid value',uidUser);


// Outputting an email with a unique ID value from localStorage start!
const userListRef = ref(database, 'users');
get(userListRef)
    .then((userCredential) => {
        const userList = userCredential.val();
        console.log('Full users in Firebase', userList);
        console.log('Firebase user in signin', userList[uidUser]);
        userNickname.innerHTML = `${userList[uidUser].nickName}님 환영합니다`;
    })
    .catch((error) => {
        console.error("사용자 리스트를 가져오는 도중 오류가 발생했습니다.", error);
    });
// Outputting an email with a unique ID value from localStorage end!