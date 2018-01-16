import React from 'react';
import styled from 'styled-components';
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
  align-items: center;
  background-color: ${themed('color.background')};
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: space-between;
  padding-bottom: 10px;
  position: absolute;
  width: 100%;
  z-index: 1;

  ${mediaQuery.medium`
    align-items: center;
  `};
`;

const NavList = styled(UL)`
  border-top: 1px solid ${themed('color.purple')};
  height: calc(100% - 130px);
  list-style-type: none;
  margin: 0;
  padding: 0 0 20px 0;
  width: 100%;
`;

const NavItem = styled(LI)`
  border-bottom: 1px solid ${themed('color.purple')};
  font-size: 1.5em;
  padding: 10px 0;
`;

const NavLink = styled(Link)`
  color: ${themed('color.spaceBlue')};
  font-weight: 400;
  text-decoration: none;
  padding-left: 30px;
  width: 100%;
`;

const ContactCallToAction = styled(CallToAction)`
  height: 48px;
  width: 160px;
  font-size: 18px;
  margin: 10px 10px;
  text-align: center;
`;

const MenuLogo = styled(BaseTwoLogo)`
  margin: 0 10px;
`;

const MenuToggle = styled(Button)`
  background-image: none;
  border: none;
  box-shadow: none;
  color: ${themed('color.menu')};
  height: 55px;
  margin: 0 10px;
  padding: 0;
`;

class GlobalNavigation extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <NavBar>
        <MenuLogo />
        <MenuToggle>
          <Icon name="menutoggle" />
        </MenuToggle>
        <NavList>
          <NavItem>
            <NavLink to="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/#contact-us">Contact</NavLink>
          </NavItem>
        </NavList>
        <ContactCallToAction href="tel:16143981158">
          614.398.1158
        </ContactCallToAction>
        <ContactCallToAction href="tel:16143981158">
          Email Us
        </ContactCallToAction>
      </NavBar>
    );
  }
}

export default GlobalNavigation;
