import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import planetEarthSrc from '../../assets/planet-earth.jpg';
import { mediaQuery } from '../../util/style';
import { B2LogoText } from '../atoms/logos';

const Wrapper = styled.div`
  justify-items: center;
  text-align: center;
  /* margin: 0 2em 2em; */

  ${mediaQuery.small`
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    grid-template-row: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "left right";
    justify-content: space-evenly;

    > *:not(img) {
      grid-area: left;
    }
  `};

  img {
    max-width: 100%;

    ${mediaQuery.small`
    img {
      grid-area: right;
    }
  `};
  }

  svg {
    max-width: 100%;
    min-width: 10em;

    ${mediaQuery.small`
      max-width: 37.5em;
      width: 100%;
    `};
  }
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
        <p>
          is located in <em>Columbus, OH</em> and <em>Pittsburgh, PA</em>.
        </p>
        <img alt="Planet Earth" src={planetEarthSrc} />
        <p>
          Thanks to satellites and the internet, we can work with you wherever
          you are.
        </p>
        <button onClick={onContact}>Make Contact</button>
      </Wrapper>
    );
  }
}

export default ContactHeader;
