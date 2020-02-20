import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { em } from 'polished';
import windowSize from 'react-window-size';
import {
  A,
  BaseTwoLogo,
  Button,
  CallToAction,
  Icon,
  Link,
  UL,
  LI,
} from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const mobileBottomMenu = {
  value: `${em('75px')}`,
};

const MOBILE_NAVIGATION_BREAKPOINT = '767';

const NavBar = styled.nav`
  background-color: ${themed('color.navBackground')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${themed('navHeight.value')};
  position: fixed;
  width: 100%;
  z-index: ${themed('zindex.overlay')};

  &.menu-open {
    height: 100vh;
    transition: height 300ms ease-in;
  }

  &.menu-closed {
    transition: all 300ms linear 500ms;
  }

  ${mediaQuery.smedium`
    padding: 0 20px;
  `};
`;

const NavList = styled(UL)`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;

  .menu-open & {
    border-top: 1px solid ${themed('color.navAccent')};
    height: auto;
    opacity: 1;
    transition: all 300ms ease-in 200ms;
  }

  .menu-closed & {
    border-top: 1px solid ${themed('color.navAccent')};
    height: 0;
    opacity: 0;
    transition: all 150ms ease-in 200ms;

    ${mediaQuery.smedium`
      align-items: center;
      display: flex;
      height: auto;
      opacity: 1;
      padding: 0;
      width: auto;
  `};
  }
`;

const NavItem = styled(LI)`
  border-bottom: 1px solid ${themed('color.navAccent')};
  font-size: 1.5em;

  ${mediaQuery.smedium`
    border: none;
  `};
`;

const NavLink = styled(Link)`
  color: ${themed('color.collapseNavText')};
  display: inline-block;
  font-weight: 400;
  text-decoration: none;
  margin: 10px 0 10px 30px;
  width: 100%;

  ${mediaQuery.smedium`
    color: ${themed('color.navText')};
    position: relative;
    width: auto;

    &:hover {
      color: ${themed('color.accent')};
      transition: color 0.3s ease-in-out 0s;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${themed('color.navAccent')};
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  `};
`;

const MainNavigationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LogoToggleContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 48px;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;

  ${mediaQuery.smedium`
    font-size: 1.25rem;
    padding: 0;
  `};
`;

const HomeLink = styled(A)`
  align-items: center;
  display: flex;
  height: 100%;
  max-width: 75px;
  width: 100%;

  > svg {
    height: 50%;

    ${mediaQuery.smedium`
      height: 70%;
  `};
  }
`;

const MenuToggle = styled(Button)`
  background-image: none;
  border: none;
  box-shadow: none;
  color: ${themed('color.navText')};
  margin: 0 10px;
  padding: 0;

  &:active {
    background-color: transparent;
  }

  &:focus,
  &:hover {
    color: ${themed('color.navText')};
  }

  ${mediaQuery.smedium`
    display: none;
  `};
`;

const ContactCallToActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ContactCallToAction = styled(CallToAction)`
  height: 0;
  font-size: 18px;
  line-height: 48px;
  margin: 0;
  opacity: 0;
  padding: 0;
  text-align: center;
  width: 160px;

  .menu-open & {
    height: 48px;
    margin: 10px 10px ${mobileBottomMenu.value} 10px;
    opacity: 1;
    transition: opacity 1000ms ease-in, height 800ms ease-in;
  }

  .menu-closed & {
    border-width: 0;
    height: 0;
    margin: 0;
    opacity: 0;
    transition: opacity 500ms ease-out, height 300ms ease-out;
  }
`;

const toggleNoScroll = isOpen => {
  if (!isOpen) {
    document.body.classList.add('noScroll');
  } else {
    document.body.classList.remove('noScroll');
  }
};

class GlobalNavigation extends React.Component {
  static defaultProps = {};

  static propTypes = {
    windowWidth: PropTypes.number.isRequired,
  };

  state = {
    isOpen: false,
  };

  handleClick = () => {
    toggleNoScroll(this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleLinkClick = () => {
    toggleNoScroll(this.state.isOpen);
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <NavBar
        className={
          this.props.windowWidth <= MOBILE_NAVIGATION_BREAKPOINT &&
          this.state.isOpen
            ? 'menu-open'
            : 'menu-closed'
        }
      >
        <MainNavigationContainer>
          <LogoToggleContainer>
            <HomeLink href="/" title="Base Two - Home">
              <BaseTwoLogo />
            </HomeLink>
            <MenuToggle aria-label="Toggle Menu" onClick={this.handleClick}>
              <Icon name="menutoggle" />
            </MenuToggle>
          </LogoToggleContainer>
          <NavList>
            <NavItem>
              <NavLink to="/#services" onClick={this.handleLinkClick}>
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#clients" onClick={this.handleLinkClick}>
                Clients
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/case-studies" onClick={this.handleLinkClick}>
                Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#team" onClick={this.handleLinkClick}>
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/jobs" onClick={this.handleLinkClick}>
                Jobs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" onClick={this.handleLinkClick}>
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#contact-us" onClick={this.handleLinkClick}>
                Contact
              </NavLink>
            </NavItem>
          </NavList>
        </MainNavigationContainer>
        <ContactCallToActionContainer>
          <ContactCallToAction
            href="tel:16143981158"
            className="contact-call--left"
          >
            614.398.1158
          </ContactCallToAction>
          <ContactCallToAction
            href="mailto:info@base2.io"
            className="contact-call--right"
          >
            Email Us
          </ContactCallToAction>
        </ContactCallToActionContainer>
      </NavBar>
    );
  }
}

export default (typeof window !== 'undefined'
  ? windowSize(GlobalNavigation)
  : GlobalNavigation);
