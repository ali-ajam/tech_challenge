import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='container footer'>
      <div>
        © {new Date().getFullYear()}{' '}
        <a href='https://github.com/ali-ajam' target='_blank'>
          Ali Ajam
        </a>
      </div>
    </footer>
  );
};

export default Footer;
