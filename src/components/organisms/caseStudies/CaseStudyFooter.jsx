import React from 'react';
import styled from 'styled-components';
import { CallToAction } from '../../atoms';
import { webpBackground } from '../../../util/style';

const Wrapper = styled.div`
  align-items: flex-start;
  background: no-repeat bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin-top: 6vw;
  min-height: 45vw;
  overflow-x: hidden;
  padding-top: 7vh;
  width: 100%;

  ${webpBackground('/img/backgrounds/moon.jpg', '/img/backgrounds/moon.webp')};
`;

function CaseStudyFooter() {
  return (
    <Wrapper>
      <CallToAction to="/#contact-us">Get Started</CallToAction>
    </Wrapper>
  );
}

CaseStudyFooter.defaultProps = {};

CaseStudyFooter.propTypes = {};

export default CaseStudyFooter;
