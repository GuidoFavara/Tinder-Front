import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCK2YNKKVd3-iBfdvBQ-bv__VwmOOr8wy0",
    authDomain: "tinder-78595.firebaseapp.com",
    projectId: "tinder-78595",
    storageBucket: "tinder-78595.appspot.com",
    messagingSenderId: "239922457600",
    appId: "1:239922457600:web:7782592180662192a5fce5",
    measurementId: "G-TEB60YSMES"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

