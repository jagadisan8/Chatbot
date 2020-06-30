import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAszTi2h0bUyW98jU0jAkVJDIQUKTCbpv0",
    authDomain: "note-7924e.firebaseapp.com",
    databaseURL: "https://note-7924e.firebaseio.com",
    projectId: "note-7924e",
    storageBucket: "note-7924e.appspot.com",
    messagingSenderId: "898816081573",
    appId: "1:898816081573:web:877a804d6fa17f021bd74c",
    measurementId: "G-TYHD2YK0HK"
  };

  export  const firebaseApp = firebase.initializeApp(firebaseConfig);
   