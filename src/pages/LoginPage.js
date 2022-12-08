import React from 'react';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';

const LoginPage = ({ loginSuccess }) => {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className='login-page'>
      <LoginInput login={onLogin} />
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func,
};

export default LoginPage;
