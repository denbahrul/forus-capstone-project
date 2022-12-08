import React from 'react';
import PropTypes from 'prop-types';
import { register } from '../utils/api';
import RegisterInput from '../components/RegisterInput';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegister({ name, email, password }) {
    const { error } = await register({ name, email, password });
    if (!error) {
      navigate('/');
    }
  }

  return (
    <section className='register-page'>
      <RegisterInput register={onRegister} />
    </section>
  );
}

RegisterPage.propTypes = {
  register: PropTypes.func,
};

export default RegisterPage;
