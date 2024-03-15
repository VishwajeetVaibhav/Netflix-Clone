import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyAAlx2uvObyJ07yWSayItQXu_Qv5TAwowU",
    authDomain: "netflix-clone-9706b.firebaseapp.com",
    projectId: "netflix-clone-9706b",
    storageBucket: "netflix-clone-9706b.appspot.com",
    messagingSenderId: "315014879335",
    appId: "1:315014879335:web:ca635913edf0480a859cc2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { auth };
  export default db;