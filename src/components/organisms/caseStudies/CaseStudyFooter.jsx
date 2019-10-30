import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';
import { mediaQuery, webpBackground } from '../../../util/style';
import { em } from 'polished';
import { CallToActionLink } from '../../atoms';

const Wrapper = styled.div`
  align-items: flex-start;
  padding-top: 4vh;
  background: no-repeat bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin-top: 5vw;
  min-height: 45vw;
  overflow-x: hidden;
  width: 100%;

  ${webpBackground('/img/backgrounds/moon.jpg', '/img/backgrounds/moon.webp')};
`;

function CaseStudyFooter() {
  return (
    <Wrapper>
      <CallToActionLink to="/#contact-us">Get Started</CallToActionLink>
    </Wrapper>
  );
}

CaseStudyFooter.defaultProps = {};

CaseStudyFooter.propTypes = {};

export default CaseStudyFooter;
