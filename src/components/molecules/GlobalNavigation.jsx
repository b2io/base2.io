import React from 'react';
import styled from 'styled-components';
import { BaseTwoLogo, Button, Link, UL, LI } from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const NavBar = styled.nav`
  align-items: flex-start;
  background-color: ${themed('color.background')};
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  z-index: 1;

  ${mediaQuery.medium`
    align-items: center;
  `};
`;

// const NavBarLogo = styled(BaseTwoLogo)`

// `;

const NavList = styled(UL)`
  border-top: 1px solid ${themed('color.spaceBlue')};
  height: 100%;
  list-style-type: none;
  padding: 0 0 20px 0;
  width: 100%;
`;

const NavItem = styled(LI)`
  border-bottom: 1px solid ${themed('color.spaceBlue')};
  font-size: 1.5em;
  padding: 10px 0;
`;

const NavLink = styled(Link)`
  color: ${themed('color.spaceBlue')};
  font-weight: 400;
  text-decoration: none;
  width: 100%;
`;
class GlobalNavigation extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <NavBar>
        <BaseTwoLogo />
        <Button>Open</Button>
        <NavList>
          <NavItem>
            <NavLink to="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/#contact-us">Contact</NavLink>
          </NavItem>
        </NavList>
      </NavBar>
    );
  }
}

export default GlobalNavigation;
