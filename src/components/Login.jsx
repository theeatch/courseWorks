// src/components/SignUp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    const result = await dispatch(signIn({ email, password }));
    if (signIn.fulfilled.match(result)) {
      navigate('/');
    }
  };

  if(user){
    navigate('/')
  }

  return (
    <div className='w-full mt-40 h-full flex flex-col gap-8 items-center justify-center'>
    <h2 className='text-4xl font-bold'>Login!</h2>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className='p-2'
    />
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className='p-2'
    />
    <button onClick={handleLogin} disabled={loading} className='px-6 py-2 hover:bg-green-500 hover:text-white bg-blue-400 hover:scale-105 hover:cursor-pointer duration-300 rounded-xl font-semibold text-xl'>
      {loading ? 'Loading...' : 'Login'}
    </button>
    <a href="/" className='text-blue-400 hover:text-blue-600 hover:underline'>don't have an account? Sign Up!</a>
    {error && <p>{error}</p>}
  </div>
  );
};

export default Login;
