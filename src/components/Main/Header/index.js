import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
      <div>
         <div>
        <header className="header-section">
          <div className="container-fluid">
            <div className="inner-header">
              <div className="logo">
                <a href="./index.html"><img src="img/logo.png" alt="" /></a>
              </div>
              <div className="header-right">
                <img src="img/icons/search.png" alt="" className="search-trigger" />
                <img src="img/icons/man.png" alt="" />
                <a href="#">
                  <img src="img/icons/bag.png" alt="" />
                  <span>2</span>
                </a>
              </div>
              <div className="user-access">
                <a href="#">Register</a>
                <a href="#" className="in">Sign in</a>
              </div>
              <nav className="main-menu mobile-menu">
                <ul>
                  <li><a className="active" href="./index.html">Home</a></li>
                  <li><a href="./categories.html">Shop</a>
                    <ul className="sub-menu">
                      <li><a href="product-page.html">Product Page</a></li>
                      <li><a href="shopping-cart.html">Shopping Card</a></li>
                      <li><a href="check-out.html">Check out</a></li>
                    </ul>
                  </li>
                  <li><a href="./product-page.html">About</a></li>
                  <li><a href="./check-out.html">Blog</a></li>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* Header Info Begin */}
        <div className="header-info">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="header-item">
                  <img src="img/icons/delivery.png" alt="" />
                  <p>Free shipping on orders over $30 in USA</p>
                </div>
              </div>
              <div className="col-md-4 text-left text-lg-center">
                <div className="header-item">
                  <img src="img/icons/voucher.png" alt="" />
                  <p>20% Student Discount</p>
                </div>
              </div>
              <div className="col-md-4 text-left text-xl-right">
                <div className="header-item">
                  <img src="img/icons/sales.png" alt="" />
                  <p>30% off on dresses. Use code: 30OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    )
}

Header.propTypes = {

}

export default Header
