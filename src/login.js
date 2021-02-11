import React from 'react';

const Login=(props)=>{
    const {email, setEmail, password, setPassword,hasAccount,handleLogin,handleSignUp,emailError,passwordError,setHasAccount,handleChange,handleUpload}= props;
    return(
      
        <body >
            <div class="bg-image"> </div>

           <div class="bg-text">
            <div className="container">
         
        <section className="login">
            <div className="loginContainer">
                <label>UserName</label>
                <input
                type="text"
                placeholder="Email"
                autoFocus required
                value={email}
                onChange={ (e)=> setEmail(e.target.value) }
                />
            <p className="errMsg">{emailError}</p>
             
            <label>Password</label>
            <input
                type="password"
                placeholder="password"
                autoFocus required
                value={password}
                onChange={ (e)=> setPassword(e.target.value) }
                />
            <p className="errMsg">{passwordError}</p>
            <div className="btnContainer">
               { hasAccount ? (
                   <>
                   <button onClick={handleLogin} > Sign IN</button>
                   <p> Dont have an account ?
                   <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                   </>
                   ) : (
                   <>
                    <input type="file" onChange={handleChange} />
                   <button onClick={handleSignUp} > Sign UP</button>
                   <p> Already have an account ?
                   <span onClick={()=>setHasAccount(!hasAccount)}>Sign IN</span> </p>
                   </>
                   ) }
                   </div>
                </div> 
        </section>
        </div>
        </div>
        </body>
        
    );
};
export default Login;