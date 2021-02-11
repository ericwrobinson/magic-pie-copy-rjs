import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import styled from 'styled-components';

const NavWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

const LogoImage = styled.img`
  width: 300px;
  padding: 15px;
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
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <NavWrapper>
          <div className="navbar-brand">
            <Link to="/" title="Logo">
              <LogoImage src={logo} alt="Magic Pie Copy"/>
            </Link>
          </div>

          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}>
            <span />
            <span />
            <span />
          </div>

          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/portfolio">
                work
              </Link>
              <Link className="navbar-item" to="products">
                services
              </Link>
              <Link className="navbar-item" to="/about">
                about
              </Link>
              <Link className="navbar-item" to="/#contact">
                contact
              </Link>
            </div>
          </div>
        </NavWrapper>
      </nav>
    )
  }
}

export default Navbar
