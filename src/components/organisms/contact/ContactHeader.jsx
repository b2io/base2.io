import noop from 'lodash/noop';
import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { mediaQuery, themed } from '../../../util/style';
import { BaseTwoLogoText, CallToAction } from '../../atoms';
import { ScrollLink } from '../../molecules';

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 2em;
  text-align: center;

  ${mediaQuery.medium`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 30vw;
    position: relative;

    > * {
      z-index: ${themed('zindex.overlay')};
    }
  `};

  ${mediaQuery.large`
    min-height: 110vh;
    padding-right: 37vw;
  `};

  svg {
    margin: 0 auto;
    max-width: 90%;

    ${mediaQuery.small`
      max-width: ${em('600px')};
    `};

    ${mediaQuery.medium`
      max-width: ${em('615px')};
    `};
  }
`;

const Earth = styled.picture`
  width: 100%;

  img {
    max-width: 100%;
  }

  ${mediaQuery.small`
    width: 73%;
  `};

  ${mediaQuery.medium`
    position: absolute;
    right: -34%;
    top: 0;
    z-index: ${themed('zindex.base')};
  `};
`;

const LocationText = styled.span`
  display: inline-block;
  margin: 0.5em 0 0;

  ${mediaQuery.small`
    font-size: 1.9em;
  `};

  ${mediaQuery.medium`
    margin-bottom: 1em;
  `};

  strong {
    color: ${themed('color.link')};
    font-weight: inherit;
    font-style: italic;
  }
`;

const LocationTagline = styled.p`
  font-size: 1.25em;
  font-style: italic;
  margin: 0 auto 2em;
  max-width: 17em;
  width: 100%;

  ${mediaQuery.small`
    font-size: 2em;
  `};

  ${mediaQuery.medium`
    font-size: 2.25em;
  `};
`;

const ScrollButton = styled(CallToAction)`
  margin: 0 auto;
  max-width: 200px;
  width: 100%;

  ${mediaQuery.small`
    max-width: 400px;
  `};
`;

const ArrowIndicator = styled.img`
  display: block;
  margin: 1em auto 0;
  max-width: ${em('21px')};

  ${mediaQuery.small`
    max-width: ${em('27px')};
  `};

  ${mediaQuery.large`
    max-width: ${em('43px')};
  `};
`;

const scroll = {
  target: 'contact-us',
  title: 'Scroll down for more',
};

function ContactHeader() {
  return (
    <Wrapper>
      <BaseTwoLogoText id="contact-header-logo" />
      <LocationText>
        is located in <strong>Columbus, OH</strong>,{' '}
        <strong>Pittsburgh, PA</strong>, and <strong>Chicago, IL</strong>.
      </LocationText>
      <Earth>
        <source srcSet="img/planet-earth.webp" type="image/webp" />
        <source srcSet="img/planet-earth.jpg" type="image/jpeg" />
        <img src="img/planet-earth.jpg" alt="Planet Earth" />
      </Earth>
      <LocationTagline>
        Thanks to satellites and the internet, we can work with you wherever you
        are.
      </LocationTagline>
      <ScrollButton href="#contact-us">Make Contact</ScrollButton>
      <ScrollLink target={scroll.target} title={scroll.title}>
        <ArrowIndicator src="../img/scroll-arrows.svg" />
      </ScrollLink>
    </Wrapper>
  );
}

ContactHeader.defaultProps = {
  onContact: noop,
};

export default ContactHeader;
