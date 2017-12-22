import React from 'react';
import {
  ContactHeader,
  ContactForm,
  ContactInformation,
  Hero,
  Main,
  Section,
} from '../components';

class IndexPage extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <Main>
        <Hero />
        <Section id="contact-us">
          <ContactHeader />
          <ContactForm />
          <ContactInformation />
        </Section>
      </Main>
    );
  }
}

export default IndexPage;
