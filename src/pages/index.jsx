import React from 'react';
import {
  ContactForm,
  ContactInformation,
  GlobalNavigation,
  Header,
  H1,
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
        <GlobalNavigation />
        <Header>
          <H1>Base Two</H1>
          <P lead>We turn ideas into beautiful, functional software.</P>
        </Header>
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
