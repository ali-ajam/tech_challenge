import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footers/Footer';
import Header from '../components/Headers/Header';

const Landing: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <h1 className='text-center'>Looking for music?</h1>
        <button className='btn btn-primary ml-auto mr-auto'>
          <Link to='/table'>Explore Songs</Link>
        </button>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Landing;
