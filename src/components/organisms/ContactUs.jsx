import React from 'react';
import styled from 'styled-components';
import { ContactForm, ContactHeader, ContactInformation } from './contact';
import { Section } from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const ContactContent = styled.div`
  padding-bottom: 7em;
  padding-top: ${themed('navHeight.value')};
  position: relative;

  * {
    z-index: ${themed('zindex.content')};
  }

  ${mediaQuery.medium`
    align-items: center;
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
  `};
`;

function ContactUs() {
  return (
    <Section>
      <ContactHeader />
      <ContactContent id="contact-us">
        <ContactForm />
        <ContactInformation />
      </ContactContent>
    </Section>
  );
}

ContactUs.defaultProps = {};

ContactUs.propTypes = {};

export default ContactUs;
