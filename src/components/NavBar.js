import React from 'react';

const NavBar = ({ isUserInfoPresent }) => {
  return (
    <nav>
      <ul>
        <li></li>
        {isUserInfoPresent && (
          <>
            <li></li>
            <li></li>
            <li></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
