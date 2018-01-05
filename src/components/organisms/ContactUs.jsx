import React from 'react';
import styled from 'styled-components';
import { ContactForm, ContactHeader, ContactInformation } from '../organisms';
import { Section } from '../atoms';
import { mediaQuery } from '../../util/style';

const Wrapper = styled(Section)`
  background: url(img/backgrounds/moon-surface.jpg) center bottom / contain
    no-repeat;
  display: block;
  padding-bottom: 34vw;

  ${mediaQuery.large`
    padding-bottom: 28em;
  `};
`;

const ContactContent = styled.div`
  position: relative;

  ${mediaQuery.medium`
    align-items: center;
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
  `};
`;

class ContactUs extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Wrapper>
        <ContactHeader />
        <ContactContent id="contact-us">
          <ContactForm />
          <ContactInformation />
        </ContactContent>
      </Wrapper>
    );
  }
}

export default ContactUs;
