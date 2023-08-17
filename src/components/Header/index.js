import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import './index.css';

class Header extends Component {
  state = {
    showDropdown: false,
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({ showDropdown: !prevState.showDropdown }));
  };

  render() {
    const { showDropdown } = this.state;

    return (
      <nav className="navbar">
        <Link to="/" className="brand">
          <img src="http://www.focuswebmedia.in/wp-content/uploads/2023/06/logo-big.png" alt="Focuswebmedia" />
        </Link>
        <div className="menu-btn">
          <div className="navigation">
            <ul className="navigation-items">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutUs">About Us</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li onMouseEnter={this.toggleDropdown} onMouseLeave={this.toggleDropdown}>
                <Link to="/services"><span>Services <FaCaretDown /></span></Link>
                {showDropdown && (
                  <ul className="dropdown">
                    <li><Link to="#">Social Media Campaigns on FB, Insta, Twitter, Linkedin, YT</Link></li>
                    <li><Link to="#">Website development / maintenance / upgradation</Link></li>
                    <li><Link to="#">SEO & SMO (Search Engine Optimization)</Link></li>
                    <li><Link to="#">SEM (Search Engine Marketing)</Link></li>
                    <li><Link to="#">Analytics</Link></li>
                    <li><Link to="#">Keyword Analysis</Link></li>
                    <li><Link to="#">Content Marketing using Blogs</Link></li>
                    <li><Link to="#">Google Ads (display & search ads)</Link></li>
                    <li><Link to="#">Email and Mobile Marketing</Link></li>
                    <li><Link to="#">Event coverage</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contactUs">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
