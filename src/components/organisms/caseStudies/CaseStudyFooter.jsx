import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import { Button } from '../../atoms';
import { themed } from '../../../util/style';
import Footer from '../../molecules/Footer';

const Wrapper = styled.footer`
  margin-top: 10em;
`;

const LinkWrapper = styled(GatsbyLink)`
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 10em;
  text-decoration: none;
  width: 328px;
  
  * {
    z-index: ${themed('zindex.content')}
  }
`

const CallToActionButton = styled(Button)`
  font-weight: 300;
  text-align: center;
  width: 100%;
`

function CaseStudyFooter() {
  return (
    <Wrapper>
      <LinkWrapper to="/#contact-us">
        <CallToActionButton purple>
          Get Started
        </CallToActionButton>
      </LinkWrapper>
      <Footer />
    </Wrapper>
  );
}

CaseStudyFooter.defaultProps = {};

CaseStudyFooter.propTypes = {};

export default CaseStudyFooter;
