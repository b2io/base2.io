import React from 'react';
import styled from 'styled-components';
import {
  BaseTwoLogoText,
  CallToAction,
  H1,
  Main,
  P,
  Section,
} from '../components';

const Wrapper = styled(Main)`
  background-image: url('img/backgrounds/hero/b2-hero-background-1920.png');
  background-position: 50% 0;
  height: 100vh;
`;

const ThanksContent = styled(Section)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 2em;
  text-align: center;
`;

const ThanksMessage = styled(Section)`
  h1 {
    margin-bottom: 0.25em;
  }

  svg {
    width: 20em;
  }

  p {
    font-size: 2em;
    margin-top: 0;

    &:last-of-type {
      margin-bottom: 0.2em;
    }
  }
`;

const GoHome = styled(CallToAction)`
  flex-basis: auto;
`;

class ThanksPage extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <Wrapper>
        <ThanksContent>
          <ThanksMessage>
            <H1>Thank you!</H1>
            <P>
              We&rsquo;re excited to hear that you&rsquo;re interested in
              working together. We&rsquo;ll review the information you sent and
              get back to you shortly.
            </P>
            <P>Sincerely,</P>
            <BaseTwoLogoText />
          </ThanksMessage>
          <GoHome href="../">Return Home</GoHome>
        </ThanksContent>
      </Wrapper>
    );
  }
}

export default ThanksPage;
