import React from 'react';
import Logo from '../../pages/Logo/Logo';
import {Link, useHistory} from 'react-router-dom';
import '../../App.css';

export const Header = () => {
  return (

  <header>
    <div className="fl">
    <Link to={'/User'}>
      <button type="button">
        <img src="/images/misc/user.png" alt="User Settings" />
      </button>
      </Link>
    </div>

    <div className="fl">
    <Link to={"/"}>
      <Logo />
      </Link>
    </div>

    <div className="fl">
      <Link to={'/Chat'}>
      <button type="button">
        <img src="/images/misc/messages.png" alt="View Messages" />
      </button>
      </Link>
    </div>
  </header>
)
};

export default Header;