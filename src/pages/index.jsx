import React from 'react';
import { ContactUs, Hero, Main } from '../components';

class IndexPage extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <Main>
        <Hero />
        <ContactUs />
      </Main>
    );
  }
}

export default IndexPage;
