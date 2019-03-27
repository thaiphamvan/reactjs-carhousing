import React from 'react';
import logo from '../../assets/img/dentless-logo-1.png';

const Header = () => {
  return (
    <header class="header header--default hidden-xs">
      <div class="shell shell--fluid">
        <div class="header__inner">
          <div class="header__logo">
            <img src={logo} alt="" width="158" height="22" />
          </div>
          <nav class="nav nav--primary">
            <ul>
              <li>
                <a href="#">ABOUT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
