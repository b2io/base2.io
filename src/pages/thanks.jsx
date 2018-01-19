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
import { mediaQuery } from '../util/style';

const Wrapper = styled(Main)`
  background-image: url('img/backgrounds/hero/b2-hero-background-1920.png');
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: 270%;
  height: 100vh;

  ${mediaQuery.small`
    background-size: 140%;
  `};

  ${mediaQuery.medium`
    background-size: 100%;
  `};

  ${mediaQuery.large`
    background-position: 50% 5%;
  `};
`;

const ThanksContent = styled(Section)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
  padding-bottom: 2em;
  text-align: center;
  width: 100%;

  > * {
    height: auto;
    max-width: 1024px;
  }

  ${mediaQuery.large`
    justify-content: unset;
  `};
`;

const ThanksMessage = styled(Section)`
  h1 {
    margin-bottom: 0.25em;
  }
`;

const BaseTwoLogo = styled.div`
  margin: 0 auto;
  width: 14em;

  ${mediaQuery.small`
    width: 20em;
  `};
`;

const ThanksText = styled(P)`
  font-size: 1.5em;
  margin-top: 0;
  max-width: inherit;
  width: inherit;

  &:last-of-type {
    margin-bottom: 0.2em;
  }

  ${mediaQuery.small`
    font-size: 2em;
  `};

  ${mediaQuery.medium`
    font-size: 2.25em;
  `};
`;

const GoHome = styled(CallToAction)`
  flex-basis: auto;

  ${mediaQuery.large`
    margin-top: 4em;
  `};
`;

class ThanksPage extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <Wrapper>
        <ThanksContent>
          <ThanksMessage>
            <H1>Thank you!</H1>
            <ThanksText>
              We&rsquo;re excited to hear that you&rsquo;re interested in
              working together. We&rsquo;ll review the information you sent and
              get back to you shortly.
            </ThanksText>
            <ThanksText>Sincerely,</ThanksText>
            <BaseTwoLogo>
              <BaseTwoLogoText />
            </BaseTwoLogo>
          </ThanksMessage>
          <GoHome href="../">Return Home</GoHome>
        </ThanksContent>
      </Wrapper>
    );
  }
}

export default ThanksPage;
