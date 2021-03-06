// import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form} from 'react-bootstrap';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import {useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
// import './Login.css';
// import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let errorMessage;
  let from = location.state?.from?.pathname || "/";
    const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);


  const handleLogin = event => {
    event.preventDefault();
    const email = emailRef.current.value;
  const password = passwordRef.current.value;
    signInWithEmailAndPassword(email,password);
    console.log(email,password);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
      <button className="btn  loading"></button>
    </div>
    );
  }
  if (error) {
    errorMessage = <p className='text-[red]'>Error: {error?.message}</p>
}
const resetPassword = async () => {
  const email = emailRef.current.value;
  if (email) {
      await sendPasswordResetEmail(email);
      toast('Check your email');
  }
  else{
      toast('Enter  your email address');
  }
}

  return (
    <div className='container loginForm w-50 shadow-xl mx-auto'>
      <h2 className='text-primary text-4xl font-bold text-center mb-3'>Login</h2>
      <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 signupField mx-auto w-52 " controlId="formBasicEmail">
                    <Form.Control className=' h-full w-56 border-2 rounded-md' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3 mx-auto signupField w-full" controlId="formBasicPassword">
                    <Form.Control className=' h-full w-56 border-2 rounded-md'  ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
             
        <br />
        {/* <Button className='mt-3 bg-white text-black rounded-pill' onClick={handleGoogleSignIn}><img  height={20} src={googlelogo} alt="" /> Sign in</Button> */}
      </Form>
      {errorMessage}
      <small><p>Forget Password?<button onClick={resetPassword} className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p></small>
      <small><p>Don't have account? <Link to={'/signup'} className='text-primary pe-auto text-decoration-none'> Please Register</Link></p></small>
      <div className="divider">OR</div>
      <button onClick={()=>signInWithGoogle()} className="text-white rounded-full btn"> <img className='mr-2' width={25} src="https://i.ibb.co/9rXRjXW/new.png" alt="" /> CONTINUE WITH GOOGLE</button>
      
    </div>

  );
};

export default Login;