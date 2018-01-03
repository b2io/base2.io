import React from 'react';
import styled from 'styled-components';
import { ContactForm, ContactHeader, ContactInformation } from '../organisms';
import { Section } from '../atoms';
import { mediaQuery } from '../../util/style';

const Wrapper = styled(Section)`
  background-image: url('img/backgrounds/moon-surface.jpg');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;

  ${mediaQuery.large`
    padding-bottom: 28em;
  `};
`;

const ContactContent = styled.div`
  position: relative;

  ${mediaQuery.medium`
    align-items: center;
    display: flex;
    justify-content: space-between;

    > * {
      width: 48%;
    }
  `};
`;

class ContactUs extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Wrapper id="contact-us">
        <ContactHeader />
        <ContactContent>
          <ContactForm />
          <ContactInformation />
        </ContactContent>
      </Wrapper>
    );
  }
}

export default ContactUs;
