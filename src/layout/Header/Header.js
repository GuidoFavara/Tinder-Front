import React from 'react';
import Logo from '../../pages/Logo/Logo';
import {Link, useHistory} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import './Header.css';

export const Header = ({ backButton }) => {
  const history = useHistory();
  return (
  <header>
    <div className="fl">
    <Link to={'/User'}>
      <button type="button" onClick={() => history.replace(backButton)}>
        <img src="/images/misc/user.png" alt="User Settings" />
      </button>
      </Link>
    </div>

    <div className="fl">
    <Link to="/">
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