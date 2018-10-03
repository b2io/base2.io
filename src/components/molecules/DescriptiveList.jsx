import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { H3, Icon } from '../atoms';

const Header = styled.header`
  margin: 0 0 1em;
`;

const ItemH3 = styled(H3)`
  display: inline-block;
  margin: 0 0 0 1rem;
`;

function DescriptiveListItem({ children, iconName, title }) {
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

DescriptiveListItem.propTypes = {
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const DescriptiveList = styled.ul`
  list-style: none;
  margin: 2em 0;
  padding: 0;
`;

DescriptiveList.Item = DescriptiveListItem;

export default DescriptiveList;
