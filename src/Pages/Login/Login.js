// import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form} from 'react-bootstrap';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import './Login.css';
// import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);


  const handleLogin = event => {
    event.preventDefault();
    const email = emailRef.current.value;
  const password = passwordRef.current.value;
    signInWithEmailAndPassword(email,password);
    console.log(email,password);
  };
  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

//   let from = location.state?.from?.pathname || "/";

//   const [
//     signInWithEmailAndPassword,
//     user,
//     loading,
//     error,
// ] = useSignInWithEmailAndPassword(auth);

// if (user) {
//   navigate(from, { replace: true });
// }
// const handleSubmit = event => {
//   event.preventDefault();
//   const email = emailRef.current.value;
//   const password = passwordRef.current.value;

//   signInWithEmailAndPassword(email, password);
//   console.log(email,password)
// }
// const resetPassword = async () => {
//   const email = emailRef.current.value;
//   if (email) {
//       await sendPasswordResetEmail(email);
//       alert('Sent email');
//   }
//   else{
//       alert('please enter your email');
//   }
// }


//   const navigateRegister = event => {
//     navigate('/register')
//   }

  return (
    <div className='container loginForm w-50 shadow-xl bg-secondary mx-auto'>
      <h2 className='text-primary text-4xl font-bold text-center mb-3'>Login</h2>
      <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 mx-auto w-52 " controlId="formBasicEmail">
                    <Form.Control className='rounded-lg border-4' ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3 mx-auto w-52" controlId="formBasicPassword">
                    <Form.Control className='rounded-lg border-4'  ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
        <br />
        {/* <Button className='mt-3 bg-white text-black rounded-pill' onClick={handleGoogleSignIn}><img  height={20} src={googlelogo} alt="" /> Sign in</Button> */}
      </Form>
      <small><p>Forget Password?<button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p></small>
      <small><p>Don't have account? <Link to={'/signup'} className='text-primary pe-auto text-decoration-none'> Please Register</Link></p></small>
      <div className="divider">OR</div>
      <button onClick={()=>signInWithGoogle()} className="text-white rounded-full btn"> <img className='mr-2' width={25} src="https://i.ibb.co/9rXRjXW/new.png" alt="" /> CONTINUE WITH GOOGLE</button>
      
    </div>

  );
};

export default Login;