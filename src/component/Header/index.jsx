import React from 'react';
import logo from '../../assets/img/dentless-logo-1.png';
import { Link } from 'react-router-dom';

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
                <Link to='/blog'>
                  <span>ABOUT US</span>
                </Link>
              </li>
              <li>
                <Link to='/blog'>
                  <span>SERVICES</span>
                </Link>
              </li>
              <li>
                <Link to='/blog'>BLOG</Link>
              </li>
              <li>
                <Link to='/blog'>
                  <span>LOCATIONS</span>
                </Link>
              </li>
              <li>
                <Link to='/blog'>TRAINING</Link>
              </li>
            </ul>
          </nav>
          <div>
            <div className="header__inner_text">CALL NOW</div>
            <div className="header__inner_text_nb">703-646-7727</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
