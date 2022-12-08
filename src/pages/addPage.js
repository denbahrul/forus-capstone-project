import React from 'react';
import { addArgument } from '../utils/api';
import ArgumentInput from '../components/ArgumentInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  async function onAddArgumentHandler(argument) {
    await addArgument(argument);
    navigate('/home');
  }

  return (
    <section>
      <ArgumentInput addArgument={onAddArgumentHandler} />
    </section>
  );
}

export default AddPage;
