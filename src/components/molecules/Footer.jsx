import React from 'react';
import styled from 'styled-components';
import { mediaQuery, themed, webpBackground } from '../../util/style';

/* Allow the starry background to overlap with page content above the footer. */
const footerBackgroundHeight = '600px'
const footerHeight = '300px'

const Wrapper = styled.footer`
  height: ${footerHeight};
  position: relative;
  width: 100%;
`;

const Background = styled.div`
  background-color: black;
  background-position-y: 50%;
  background-size: cover;
  bottom: 0;
  display: flex;
  height: ${footerBackgroundHeight};
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: ${themed('zindex.outerSpace')};
  ${webpBackground('/img/backgrounds/moon/moon-960.jpg', '/img/backgrounds/moon/moon-960.webp')}

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
