import React from 'react';
import {
  ContactForm,
  ContactInformation,
  Hero,
  H2,
  Main,
  P,
  Section,
} from '../components';

class IndexPage extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <Main>
        <Hero />
        <Section id="contact-us">
          <H2>Contact Us</H2>
          <P lead>
            Let’s work together! Fill out the form below with some info about
            your project.
          </P>
          <ContactForm />
          <ContactInformation />
        </Section>
      </Main>
    );
  }
}

export default IndexPage;
