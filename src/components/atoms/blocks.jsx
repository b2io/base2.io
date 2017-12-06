import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { themed } from '../../util/style';

const Main = styled.main``;

const Section = styled.section`
  margin: 2em auto;
  max-width: 100%;
  padding: 0 2em;
  width: 960px;
`;

const Header = Section.withComponent('header');

const Wrapper = styled.div`
  background-color: ${themed('color.appBar')};
  width: 100%;

  > ${Section} {
    margin: 0 auto;
    padding: 2em;
  }
`;

class BreakoutSection extends React.Component {
  static defaultProps = {};

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Wrapper>
        <Section {...rest}>{children}</Section>
      </Wrapper>
    );
  }
}

export { BreakoutSection, Header, Main, Section };
