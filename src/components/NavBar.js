import React, { useContext, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const NavBar = ({ isUserLoggedIn }) => {
  const { userData, setUserData } = useContext(AppContext);
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();

  const handleMouseOver = () => {
    setShowLogout(true);
  };

  const handleMouseLeave = () => {
    setShowLogout(false);
  };

  const handleClick = () => {
    window.localStorage.clear();
    setUserData({});
    navigate('/login');
  };

  return (
    <header>
      <div>
        <figure>
          <img
            src='https://www.securityopenlab.it/immagini/2020/06/octocat-github-1.jpg'
            width={200}
            height={120}
            alt='logo'
          ></img>
        </figure>
        {isUserLoggedIn && (
          <div>
            <ul>
              <li>
                <Link to='/info'>User Info</Link>
              </li>
              <li>
                <Link to='/repos'>Repos</Link>
              </li>
              <li
                style={{ border: '1px red solid' }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                ...
              </li>
              {showLogout && (
                <li
                  style={{ border: '1px blue solid' }}
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                >
                  Logout
                </li>
              )}
            </ul>
            <div>
              <span>{userData.name}</span>
              <img
                src={userData.avatar_url}
                width={50}
                height={50}
                alt='logo'
              ></img>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
