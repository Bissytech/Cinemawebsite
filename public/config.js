
  const firebaseConfig = {
    apiKey: "AIzaSyDSbWlV77YBfGNYKOdJB9zxu_QApzYQQig",
  authDomain: "funmo-cinema.firebaseapp.com",
  projectId: "funmo-cinema",
  storageBucket: "funmo-cinema.firebasestorage.app",
  messagingSenderId: "641001887510",
  appId: "1:641001887510:web:4159f60f732555f53aa237"
};
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();
  const db = firebase.firestore();
   var storageRef = firebase.storage().ref();

 
  

