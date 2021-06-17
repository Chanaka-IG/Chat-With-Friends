import * as firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore'

 var firebaseConfig = {
    apiKey: "AIzaSyAKUYTF7dMBpXMTflfQcpB13nZ5i5Uj9_s",
    authDomain: "gifted-chat-770d7.firebaseapp.com",
    projectId: "gifted-chat-770d7",
    storageBucket: "gifted-chat-770d7.appspot.com",
    messagingSenderId: "608672962354",
    appId: "1:608672962354:web:8cce3440147a0027da292b"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
      app = firebase.app()
  }

  const db = app.firestore();
  const auth = firebase.auth();
  export {db,auth}