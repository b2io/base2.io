import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  UL,
  LI,
  Img,
} from '../atoms';

const ClientList = styled(UL)`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Client = styled(LI)`
  padding: 0;
  margin: 0;
  display: inline-block;
`;

const ClientLogo = styled(Img)`
  height: auto;
`;

class ClientListItem extends React.Component {
  static defaultProps = {};

  static propTypes = {
    image: PropTypes.shape({}).isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { image, name } = this.props;

    return (
      <Client>
        <ClientLogo {...image} alt={name} title={name} />
      </Client>
    );
  }
}

ClientList.Item = ClientListItem;

export default ClientList;