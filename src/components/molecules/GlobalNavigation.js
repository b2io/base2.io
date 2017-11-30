import React from 'react';
import { Link } from '../atoms';

class GlobalNavigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Base Two</Link>
          </li>
          <li>
            <Link to="/#services">Services</Link>
          </li>
          <li>
            <Link to="/#technologies">Technologies</Link>
          </li>
          <li>
            <Link to="/#clients">Clients</Link>
          </li>
          <li>
            <Link to="/#team">Team</Link>
          </li>
          <li>
            <Link to="/#contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default GlobalNavigation;
