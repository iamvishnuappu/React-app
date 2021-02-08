import React from 'react';

const Login=(props)=>{
    const {email, setEmail, password, setPassword,hasAccount,handleLogin,handleSignUp,emailError,passwordError,setHasAccount}= props;
    return(
        <section className="login">
            <div className="loginContainer">
                <label>UserName</label>
                <input
                type="text"
                autoFocus required
                value={email}
                onChange={ (e)=> setEmail(e.target.value) }
                />
            <p className="errMsg">{emailError}</p>
             
            <label>password</label>
            <input
                type="text"
                autoFocus required
                value={password}
                onChange={ (e)=> setPassword(e.target.value) }
                />
            <p className="errMsg">{passwordError}</p>
            <div className="btnContainer">
               { hasAccount ? (
                   <>
                   <button onClick={handleLogin} > Sign Up</button>
                   <p> Dont have an account ?
                   <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                   </>
                   ) : (
                   <>
                   <button onClick={handleSignUp} > Sign Up</button>
                   <p> Already have an account ?
                   <span onClick={()=>setHasAccount(!hasAccount)}>Sign IN</span> </p>
                   </>
                   ) };
                   </div>
                </div> 
        </section>
    );
};
export default Login;