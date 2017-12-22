import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import planetEarthSrc from '../../assets/planet-earth.jpg';
import { mediaQuery } from '../../util/style';

// TODO: Replace with the B2Logo from Mandy's branch.
const B2Logo = () => null;

// TODO: Make it pretty.
const Wrapper = styled.div`
  display: grid;

  ${mediaQuery.large``};
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
        <B2Logo />
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
