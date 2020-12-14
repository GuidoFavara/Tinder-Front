import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';

const Header = () => (
  <header>
    <div className="fl">
      <button type="button">
        <img src="/images/misc/user.png" alt="User Settings" />
      </button>
    </div>

    <div className="fl">
      <Logo />
    </div>

    <div className="fl">
      <Link to={'/Chat'}>
      <button type="button">
        <img src="/images/misc/messages.png" alt="View Messages" />
      </button>
      </Link>
    </div>
  </header>
);

export default Header;
