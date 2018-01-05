import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { H3, Icon } from '../atoms';

const Header = styled.header`
  margin: 0 0 1em;
`;

const ItemH3 = H3.extend`
  display: inline-block;
  margin: 0 0 0 1rem;
`;

class DescriptiveListItem extends React.Component {
  static defaultProps = {};

  static propTypes = {
    children: PropTypes.node.isRequired,
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, iconName, title } = this.props;

    return (
      <li>
        <Header>
          <Icon name={iconName} style={{ fontSize: '3em' }} />
          <ItemH3>{title}</ItemH3>
        </Header>
        {children}
      </li>
    );
  }
}

const DescriptiveList = styled.ul`
  list-style: none;
  margin: 2em 0;
  padding: 0;
`;

DescriptiveList.Item = DescriptiveListItem;

export default DescriptiveList;
