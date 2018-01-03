import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { mediaQuery, themed } from '../../../util/style';
import { BaseTwoLogoText } from '../../atoms/logos';
import { Button } from '../../atoms';

const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: 2em;
  text-align: center;

  ${mediaQuery.medium`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 33vw;
    position: relative;

    > * {
      z-index: 1;
    }
  `};

  ${mediaQuery.large`
    min-height: 110vh;
    padding-right: 45vw;
  `};

  Button {
    margin: 0 auto;
  }

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

const Earth = styled.img`
  width: 73%;

  ${mediaQuery.medium`
    position: absolute;
    right: -30%;
    z-index: 0;
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
  font-style: italic;
  margin: 0 auto 2em;
  max-width: 17em;

  ${mediaQuery.small`
    font-size: 2em;
  `};

  ${mediaQuery.medium`
    font-size: 2.25em;
  `};
`;

const Scroll = styled.img`
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

class ContactHeader extends React.Component {
  static defaultProps = {
    onContact: noop,
  };

  static propTypes = {
    onContact: PropTypes.func,
  };

  render() {
    const { onContact } = this.props;

    return (
      <Wrapper>
        <BaseTwoLogoText />
        <LocationText>
          is located in <strong>Columbus, OH</strong> and{' '}
          <strong>Pittsburgh, PA</strong>.
        </LocationText>
        <Earth src="img/planet-earth.jpg" alt="Planet Earth" />
        <LocationTagline>
          Thanks to satellites and the internet, we can work with you wherever
          you are.
        </LocationTagline>
        <Button gradient onClick={onContact}>
          Make Contact
        </Button>
        <Scroll
          src="img/scroll-arrows.svg"
          alt="Scroll down for contact information."
        />
      </Wrapper>
    );
  }
}

export default ContactHeader;
