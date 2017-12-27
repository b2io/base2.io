import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import planetEarthSrc from '../../assets/planet-earth.jpg';
import { mediaQuery } from '../../util/style';
import { B2LogoText } from '../atoms/logos';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2em;

  img {
    max-width: 100%;
  }

  ${mediaQuery.small`
    display: flex;
    align-items: start;

    img {
      max-width: 50%;
    }
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
