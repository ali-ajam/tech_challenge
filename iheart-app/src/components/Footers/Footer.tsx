import React from 'react';

const Footer = () => {
  return (
    <footer style={footer}>
      <div>
        © {new Date().getFullYear()}{' '}
        <a href='https://github.com/ali-ajam' target='_blank'>
          Ali Ajam
        </a>
      </div>
    </footer>
  );
};

const footer = {
  background: 'white',
  padding: '30px 0',
};

export default Footer;
