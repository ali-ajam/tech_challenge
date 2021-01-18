import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const isHomePage = window.location.pathname === '/';

  return (
    <div className='header'>
      {!isHomePage && (
        <button
          className='btn btn-transparent pl-2'
          style={{ position: 'absolute' }}
        >
          <Link to='/'>Home</Link>
        </button>
      )}
      <div className='container'>
        <div className='row'>
          <h1 className='title text-white text-center'>
            All your favorite music<br></br> and podcasts, all free.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
