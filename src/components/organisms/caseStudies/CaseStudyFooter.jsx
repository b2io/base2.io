import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';
import { webpBackground } from '../../../util/style';

const Wrapper = styled.div`
  background: no-repeat center;
  background-size: 10% 100%;
  overflow-x: hidden;
  min-height: 150px;
  width: 100%;

  ${webpBackground('/img/backgrounds/moon.jpg', '/img/backgrounds/moon.webp')};
`;

function CaseStudyFooter() {
  return (
    <Wrapper>
      <Button>Get Started</Button>
    </Wrapper>
  );
}

CaseStudyFooter.defaultProps = {};

CaseStudyFooter.propTypes = {};

export default CaseStudyFooter;
