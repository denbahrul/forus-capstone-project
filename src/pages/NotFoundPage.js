import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className='not-found-page'>
      <h2>404 Not Found</h2>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </section>
  );
}

export default NotFoundPage;
