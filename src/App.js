
import React,{ useEffect, useState } from 'react';
import './App.css';

import Login from './login';
import Main from './main';
import fire, { storage } from "./fire";

const App=()=> {
  const [user,setUser]= useState('');
  const [email,setEmail]= useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAccount,setHasAccount]=useState(false);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  
  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }
  const clearError=()=>{
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin=()=>{
    clearError();
   fire
  .auth()
  .signInWithEmailAndPassword(email,password)
  .catch((err) =>  {
  switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                    setEmailError(err.message);
                    break;

                    case "auth/wrong-password" :
                    setPasswordError(err.message);
                    break;
      }
  });
};

 const handleSignUp=()=>{
   clearError();
  fire
 .auth()
 .createUserWithEmailAndPassword(email,password)
 .catch((err) =>  {
 switch(err.code){
                   case "auth/email-already-in-use":
                   case "auth/invalid-email":
                   setEmailError(err.message);
                   break;

                   case "auth/weak-password" :
                   setPasswordError(err.message);
                   break;
   }

 });
 const uploadTask = storage.ref(`images/${email}`).put(image);
 uploadTask.on(
   "state_changed",
   snapshot => {
     const progress = Math.round(
       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
     );
     setProgress(progress);
   },
   error => {
     console.log(error);
   },
 
 );
};



const authListener=()=>
{
  fire.auth().onAuthStateChanged(user=> {
    
    if(user)
    {
      clearInputs();

      setUser(user);    
    }
    else
    {
    setUser("");
    }
  });
 

};

useEffect(()=>{
authListener();
} , [] );


const handleChange = e => {
  if (e.target.files[0]) {
    setImage(e.target.files[0]);
  }
};

const handleUpload = () => {
 
};

  return (
    <div className="App">
      { user ? ( 
        <Main ></Main>
          
       ) : (
        <Login
        email={email}
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}        
        passwordError={passwordError}
        url={url}
        image={image}
        progress={progress}
        handleUpload={handleUpload}
        handleChange={handleChange}

       />
        )}    
    </div>
  );
  };

export default App;
