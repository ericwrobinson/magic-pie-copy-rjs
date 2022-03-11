import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/magic-pie-logo.svg';
import styled from 'styled-components';

const Nav = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;

  @media only screen and (max-width: 1023px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 580px) {
    padding: 0 10px;
  }
`;

const LogoImage = styled.img`
  width: 300px;
  padding: 15px;
`;

const NavMenu = styled.div`
  padding-right: 20px;

  @media only screen and (max-width: 580px) {
    padding-right: 10px;
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <Nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <NavWrapper>
          <div className="navbar-brand">
            <Link 
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
              to="/" title="Logo">
              <LogoImage src={logo} alt="Magic Pie Copy"/>
            </Link>
          </div>

          {/* Hamburger menu */}
          <div
            role="button"
            tabIndex={0}
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onKeyDown={() => this.toggleHamburger()}
            onClick={() => this.toggleHamburger()}>
            <span />
            <span />
            <span />
          </div>
        </NavWrapper>

          <NavMenu id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/portfolio/">
                work
              </Link>
              <Link className="navbar-item" to="/services/">
                services
              </Link>
              <Link className="navbar-item" to="/about/">
                about
              </Link>
              <Link className="navbar-item" to="/contact/">
                contact
              </Link>
            </div>
          </NavMenu>
      </Nav>
    )
  }
}

export default Navbar
