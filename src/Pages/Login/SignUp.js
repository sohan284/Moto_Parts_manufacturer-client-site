// import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  const handleSignUp = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password)
    console.log(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
      <button class="btn  loading"></button>
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

  return (
    <div className='container SignUpForm w-50 shadow-xl bg-accent mx-auto'>
      <h2 className='text-primary text-4xl font-bold text-center mb-5'>Sign Up</h2>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-5 mx-auto  signupField w-52 " controlId="formBasicEmail">
          <Form.Control className='rounded-lg w-full h-full border-4' ref={nameRef} type="text" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-5 signupField mx-auto w-52 " controlId="formBasicEmail">
          <Form.Control className='rounded-lg w-full h-full border-4' ref={emailRef} type="email" placeholder=" Email" required />
        </Form.Group>
        <Form.Group className="mb-5 signupField mx-auto w-52" controlId="formBasicPassword">
          <Form.Control className='rounded-lg w-full h-full border-4' ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary  w-96 mx-auto d-block mb-2" type="submit">
          Sign Up
        </Button>
        <br />
        {/* <Button className='mt-3 bg-white text-black rounded-pill' onClick={handleGoogleSignIn}><img  height={20} src={googlelogo} alt="" /> Sign in</Button> */}
      </Form>
      <small><p>Already have account? <Link to={'/login'} className='text-primary pe-auto text-decoration-none'>Login</Link></p></small>
      <div className="divider">OR</div>
      <button onClick={() => signInWithGoogle()} className="text-white rounded-full btn"> <img className='mr-2' width={25} src="https://i.ibb.co/9rXRjXW/new.png" alt="" /> CONTINUE WITH GOOGLE</button>

    </div>

  );
};

export default SignUp;