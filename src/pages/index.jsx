import React from 'react';
import {
  ContactUs,
  GlobalNavigation,
  Hero,
  Main,
  Services,
} from '../components';

class IndexPage extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <Main>
        <GlobalNavigation />
        <Hero />
        <Services />
        <ContactUs />
      </Main>
    );
  }
}

export default IndexPage;
