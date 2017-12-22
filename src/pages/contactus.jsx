import React from 'react';
import { BaseTwoLogo, Link, Main } from '../components';

class ContactUsPage extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <Main>
        <h1>
          <BaseTwoLogo />
          Base Two
        </h1>
        <p>
          is located in <Link to="#columbus">Columbus, OH</Link> and{' '}
          <Link to="#pittsburgh">Pittsburgh, PA</Link>.
        </p>
        <p>
          Thanks to satellites and the internet, we can work with you wherever
          you are.
        </p>
        <button>Make Contact</button>
      </Main>
    );
  }
}

export default ContactUsPage;
