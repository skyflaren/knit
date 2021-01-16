import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCMerrYfrGCC05NfEcJoH-WwePGPtfkKlc",
  authDomain: "commit-d.firebaseapp.com",
  databaseURL: "https://commit-d-default-rtdb.firebaseio.com",
  projectId: "commit-d",
  storageBucket: "commit-d.appspot.com",
  messagingSenderId: "815768705048",
  appId: "1:815768705048:web:5827d67aaf2350e5490b6d"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase;
