import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-dark text-white text-center py-3 mt-4 fixed-bottom w-100" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', zIndex: 100 }}>
    <div className="container">
      <span>&copy; {new Date().getFullYear()} News Website. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
