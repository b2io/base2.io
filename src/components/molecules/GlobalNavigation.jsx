import React from 'react';
import styled from 'styled-components';
import noop from 'lodash/noop';
import {
  BaseTwoLogo,
  Button,
  CallToAction,
  Icon,
  Link,
  UL,
  LI,
} from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const NavBar = styled.nav`
  background-color: ${themed('color.background')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 48px;
  position: absolute;
  width: 100%;
  z-index: 1;

  &.menu-open {
    height: 100vh;
  }

  ${mediaQuery.small`
    background-color: ${themed('color.overlay')};
    height: 50px;
    padding: 0 20px;
  `};
`;

const NavList = styled(UL)`
  border-top: 1px solid ${themed('color.purple')};
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0 0 20px 0;
  width: 100%;

  .menu-open & {
    display: block;
  }

  ${mediaQuery.small`
    align-items: center;
    border: none;
    display: flex;
    height: auto;
    padding: 0;
    width: auto;
  `};
`;

const NavItem = styled(LI)`
  border-bottom: 1px solid ${themed('color.purple')};
  font-size: 1.5em;
  padding: 10px 0;

  ${mediaQuery.small`
    border: none;
  `};
`;

const NavLink = styled(Link)`
  color: ${themed('color.spaceBlue')};
  font-weight: 400;
  text-decoration: none;
  padding-left: 30px;
  width: 100%;

  ${mediaQuery.small`
    color: ${themed('color.menu')};
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
`;

const ContactCallToActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ContactCallToAction = styled(CallToAction)`
  display: none;
  height: 48px;
  font-size: 18px;
  margin: 10px 10px;
  text-align: center;
  width: 160px;

  .menu-open & {
    display: inline;
    bottom: 10px;
  }
`;

const MenuToggle = styled(Button)`
  background-image: none;
  border: none;
  box-shadow: none;
  color: ${themed('color.menu')};
  margin: 0 10px;
  padding: 0;

  &:active {
    background-color: transparent;
  }

  &:focus,
  &:hover {
    color: ${themed('color.menu')};
  }

  ${mediaQuery.small`
    display: none;
  `};
`;

class GlobalNavigation extends React.Component {
  static defaultProps = {
    onClick: noop,
  };

  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <NavBar className={this.state.isOpen ? 'menu-open' : ''}>
        <MainNavigationContainer>
          <LogoToggleContainer>
            <BaseTwoLogo />
            <MenuToggle onClick={this.handleClick}>
              <Icon name="menutoggle" />
            </MenuToggle>
          </LogoToggleContainer>
          <NavList>
            <NavItem>
              <NavLink to="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/#contact-us">Contact</NavLink>
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
            href="tel:16143981158"
            className="contact-call--right"
          >
            Email Us
          </ContactCallToAction>
        </ContactCallToActionContainer>
      </NavBar>
    );
  }
}

export default GlobalNavigation;
