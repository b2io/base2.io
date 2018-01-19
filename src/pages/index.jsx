import React from 'react';
import { ContactUs, GlobalNavigation, Hero, Main } from '../components';

class IndexPage extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <Main>
        <GlobalNavigation />
        <Hero />
        <ContactUs />
      </Main>
    );
  }
}

export default IndexPage;
