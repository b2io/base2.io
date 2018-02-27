import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { Section, TwoToneHeading } from '../atoms';
import { ClientList } from '../molecules';

const Wrapper = styled(Section)`
  background: url('img/backgrounds/star-field.png');
  padding-bottom: 45vw;
  position: relative;
`;

const ClientsHeading = styled(TwoToneHeading)`
  margin-bottom: ${rem('90px')};
  text-align: center;
`;

class Clients extends React.Component {
  static defaultProps = {};

  static propTypes = {
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        image: PropTypes.shape({}).isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { clients } = this.props;

    return (
      <Wrapper id="clients">
        <ClientsHeading>
          We <span>Collaborate</span>
        </ClientsHeading>
        <ClientList>
          {clients.map(client => (
            <ClientList.Item {...client} key={client.id} />
          ))}
        </ClientList>
      </Wrapper>
    );
  }
}

export default Clients;
