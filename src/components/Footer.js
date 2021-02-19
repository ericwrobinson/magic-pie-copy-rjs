import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { ButtonPrimary } from './Buttons';
import { Header } from './Typography'
import { SiteContent } from './Layouts';

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'

const StyledLink = styled(Link)`
  color: black;
`;

const CallToAction = styled.div`
  background-color: #F2F2F2;
  width: 100%;
  padding-top: 44px;
`;

const CallToActionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 44px;

  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
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

const Copyright = styled.span`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 8px;
  color: #757575;
`;

const Copyright2 = styled.span`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 44px;
  color: black;

  a {
    padding-left: 1.5px;
    font-weight: bold;
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <CallToAction>
          <SiteContent center>
            <CallToActionContent>
              <Header h2>call. text. email.</Header>
              <ButtonPrimary 
                linkTo='/contact'>contact us</ButtonPrimary>
            </CallToActionContent>
          </SiteContent>
        </CallToAction>

          <div className="content has-text-centered">
            <img
              src={logo}
              alt="Magic Pie Copy"
              style={{ marginTop: '88px', width: '14em', height: '3em' }}
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
                        <StyledLink to="/services">
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
                  <a title="facebook" target="_blank" href="https://www.facebook.com/MagicPieCopy/">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="twitter" target="_blank" href="https://twitter.com/MagicPieCopy">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="linkedin" target="_blank" href="https://www.linkedin.com/company/magic-pie-copywriting-company/">
                    <img
                      src={linkedin}
                      alt="Linkedin"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
          </Wrapper>
          <Copyright>© Copyright 2021 Magic Pie Copywriting LLC. All Rights Reserved.</Copyright>
          <Copyright2>Website Designed & Developed by  <br/><a href="" target="_blank"> Thumbs Up Studio LLC</a></Copyright2>

      </footer>
    )
  }
}

export default Footer
