import React from 'react';
import styled from 'styled-components';
import { CallToAction } from '../../atoms';
import { webpBackground, mediaQuery } from '../../../util/style';

const Wrapper = styled.footer`
  align-items: center;
  background-color: black;
  background-position-x: center;
  background-position-y: 5rem;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 25rem;
  justify-content: center;
  width: 100%;
  ${webpBackground('/img/backgrounds/moon.jpg', '/img/backgrounds/moon.webp')};

  ${mediaQuery.small`
    height: 26rem;
  `}

  ${mediaQuery.medium`
    background-position-y: 20%;
  `}

  ${mediaQuery.large`
    background-position-y: 30%;
    height: 28rem;
  `}
`;

const CallToActionButton =  styled(CallToAction)`
  margin-bottom: 3rem;

  ${mediaQuery.small`
    margin-bottom: 6rem;
  `}

  ${mediaQuery.medium`
    margin-bottom: 5rem;
  `}

  ${mediaQuery.large`
    margin-bottom: 6rem;
  `}

  ${mediaQuery.xlarge`
    margin-bottom: 7rem;
  `}
`

function CaseStudyFooter() {
  return (
    <Wrapper>
      <CallToActionButton href="/#contact-us">
        Get Started
      </CallToActionButton>
    </Wrapper>
  );
}

CaseStudyFooter.defaultProps = {};

CaseStudyFooter.propTypes = {};

export default CaseStudyFooter;
