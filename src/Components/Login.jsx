import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = e => {
    e.preventDefault();

    toast.dismiss();

    if (email.trim() === '' || password.trim() === '') {
      toast.warning('Please enter your email and password.');
      return;
    }
    if (!email.includes('@gmail.com')) {
      toast.info('Please enter a valid gmail address');
      return;
    }

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        toast.success("Login Successfully");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch(error => {
        const errorMessage = error.message;
        toast.error(errorMessage, { autoClose: 5000 });

        setLoading(false);
      });
  };

  const register = e => {
    e.preventDefault();

    toast.dismiss();

    if (email.trim() === '' || password.trim() === '') {
      toast.warning('Please enter your email and password.');
      return;
    }
    if (!email.includes('@gmail.com')) {
      toast.info('Please enter a valid gmail address');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be greater than 6 characters.');
      return;
    }

    setLoading(true);


    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        toast.success('The account is created Successfully', { autoClose: 2000 });
        setTimeout(() => {
          toast.info('Now you can login to your account with your gmail and password', { autoClose: 5000 });
        }, 1000);
        setLoading(false);
      })
      .catch(error => {
        const errorMessage = error.message;
        toast.error(errorMessage, { autoClose: 5000 });
        setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer autoClose={5000} />
      <div className='login'>
        <Link to='/'>
          <img
            className='login-logo'
            src='https://pngimg.com/uploads/amazon/amazon_PNG6.png'
          />
        </Link>
        <div className='login-container'>
          <h1>Sign-in 😎</h1>
          <form>
            <h5>Email</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

            <button className='loginSignin-btn' onClick={signIn} type='submit' disabled={loading}>
              {loading ? <span>Loading...</span> : <span>Sign In</span>}
            </button>
          </form>
          <p>
            By signing-in you agree to Amazon's Clone Condition of Use & Sale. Please see our
            Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button className='loginRegistration-btn' onClick={register} disabled={loading}>
            {loading ? <span>Loading...</span> : <span>Create your Amazon Account</span>}
          </button>
        </div>
      </div>
    </>
  );
};
