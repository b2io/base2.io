import React from 'react';
import styled from 'styled-components';
import { mediaQuery, themed, webpBackground } from '../../util/style';

/* Allow the starry background to overlap with page content above the footer. */
const footerBackgroundHeight = '600px'
const footerHeight = '300px'

const Wrapper = styled.footer`
  position: relative;
  height: ${footerHeight};
  width: 100%;
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  background-color: black;
  background-size: cover;
  background-position-y: 50%;
  ${webpBackground('/img/backgrounds/moon/moon-960.jpg', '/img/backgrounds/moon/moon-960.webp')}
  display: flex;
  height: ${footerBackgroundHeight};
  justify-content: center;
  width: 100%;
  z-index: ${themed('zindex.outerSpace')};

  ${mediaQuery.smedium`
    ${webpBackground('/img/backgrounds/moon/moon-1920.jpg', '/img/backgrounds/moon/moon-1920.webp')}
  `};
`

function Footer() {
  return (
    <Wrapper>
      <Background />
    </Wrapper>
  );
}

Footer.defaultProps = {
};

Footer.propTypes = {
};

export default Footer;
