// import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form} from 'react-bootstrap';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import './Login.css';
// import SocialLogin from './SocialLogin/SocialLogin';
// import auth from './../../firebase.init';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

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
      <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
        <br />
        {/* <Button className='mt-3 bg-white text-black rounded-pill' onClick={handleGoogleSignIn}><img  height={20} src={googlelogo} alt="" /> Sign in</Button> */}
      </Form>
      <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
      <p>New to Grocery Store? <Link to={'/register'} className='text-danger pe-auto text-decoration-none'> Please Register</Link></p>
      
    </div>

  );
};

export default Login;