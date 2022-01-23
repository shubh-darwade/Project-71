import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBSuPDHQLGlHx-OoxYlSUOOx2qjPhbjmA0",
  authDomain: "complaint-forum-87d7b.firebaseapp.com",
  databaseURL:"https://complaint-forum-87d7b.firebaseio.com",
  projectId: "complaint-forum-87d7b",
  storageBucket: "complaint-forum-87d7b.appspot.com",
  messagingSenderId: "601653297254",
  appId: "1:601653297254:web:153c4ce54a5c6a3ebe2da7"
};
 
 
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


  export default firebase.firestore();

