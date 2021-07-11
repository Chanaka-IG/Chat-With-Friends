import * as firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAhqpkMgUD0_ogi20dJf7ja2DPOAMLEjAE",
  authDomain: "gifted-chat-a4483.firebaseapp.com",
  projectId: "gifted-chat-a4483",
  storageBucket: "gifted-chat-a4483.appspot.com",
  messagingSenderId: "468986953779",
  appId: "1:468986953779:web:b41523b4133afc3e37a346"
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