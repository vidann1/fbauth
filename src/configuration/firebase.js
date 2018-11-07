 import firebase from 'firebase/app';
 import 'firebase/auth';

  const config = {
    apiKey: "AIzaSyC1OJsjCH96Xw49p7A1BnmlXZkh5kqyUDU",
    authDomain: "auth-bbf40.firebaseapp.com",
    databaseURL: "https://auth-bbf40.firebaseio.com",
    projectId: "auth-bbf40",
    storageBucket: "auth-bbf40.appspot.com",
    messagingSenderId: "653660991260"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
	auth,
};