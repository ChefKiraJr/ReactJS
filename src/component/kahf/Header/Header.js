import React, { useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { cartData } = props;
  return (
    <div className="header-wrapper">
      <div className="header-top">
        <div className="header-left"></div>
        <div className="header-title">
          <p>NEW: Kahf Gentle Exfoliating Face Scrub</p>
        </div>
        <div className="header-right">
          <div className="header-cart-trolley">
            <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/group-1.png" alt="" />
            <Link to="/cart">
              <span>({cartData.length}) | </span>
            </Link>
          </div>
          <div className="header-cart-heart">
            <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/path-1.png" alt="" />
            <span>(0) | </span>
          </div>
          <div className="header-cart-login">
            <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/profile-1.png" alt="" />
            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-logo">
          <img src="https://www.kahfeveryday.com/wp-content/uploads/2020/07/logo_kahf-1.png" alt="" />
        </div>
        <div className="header-bottom-link">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/products">
            <p className="link">Shop</p>
          </Link>
          <Link to="/brand">
            <p className="link">Brand</p>
          </Link>
          <Link to="/kahf-product">
            <p className="link">Kahf Program</p>
          </Link>
          <Link to="/discovery">
            <p className="link">Discovery</p>
          </Link>
        </div>
        <div className="search">
          <input class="form-control" type="text" name="" id="" placeholder="Type to search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
