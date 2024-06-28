// src/components/SignUp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  console.log(email, password)

  const handleSignUp = () => {
    dispatch(signUp({ email, password }));
  };
  console.log(user)

  if(user){
    navigate('/courses')
  }

  return (
    <div className='w-full mt-40 h-full flex flex-col gap-8 items-center justify-center'>
      <h2 className='text-4xl font-bold'>Sign Up</h2>
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
      <button onClick={handleSignUp} disabled={loading} className='px-6 py-2 hover:bg-green-500 hover:text-white bg-blue-400 hover:scale-105 hover:cursor-pointer duration-300 rounded-xl font-semibold text-xl'>
        {loading ? 'Loading...' : 'Sign Up'}
      </button>
      <a href="/login" className='text-blue-400 hover:text-blue-600 hover:underline'>Already have an account? Login</a>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
