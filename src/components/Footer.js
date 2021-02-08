import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const StyledLink = styled(Link)`
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterNavItem = styled.li`
  display: inline;
  padding: 15px;
`;

const FooterNav = styled.ul`
  list-style: none !important;
  text-align: center;
  display: inline;
  margin-left: 0;
`;

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-white has-text-black-ter">
          <div className="content has-text-centered">
            <img
              src={logo}
              alt="Magic Pie Copy"
              style={{ width: '21em', height: '10em' }}
            />
          </div>

          <Wrapper className="content has-text-centered has-background-white has-text-black-ter">
              <div style={{ maxWidth: '100vw' }} className="rows has-text-centered">
                <div className="row is-4">
                  <section className="menu">
                    <FooterNav>
                      <FooterNavItem>
                        <StyledLink to="/about">
                          work
                        </StyledLink>
                      </FooterNavItem>
                      <FooterNavItem>
                        <StyledLink to="/products">
                          about
                        </StyledLink>
                      </FooterNavItem>
                      <FooterNavItem>
                        <StyledLink to="/contact/examples">
                          services
                        </StyledLink>
                      </FooterNavItem>
                    </FooterNav>
                  </section>
                </div>

                <div className="row is-4 is-center social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
          </Wrapper>
      </footer>
    )
  }
}

export default Footer
