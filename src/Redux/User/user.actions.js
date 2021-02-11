
 // GOOGLE SIGN IN
 export const googleSignInStart = () =>({
    type : 'GOOGLE_SIGNIN_START'
});

export const googleSignInSuccess = (user) =>({
   type : 'GOOGLE_SIGNIN_SUCCESS',
   payload: user,
  
});


export const googleSignInFailure = (error) =>({
   type : 'GOOGLE_SIGNIN_SUCCESS',
   payload: error
});

// EMAIL SIGN UP
export const emailSignUpStart =(emailAndPasswordDisplayNAme)=>({
   type: 'EMAIL_SIGNUP_START',
   payload: emailAndPasswordDisplayNAme

});

export const emailSignUpSuccssful = (user)=>({
   type: 'EMAIL_SIGNUP_SUCCESSFUL',
   payload: user
});

export const emailSignUpFailure = (error)=>({
   type: 'EMAIL_SIGNUP_FAILURE',
   payload: error
});


// EMAIL SIGN - IN
export const emailSignInStart = (emailAndPassword) =>({
   type : 'EMAIL_SIGNIN_START',
   payload  : emailAndPassword
});

export const emailSignInSuccess = (user) =>({
   type : 'EMAIL_SIGNIN_SUCCESS',
   payload : user 
});


export const emailSignInFailure = (error) =>({
   type : 'EMAIL_SIGNIN_FAILURE',
   payload : error
});


// USER LOG -OUT
export const logOut = () =>({
    type: 'LOG_OUT_USER'
});