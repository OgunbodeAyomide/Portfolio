import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navlinks } from '../constants';
import { ri, menu, close } from '../assets'; // Ensure `logo` is defined correctly

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={ri} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
