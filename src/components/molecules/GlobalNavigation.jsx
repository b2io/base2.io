import React from 'react';
import { Link, UL, LI } from '../atoms';

class GlobalNavigation extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <nav>
        <UL>
          <LI>
            <Link to="/">Base Two</Link>
          </LI>
          <LI>
            <Link to="/#services">Services</Link>
          </LI>
          <LI>
            <Link to="/#technologies">Technologies</Link>
          </LI>
          <LI>
            <Link to="/#clients">Clients</Link>
          </LI>
          <LI>
            <Link to="/#team">Team</Link>
          </LI>
          <LI>
            <Link to="/#contact-us">Contact Us</Link>
          </LI>
          <LI>
            <Link to="/blog">Blog</Link>
          </LI>
        </UL>
      </nav>
    );
  }
}

export default GlobalNavigation;
