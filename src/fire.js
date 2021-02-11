
import firebase from 'firebase';
  // If using Firebase storage

  var firebaseConfig = {
    apiKey: "AIzaSyATAZ-KM-eL3pqwG7C0uZYK4u6ZohP8Wok",
    authDomain: "app1-a1a8f.firebaseapp.com",
    projectId: "app1-a1a8f",
    storageBucket: "app1-a1a8f.appspot.com",
    messagingSenderId: "228059858462",
    appId: "1:228059858462:web:2a9fa9b782499821af500f",
    measurementId: "G-CVNKV3C9NJ"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export { storage, fire as default };
  
  
