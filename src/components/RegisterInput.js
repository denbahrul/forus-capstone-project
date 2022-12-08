import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput(props) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();

    props.register({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <form className='register-form' onSubmit={onSubmitHandler}>
      <h2>Register</h2>
      <input
        className='register-form__input'
        type='text'
        id='name'
        placeholder='Name'
        value={name}
        onChange={onNameChange}
      />
      <input
        className='register-form__input'
        type='email'
        id='email'
        placeholder='Email'
        value={email}
        onChange={onEmailChange}
      />
      <input
        className='register-form__input'
        type='password'
        id='password'
        placeholder='Password'
        value={password}
        onChange={onPasswordChange}
      />
      <input
        className='register-form__input'
        type='password'
        id='confirm-password'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      <button className='register-form__button' type='submit'>
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
