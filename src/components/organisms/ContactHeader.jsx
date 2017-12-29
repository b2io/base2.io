import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import planetEarthSrc from '../../assets/planet-earth.jpg';
import { mediaQuery, themed } from '../../util/style';
import { B2LogoText } from '../atoms/logos';
import { Section, Button } from '../atoms';

const Wrapper = styled(Section)`
  background-image: url(${planetEarthSrc});
  background-repeat: no-repeat;
  background-size: 110vw;
  background-position: center 40%;
  height: 100vh;
  padding-top: 2em;
  text-align: center;

  ${mediaQuery.small`
    background-position: center 35%;
    background-size: 63vh;
  `};

  ${mediaQuery.medium`
    background-position: 150% 50%;
    background-size: 59vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 33vw;
  `};

  ${mediaQuery.large`
    background-position: 180% 30%;
    background-size: 70vw;
    height: 110vh;
    padding-right: 45vw;
  `};

  Button {
    margin: 0 auto;
  }

  svg {
    margin: 0 auto;
    max-width: 90%;
    min-width: 10em;

    ${mediaQuery.small`
    max-width: 600px;
  `};

    ${mediaQuery.medium`
    max-width: 615px;
    width: 100%;
  `};
  }
`;

const LocationText = styled.span`
  display: inline-block;
  margin: 0.5em 0 60vh;

  ${mediaQuery.small`
    font-size: 1.9em;
    margin-bottom: 60vh;
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
  margin-top: 0;

  ${mediaQuery.small`
    font-size: 2.25em;
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
        <B2LogoText />
        <LocationText>
          is located in <strong>Columbus, OH</strong> and{' '}
          <strong>Pittsburgh, PA</strong>.
        </LocationText>
        <LocationTagline>
          Thanks to satellites and the internet, <br />
          we can work with you wherever you are.
        </LocationTagline>
        <Button submit onClick={onContact}>
          Make Contact
        </Button>
      </Wrapper>
    );
  }
}

export default ContactHeader;
