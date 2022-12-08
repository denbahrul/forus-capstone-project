import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();
    login({ email, password });
  }

  return (
    <form className='login-form' onSubmit={onSubmitHandler}>
      <input
        className='login-form__input'
        type='email'
        id='email'
        placeholder='Email'
        value={email}
        onChange={setEmail}
      />
      <input
        className='login-form__input'
        type='password'
        id='password'
        placeholder='Password'
        value={password}
        onChange={setPassword}
      />
      <button type='submit' className='login-form__button'>
        Login
      </button>
      <p>Or</p>
      <Link to='/register' className='login-form__link'>
        <button className='login-form__register'>Create New Account</button>
      </Link>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func,
};

export default LoginInput;
