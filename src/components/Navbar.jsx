import React from 'react';
import SearchBar from './SearchBar';

function Navbar({ logout }) {
  return (
    <nav>
      <h1>ForUs</h1>
      <SearchBar />
      <div className='post-avatar'></div>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;
