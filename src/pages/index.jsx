import React from 'react';
import styled from 'styled-components';
import {
  ContactHeader,
  ContactForm,
  ContactInformation,
  // Hero,
  Main,
} from '../components';

const Contact = styled.section`
  grid-column: 2;
`;

class IndexPage extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <Main>
        {/* <Hero /> */}
        <Contact id="contact-us">
          <ContactHeader />
          <ContactForm />
          <ContactInformation />
        </Contact>
      </Main>
    );
  }
}

export default IndexPage;
