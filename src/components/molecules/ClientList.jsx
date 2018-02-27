import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UL, LI, Img } from '../atoms';

const ClientList = styled(UL)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Client = styled(LI)`
  margin: 0 0 15px;
  width: 25%;
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
