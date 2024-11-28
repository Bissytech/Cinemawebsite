
  const firebaseConfig = {
    apiKey: "AIzaSyD-gGXcalRrA81TkF3h63U5uZe7orXnBJ8",
    authDomain: "cinemawebsite-8056d.firebaseapp.com",
    projectId: "cinemawebsite-8056d",
    storageBucket: "cinemawebsite-8056d.appspot.com",
    messagingSenderId: "728829440202",
    appId: "1:728829440202:web:3bc68d184abd5b79cbc433"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();
  const db = firebase.firestore();
   var storageRef = firebase.storage().ref();

 
  

